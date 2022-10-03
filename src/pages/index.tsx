import Layout from 'components/template/Layout';
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

const Home: NextPage = () => {
  return (
    <Layout>
      <div
        className="h-screen bg-[url('/bg-image-homepage-1.png')] bg-center
      "
      ></div>
      <div className="bg-black">
        <p className="text-white">astaghfirullah</p>
      </div>
    </Layout>
  );
};

export default Home;
