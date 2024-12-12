import { FC, ReactNode } from "react";

type HeaderProps = {
  src: string;
  alt: string;
  children: ReactNode;
};

const Header: FC<HeaderProps> = ({ src, alt, children }) => {
  return (
    <div>
      <img src={src} alt={alt} />
      {children}
    </div>
  );
};

export default Header;
