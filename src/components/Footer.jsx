import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4 px-20 flex justify-between h-[81px]">
      <div className="w-8 h-8 rounded-full">
        <Image src="/img/symbols/vencer.png" alt="Logo vencer" width={100} height={100} />
      </div>
      <div className="flex items-center justify-end space-x-4 pr-4"> 
        <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 rounded-full" />
        <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6 rounded-full" />
        <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 rounded-full" />
        <FontAwesomeIcon icon={faTiktok} className="w-6 h-6 rounded-full" />
      </div>
    </footer>
  );
};

export default Footer;


