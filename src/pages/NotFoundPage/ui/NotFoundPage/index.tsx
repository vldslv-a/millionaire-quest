import { Button } from '@/shared/ui/Button';
import { Typography } from '@/shared/ui/Typography';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => (
  <section className={styles['not-found-page']}>
    <Typography as="h1" variant="h1">
      Page Not Found
    </Typography>

    <Typography as="h2" variant="h2" className="text-secondary">
      Could not find requested resource
    </Typography>

    <Button href="/" aria-label="Go to the main page" asLink>
      Go Home
    </Button>
  </section>
);
