import React from 'react';

import Image from 'next/image'
import * as downloadIcon from '../../icons/download.png'

export default function Talks() {
  return (
    <div>
      <div className='bg-white rounded-md p-4 flex items-center justify-between w-fit'>
        <a className='text-yellow-900 font-semi-bold text-xl text-black' href='files/Silvia_Prina_CV.pdf'>Resume</a>
          <button className="w-6 h-6 mx-2"><Image src={downloadIcon}></Image></button>
      </div>

    </div>
  );
}
