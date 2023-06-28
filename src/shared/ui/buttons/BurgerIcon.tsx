import { FC, SVGProps } from 'react';

export const BurgerIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="#4d4d4d">
      <path
        fill="#4d4d4d"
        fill-rule="evenodd"
        d="M12 3a2 2 0 10-4 0 2 2 0 004 0zm-2 5a2 2 0 110 4 2 2 0 010-4zm0 7a2 2 0 110 4 2 2 0 010-4z"
      />
    </svg>
  );
};
