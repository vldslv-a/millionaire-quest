import { useSessionStorage } from '@/shared/lib/storage/useSessionStorage';

export type GameStats = {
  score: number;
  currentQuestionIndex: number;
  status?: 'playing' | 'initial' | 'finished';
};

const defaultStats: GameStats = {
  score: 0,
  currentQuestionIndex: 0,
  status: 'initial',
};

export const useGameStats = () => {
  const [stats = defaultStats, setStats] = useSessionStorage<GameStats>('gameStats');

  return [stats, setStats] as const;
};
