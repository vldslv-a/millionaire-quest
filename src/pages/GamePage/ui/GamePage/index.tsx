import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';

import { useGameStats } from '@/entities/gameStats';
import { questions } from '@/entities/question';

import { QuestionForm } from './QuestionForm';
import { WinningTotal } from './WinningTotal';

import type { GameStats } from '@/entities/gameStats';

import styles from './GamePage.module.scss';

export const GamePage = () => {
  const router = useRouter();

  const [stats, setStats] = useGameStats();

  const handleSubmit = useCallback(
    (amount: number) => {
      const hasMoreQuestions = stats.currentQuestionIndex + 1 < questions.length;
      const status: GameStats['status'] = hasMoreQuestions && amount !== 0 ? 'playing' : 'finished';

      setStats({
        score: amount,
        currentQuestionIndex: status !== 'finished' ? stats.currentQuestionIndex + 1 : stats.currentQuestionIndex,
        status,
      });

      if (status !== 'finished') {
        return;
      }

      router.push('/game-over', {});
    },
    [router, setStats, stats.currentQuestionIndex]
  );

  const prizes = useMemo(() => questions.map((question) => question.prizeAmount), []);

  const question = questions[stats.currentQuestionIndex];

  if (!question) {
    throw new Error('Something went wrong: question not found');
  }

  return (
    <div className={styles['game-page']}>
      <div className={styles['game-page__question-form']}>
        <QuestionForm key={question.id} question={question} onSubmit={handleSubmit} />
      </div>

      <WinningTotal
        prizes={prizes}
        currentPrize={question.prizeAmount}
        className={styles['game-page__winning-total']}
      />
    </div>
  );
};
