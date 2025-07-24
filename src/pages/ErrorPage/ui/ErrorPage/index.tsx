import { useEffect } from 'react';

import { Button } from '@/shared/ui/Button';
import { Typography } from '@/shared/ui/Typography';

import styles from './ErrorPage.module.scss';

export type ErrorPageProps = Readonly<{
  reset: () => void;
  error: Error & { digest?: string };
}>;

export const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  useEffect(() => {
    // Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <section className={styles['error-page']}>
      <Typography as="h1" variant="h1">
        Something went wrong!
      </Typography>

      <Button onClick={reset}>Try again</Button>
    </section>
  );
};
