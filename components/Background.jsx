import React from 'react';

const Background = () => {
  return (
    <div className="fixed top-[7vh]">
      <video
        muted
        autoPlay
        loop
        className="max-w-none w-[1500px] h-[93vh] object-cover"
      >
        <source src="assets/background-video.mp4" />
      </video>
    </div>
  );
};

export default Background;
