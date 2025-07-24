import { formatCurrency } from '@/shared/lib/string/formatCurrency';
import { Button } from '@/shared/ui/Button';
import { Typography } from '@/shared/ui/Typography';

import type { HTMLAttributes } from 'react';

import styles from './PrizesList.module.scss';

type Props = HTMLAttributes<HTMLDivElement> & {
  prizes: number[];
  currentPrize: number;
};

export const PrizesList = ({ className, currentPrize, prizes, ...props }: Props) => (
  <div className={`${styles['prizes-list']} ${className}`} data-testid="prizesList" {...props}>
    {prizes.map((prize) => (
      <Button
        key={prize}
        size="small"
        variant="option"
        isBlinking={prize === currentPrize}
        className={`${styles['prizes-list__button']} ${prize > currentPrize ? styles['prizes-list__button--received'] : ''}`}
        disabled
        fullWidth
        color="primary"
      >
        <Typography weight="normal" variant="button" color={prize === currentPrize ? 'orange' : 'primary'}>
          {formatCurrency(prize)}
        </Typography>
      </Button>
    ))}
  </div>
);
