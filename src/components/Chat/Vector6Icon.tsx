import { memo, SVGProps } from 'react';

const Vector6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 375 150' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 150V0H375V87.2385C112.509 122.301 51.2801 120.23 0 150Z' fill='#12676E' />
  </svg>
);

const Memo = memo(Vector6Icon);
export { Memo as Vector6Icon };
