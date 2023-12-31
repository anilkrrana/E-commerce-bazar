import React from "react";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,

} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { logoLight, paymentLogo } from "../assets";

const Footer = () => {
  return (
    <div>
        <div className="bg-black text-[#949494] py-10 font-titleFont">
            <div className="max-w-screen-xl mx-auto grid grid-cols-4">
                <div className="flex flex-col gap-5">
                <img className="w-32" src={logoLight} alt="logoLight" />
                <p className="text-white text-sm tracking-wide">© er-anil.com</p>
                
                </div>
                
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Company</h2>
                    <div className="text-base flex flex-col gap-2">
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Blog</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Customer Service</h2>
                    <div className="text-base flex flex-col gap-2">
                        <p>Contact Us</p>
                        <p>Track Order</p>
                        <p>Return Order</p>
                        <p>Cancel Order</p>
                    </div>
                </div>
                <div className="text-2xl font-semibold text-white mb-4">
                    <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
                    <div className="text-base flex flex-col gap-2">
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                        <span className="text-lg">
                            <BsPersonFill />
                        </span>
                        my account
                        </p>
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                        <span className="text-lg">
                            <BsPaypal />
                        </span>
                        checkout
                        </p>
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                        <span className="text-lg">
                            <FaHome />
                        </span>
                        order tracking
                        </p>
                        <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                        <span className="text-lg">
                            <MdLocationOn />
                        </span>
                        help & support
                        </p>
                    </div>   
                </div>
            
            </div>
            <div className="max-w-screen-xl mx-auto grid grid-cols-4 py-20">
                
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">connect with us</h2>
                    <div className="flex gap-2 text-lg text-gray-400">
                        <ImGithub className="hover:text-white duration-300 cursor-pointer"/> 
                        <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
                        <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
                        <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
                        <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
                    </div>
                    
                </div>
                
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Payments</h2>
                    <img className="w-56" src={paymentLogo} alt="paymentLogo" />
                    
                </div>
                
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">Keep Up To Date</h2>
                    <div className="flex flex-col justify-center">
                        <input
                            className="bg-transparent border px-4 py-2 text-sm"
                            type="text"
                            placeholder="e-mail"
                        />
                        <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div >
                <h4 className="flex justify-center text-[#949494]">© All rights are reserved | Source on  | Made by @Anil_Rana </h4>
            </div>
        </div>
        
    </div>
  );
};

export default Footer;