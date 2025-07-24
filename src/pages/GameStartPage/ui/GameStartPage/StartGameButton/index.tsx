'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { useGameStats } from '@/entities/gameStats';
import { Button } from '@/shared/ui/Button';

export const StartGameButton = () => {
  const router = useRouter();

  const [, setStats] = useGameStats();

  const handleStartGame = useCallback(() => {
    setStats({ currentQuestionIndex: 0, score: 0, status: 'playing' });

    router.push('/game');
  }, [setStats, router]);

  return (
    <Button fullWidth onClick={handleStartGame}>
      Start
    </Button>
  );
};
