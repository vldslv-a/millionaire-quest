import { useState } from 'react';

import { useTimeout } from '@/shared/lib/react-dom/useTimeout';
import { Typography } from '@/shared/ui/Typography';

import { AnswerButton } from './AnswerButton';

import type { Question, QuestionOption } from '@/entities/question';
import type { HTMLAttributes } from 'react';

import styles from './QuestionForm.module.scss';

type Props = Omit<HTMLAttributes<HTMLDivElement>, 'onSubmit'> & {
  question: Question;
  onSubmit: (amount: number) => void;
};

export const QuestionForm = ({ className, onSubmit, question, ...props }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<QuestionOption | null>(null);

  const handleAnswerClick = (answer: QuestionOption) => () => {
    setSelectedAnswer(answer);
  };

  const handleSummit = () => {
    if (!selectedAnswer) {
      return;
    }

    onSubmit(question.correctAnswer === selectedAnswer.id ? question.prizeAmount : 0);
  };

  useTimeout(handleSummit, selectedAnswer ? 1500 : null);

  return (
    <div className={`${styles['question-form']} ${className}`} {...props}>
      <div className={styles['question-form__header']}>
        <Typography as="h1" variant="h2">
          {question.questionText}
        </Typography>
      </div>

      <div className={styles['question-form__options']}>
        {question.options.map((option) => (
          <AnswerButton
            key={option.id}
            selectedAnswerId={selectedAnswer?.id ?? null}
            option={option}
            onClick={handleAnswerClick(option)}
            correctAnswerId={question.correctAnswer}
          />
        ))}
      </div>
    </div>
  );
};
