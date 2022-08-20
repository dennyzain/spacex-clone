import Image from 'next/image';
import React from 'react';
import { Menu } from 'react-feather';

const Header: React.FC = () => {
  return (
    <div className="grid absolute z-10 grid-cols-4 justify-items-center items-center">
      <div className="col-start-2 col-span-2">
        <Image src="/spacex-logo.svg" quality={100} width={300} height={100} alt="header-banner" />
      </div>
      <Menu color="white" />
    </div>
  );
};

export default Header;
