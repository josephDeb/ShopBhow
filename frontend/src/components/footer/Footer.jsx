import React from 'react'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footers = () => {
  return (

      <Footer bgDark>
      <div className="w-full bg-black/90 manjari hidden xl:block">
        
        <div className='h-[260px] ,ax-w-screen-lg centered'>

        </div>

        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>

  )
}

export default Footers