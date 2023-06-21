import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 37' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.64961 16.7835C1.18599 26.4407 3.60695 37 3.60695 37C3.60695 37 -6.40212 16.9427 6.92627 7.02012C20.2547 -2.90244 32 0.599646 32 0.599646C32 0.599646 30.2288 1.55474 26.0763 18.3223C21.9237 35.0898 5.64961 30.6326 5.64961 30.6326C5.64961 30.6326 6.43775 20.824 9.47961 15.6692C12.8005 10.0415 21.8888 4.73845 21.8888 4.73845C21.8888 4.73845 10.1132 7.12623 5.64961 16.7835Z'
      fill='#D8BCA4'
    />
  </svg>
);

const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
