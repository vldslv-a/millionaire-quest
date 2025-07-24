import dynamic from 'next/dynamic';

import { Typography } from '@/shared/ui/Typography';
import { GameOverview } from '@/widgets/gameOverview';

import type { FC } from 'react';

import styles from './GameStartPage.module.scss';

const StartGameButton = dynamic(() =>
  import('./StartGameButton').then((module: { StartGameButton: FC }) => ({ default: module.StartGameButton }))
);

export const GameStartPage = () => (
  <div className={styles['game-start-page']}>
    <GameOverview className={styles['game-start-page__overview']}>
      <Typography as="h1" variant="h1">
        Who wants to be a millionaire?
      </Typography>

      <div className={styles['game-start-page__actions']}>
        <StartGameButton />
      </div>
    </GameOverview>
  </div>
);
