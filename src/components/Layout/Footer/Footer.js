import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaTwitter } from 'react-icons/fa';
import navigationData from '../Navigation/NavigationData';

const Footer = () => {
  return (
    <>
      {/* <footer className="mt-10  ">
        <div className="flex bg-yellow-300 container px-16   m-auto">
          <div className="m-auto p-5">
            <img src="logoSite-2.gif" width="250" alt="ds" className="m-auto" />
          </div>
          <footer className="footer grid-rows-2 p-10  m-auto ">
            <div className=" border-t-6 border-t border-yellow-500">
              <span className="footer-title font-bold text-gray-800">HOME PAGE</span>
              <a className="link link-hover">SOUND BUSINESS</a>
              <a className="link link-hover">NATURE HARMONY</a>
              <a className="link link-hover">LOYALTY</a>
              <a className="link link-hover">COMMON DEVELOPPEMENT </a>
            </div>
            <div className=" border-t-6 border-t border-yellow-500">
              <span className="footer-title font-bold text-gray-800">OUR STORY</span>
              <a className="link link-hover">Hommage au fondateur</a>
              <a className="link link-hover">Management</a>
              <a className="link link-hover">Commitments</a>
              <a className="link link-hover">Dates clés</a>
            </div>
            <div className=" border-t-6 border-t border-yellow-500">
              <span className="footer-title font-bold text-gray-800">ACTIVITIES</span>
              <a className="link link-hover">CEREAL MILLS</a>
              <a className="link link-hover">INDUSTRIE PÂTES & COUSCOUS</a>
              <a className="link link-hover">AVICULTURE</a>
            </div>
            <div className=" border-t-6 border-t border-yellow-500">
              <span className="footer-title font-bold text-gray-800">INVESTORS</span>
              <a className="link link-hover">VENTURE</a>
            </div>
            <div className=" border-t-6 border-t border-yellow-500">
              <span className="footer-title font-bold text-gray-800">BRANDS</span>
              <a className="link link-hover">Nordar</a>
              <a className="link link-hover">Khoulala</a>
              <a className="link link-hover">Kayna</a>
              <a className="link link-hover">Couvirs Errahma</a>
              <a className="link link-hover">Eddik Almentation</a>
              <a className="link link-hover">Abattoirs Eddik</a>
            </div>
          </footer>
        </div>
      </footer> */}

      <footer className="footer p-10 bg-base-200 text-base-content lg:px-28">
        <div>
          <img src="/logoAFFBlack.svg" width="250" alt="Logo" className="m-auto" />
        </div>
        {navigationData.map((nav, i) => (
          <div key={i}>
            <span className="footer-title text-gray-800">
              <Link href={nav.url}>
                <a>{nav.title}</a>
              </Link>
            </span>
            {nav.children.map((item, y) => (
              <Link href={item.url} key={y}>
                <a>{item.title}</a>
              </Link>
            ))}
          </div>
        ))}
      </footer>

      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaFacebook className="text-3xl fill-gray-800 text-gary-800" />
            </a>
            <a>
              <FaYoutube className="text-3xl fill-gray-800 text-gary-800" />
            </a>
            <a>
              <FaTwitter className="text-3xl fill-gray-800 text-gary-800" />
            </a>
            <a>
              <FaInstagram className="text-3xl fill-gray-800 text-gary-800" />
            </a>
            <a>
              <FaTiktok className="text-3xl fill-gray-800 text-gary-800" />
            </a>
          </div>
        </div>
        <div>
          <p>
            Copyright © 2022 - All right reserved by
            <span className=" mx-1 uppercase font-bold">Africa Feed and Food 2022</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
