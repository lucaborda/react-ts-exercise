import { FC, ReactNode } from "react";

type HeaderProps = {
  image: { src: string; alt: string };
  children: ReactNode;
};

const Header: FC<HeaderProps> = ({ image, children }) => {
  return (
    <div>
      <img {...image} />
      {children}
    </div>
  );
};

export default Header;
