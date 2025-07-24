import { useCallback, useEffect, useState } from 'react';

import MenuIcon from '@/shared/assets/icons/menu.svg';
import { useMediaQuery } from '@/shared/lib/react-dom/useMediaQuery';
import { Button } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

import { PrizesList } from './PrizesList';

import type { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  prizes: number[];
  currentPrize: number;
};

export const WinningTotal = ({ className, currentPrize, prizes, ...props }: Props) => {
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  const [isOpen, setIsOpen] = useState(isDesktop);

  const handleToggleButton = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    setIsOpen(isDesktop);
  }, [isDesktop]);

  if (isDesktop) {
    return <PrizesList prizes={prizes} className={className} currentPrize={currentPrize} {...props} />;
  }

  return (
    <div className={className} {...props}>
      <Button variant="icon" onClick={handleToggleButton} data-testid="toggleButton">
        <MenuIcon width={24} height={24} />
      </Button>

      <Drawer fullWidth open={isOpen} anchor="right" onClose={handleToggleButton}>
        <PrizesList prizes={prizes} currentPrize={currentPrize} />
      </Drawer>
    </div>
  );
};
