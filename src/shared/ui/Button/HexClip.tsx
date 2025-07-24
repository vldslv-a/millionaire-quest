import React from 'react';

import type { SVGProps } from 'react';

export const HexClip = (props: SVGProps<SVGSVGElement>) => (
  <svg width="0" height="0" {...props}>
    <defs>
      <clipPath id="hexClip" clipPathUnits="objectBoundingBox">
        <path d="M0.086 0 H0.914 C0.925 0 0.935 0.032 0.94 0.073 L1 0.5 L0.94 0.927 C0.935 0.968 0.925 1 0.914 1 H0.086 C0.075 1 0.065 0.968 0.06 0.927 L0 0.5 L0.06 0.073 C0.065 0.032 0.075 0 0.086 0Z" />
      </clipPath>
    </defs>
  </svg>
);
