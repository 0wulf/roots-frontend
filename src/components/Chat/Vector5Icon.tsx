import { memo, SVGProps } from 'react';

const Vector5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 377 150' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H377V116.617C273.098 139.926 197.454 148.872 0 150V0Z' fill='#17838C' stroke='#17838C' />
  </svg>
);

const Memo = memo(Vector5Icon);
export { Memo as Vector5Icon };
