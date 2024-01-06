
import React from 'react';
import Picture from '@/components/Carousel';

// import Picture from '@/components/Carousel';
function Page() {
  return (
    <div className="page-container flex justify-center items-center absolute z-0 bg-primary">

      <div>
      <Picture  />
        {/* <Picture /> */}
      </div>
    </div>
  );
}

export default Page;

