import React from 'react';
import {Link} from 'react-router-dom';
import { cartImg, logoDark } from '../assets/index';
import { useSelector } from 'react-redux';

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  return (
    <div className="w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-28" src={logoDark} alt="logoDark" />
          </div>
        </Link>
      
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
              
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
              
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Pages
              </li>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Shop
              </li>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Element
              </li>
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Blog
              </li>
            </ul>
            <Link to="/cart">
              <div className="relative">
                <img className="w-6" src={cartImg} alt="cartImg" />
                <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
                  {productData.length}
                </span>
              </div>
            </Link>

            <Link to="login">
              <img
                className="w-8 h-8 rounded-full"
                src={
                  userInfo
                    ? userInfo.image
                    : "https://pre00.deviantart.net/b31f/th/pre/f/2017/085/e/4/pixel_art_profile_image_by_lonezi-db3oypd.png"
                }
                  
                alt="userLogo"
              />
            </Link>

            {userInfo && (
              <p className="text-base font-titleFont font-semibold underline underline-offset-2">
                {userInfo.name}
              </p>
            )}
        </div>
      </div>
    </div>
  )
}

export default Header