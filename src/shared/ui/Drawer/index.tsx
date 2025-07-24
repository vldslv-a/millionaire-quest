import React from 'react';

import CloseIcon from '../../assets/icons/close.svg';
import { Button } from '../Button';

import type { PropsWithChildren } from 'react';

import styles from './Drawer.module.scss';

const anchorVariants = {
  top: styles.top,
  left: styles.left,
  right: styles.right,
  bottom: styles.bottom,
};

type Props = PropsWithChildren<{
  open: boolean;
  onClose: () => void;
  anchor: 'top' | 'left' | 'right' | 'bottom';
  fullWidth?: boolean;
}>;

export const Drawer = ({ anchor, children, fullWidth, onClose, open }: Props) => (
  <>
    <div
      aria-hidden="true"
      className={`${styles.overlay} ${!open && styles.overlayHidden} ${open && styles.overlayOpen}`}
      onClick={onClose}
    />

    <div
      tabIndex={-1}
      className={`${styles.drawer} ${open && styles.animate} ${!open && styles.hidden} ${anchorVariants[anchor]} ${fullWidth && styles.fullWidth}`}
      data-testid="drawer"
    >
      <Button variant="icon" className={styles.closeButton} onClick={onClose} data-testid="closeButton">
        <CloseIcon width={24} height={24} />
      </Button>

      {children}
    </div>
  </>
);
