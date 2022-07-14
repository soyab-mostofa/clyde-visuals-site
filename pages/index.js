import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="pt-20 md:pt-40 md:flex md:justify-around md:items-center text-neutral-50">
      <div>
        <video
          autoPlay
          muted
          loop
          className="mx-auto h-[340px] w-[340px] p-2 bg-neutral-900/5 backdrop-blur-sm"
        >
          <source src="assets/hero-video.mp4" />
        </video>
      </div>
      <div className="mt-4 text-center">
        <h1 className="text-lg md:text-4xl md:mb-4 ">Clyde Visuals</h1>
        <p className="mt-2 text-lg font-semibold tracking-wide md:text-2xl">
          3D VIRTUAL TOURS
        </p>
        <p className="mt-2 text-lg font-semibold tracking-wide md:text-2xl">
          Attention Grabbing, High Quality, Feature Rich 3D Virtual Tours
        </p>
        <button className="px-4 py-2 bg-neutral-50 text-neutral-900">
          Get a quote
        </button>
      </div>
    </div>
  );
}
