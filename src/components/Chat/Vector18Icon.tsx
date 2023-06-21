import { memo, SVGProps } from 'react';

const Vector18Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 50' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.46302 0C5.64201 5 0 22 0 50H27.5048C35.9678 50 35.7563 43.3333 35.9678 33.3333C36.1794 23.3333 35.3331 -5.72203e-05 33.8521 0L20.5228 2.13652e-05L8.46302 0Z'
      fill='#8A7968'
    />
  </svg>
);

const Memo = memo(Vector18Icon);
export { Memo as Vector18Icon };
