import React from 'react';

const HomePage: React.FC = () => (
  <div className="h-full w-full flex flex-col justify-center items-center">
    <h1 className="font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-3 border-b border-gray-300">
      NextJS Starter Kit
    </h1>
    <p className="mt-3 text-sm lg:text-lg text-gray-500">
      Modified by{' '}
      <a
        href="https://www.rabestudios.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold"
      >
        Rabe Studios
      </a>
    </p>
  </div>
);

export default HomePage;
