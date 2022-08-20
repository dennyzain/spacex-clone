import Layout from 'components/template/Layout';
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="h-screen">
        <Image
          src="/bg-image-homepage-1.png"
          quality={100}
          layout="fill"
          objectFit="cover"
          alt="bg-homepage"
        />
      </div>
    </Layout>
  );
};

export default Home;
