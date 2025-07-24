import HandOne from '../../assets/hand-one.svg';

import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

import styles from './GameOverview.module.scss';

type Props = PropsWithChildren & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const GameOverview = ({ children, className = '', ...props }: Props) => (
  <div className={`${styles['game-overview']} ${className}`} {...props}>
    <div className={styles['game-overview__image']}>
      <HandOne />
    </div>

    <div className={styles['game-overview__content']}>{children}</div>
  </div>
);
