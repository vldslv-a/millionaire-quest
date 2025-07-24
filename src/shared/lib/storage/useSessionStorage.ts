import { useCallback, useEffect, useMemo, useSyncExternalStore } from 'react';

class StorageManager {
  private storage: Storage;

  listeners: VoidFunction[] = [];

  constructor(storage: Storage) {
    this.storage = storage;
  }

  subscribe(onStoreChange: VoidFunction) {
    this.listeners = [...this.listeners, onStoreChange];

    return () => {
      this.listeners = this.listeners.filter((l) => l !== onStoreChange);
    };
  }

  getItem(key: string): string | undefined {
    try {
      const item = this.storage.getItem(key);

      return item ?? undefined;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  setItem<T>(key: string, value: T): void {
    try {
      if (typeof value === 'undefined') {
        this.storage.removeItem(key);
      } else {
        this.storage.setItem(key, JSON.stringify(value));
      }

      this.listeners.forEach((listener) => {
        listener();
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  removeItem(key: string) {
    try {
      this.storage.removeItem(key);

      this.listeners.forEach((listener) => {
        listener();
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  private handleStorageEvent = (event: StorageEvent) => {
    if (event.storageArea === this.storage) {
      this.listeners.forEach((listener) => {
        listener();
      });
    }
  };

  attachStorageListener() {
    window.addEventListener('storage', this.handleStorageEvent);
  }

  detachStorageListener() {
    window.removeEventListener('storage', this.handleStorageEvent);
  }
}

class FallbackStorage implements Storage {
  store: Record<string, string> = {};

  constructor() {
    this.store = {};
  }

  setItem(key: string, value: string): void {
    this.store[key] = value;
  }

  getItem(key: string): string | null {
    return this.store[key] ?? null;
  }

  removeItem(key: string): void {
    delete this.store[key];
  }

  clear(): void {
    this.store = {};
  }

  get length(): number {
    return Object.keys(this.store).length;
  }

  key(index: number): string | null {
    return Object.keys(this.store)[index] ?? null;
  }
}

const getStorage = (storageType: 'localStorage' | 'sessionStorage') => {
  try {
    return new StorageManager(window[storageType]);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);

    return new StorageManager(new FallbackStorage());
  }
};

const storageManager =
  typeof window !== 'undefined' ? getStorage('sessionStorage') : new StorageManager(new FallbackStorage());

export const useSessionStorage = <T>(key: string) => {
  const subscribe = useCallback((listener: VoidFunction) => storageManager.subscribe(listener), []);

  const getSnapShot = useCallback(() => storageManager.getItem(key), [key]);

  const storeValue = useSyncExternalStore<string | undefined>(subscribe, getSnapShot, () => undefined);

  const value = useMemo(() => {
    if (!storeValue) {
      return undefined;
    }

    return JSON.parse(storeValue) as T;
  }, [storeValue]);

  const changeValue = useCallback(
    (newValue?: T) => {
      if (typeof newValue === 'undefined') {
        storageManager.removeItem(key);
      } else {
        storageManager.setItem(key, newValue);
      }

      storageManager.listeners.forEach((listener) => {
        listener();
      });
    },
    [key]
  );

  useEffect(() => {
    storageManager.attachStorageListener();

    return () => {
      storageManager.detachStorageListener();
    };
  }, []);

  return [value, changeValue] as const;
};
