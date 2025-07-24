import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';

import { useGameStats } from '@/entities/gameStats';
import { formatCurrency } from '@/shared/lib/string/formatCurrency';
import { Button } from '@/shared/ui/Button';
import { Typography } from '@/shared/ui/Typography';
import { GameOverview } from '@/widgets/gameOverview';

import styles from './GameOverPage.module.scss';

export const GameOverPage = () => {
  const router = useRouter();

  const [stats, setStats] = useGameStats();

  const handleTryAgain = useCallback(() => {
    setStats({ currentQuestionIndex: 0, score: 0, status: 'playing' });

    router.push('/game');
  }, [router, setStats]);

  useEffect(() => {
    if (stats.status !== 'finished') {
      router.replace(stats.status === 'initial' ? '/' : '/game');
    }
  }, [router, stats.status]);

  if (stats.status !== 'finished') {
    return null;
  }

  return (
    <div className={styles['game-over-page']}>
      <GameOverview className={styles['game-over-page__overview']}>
        <div>
          <Typography as="h2" variant="h2" className={styles['game-over-page__title']}>
            Total score:
          </Typography>

          <Typography as="p" variant="h1">
            {formatCurrency(stats.score)} earned
          </Typography>
        </div>

        <div className={styles['game-over-page__actions']}>
          <Button fullWidth onClick={handleTryAgain}>
            Try again
          </Button>
        </div>
      </GameOverview>
    </div>
  );
};
