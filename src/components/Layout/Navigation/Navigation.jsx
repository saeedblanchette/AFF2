import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import navigationData from './NavigationData';
import Link from 'next/link';

const NavSubItem = ({ item }) => {
  if (item.children && item.children.length > 0) {
    return (
      <li tabIndex="0" className="">
        <span className="hover:bg-yellow-200 hover:text-gray-800">
          <Link href={item.url}>
            <a>
              {item.title} <MdArrowForwardIos className="inline" />
            </a>
          </Link>
        </span>
        <ul className="rounded-box bg-amber-50 p-2  text-gary-800  z-20 border-2 border-l-none">
          {item.children.map((nav, i) => (
            <li key={i}>
              <Link href={nav.url}>
                <a> {nav.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }
  return (
    <li>
      <Link href={item.url}>
        <a> {item.title}</a>
      </Link>
    </li>
  );
};
const NavItem = ({ item }) => {
  if (item.children && item.children.length > 0) {
    return (
      <li tabIndex="0">
        <span className="hover:bg-yellow-300 hover:text-gray-800 uppercase text-sm md:text-md lg:text-lg">
          <Link href={item.url}>
            <a> {item.title}</a>
          </Link>
        </span>
        <ul className=" menu rounded-box bg-amber-50 p-2  text-gary-800  z-20 uppercase  text-sm md:text-md lg:text-lg">
          {item.children.map((nav, i) => (
            <NavSubItem key={i} item={nav} />
          ))}
        </ul>
      </li>
    );
  }
  return (
    <li className="hover:bg-yellow-300 hover:text-gray-800 focus:bg-yellow-800 uppercase  text-sm md:text-md lg:text-lg">
      <Link href={item.url}>
        <a> {item.title}</a>
      </Link>
    </li>
  );
};

const Navigation = () => {
  return (
    <nav className="flex  container lg:px-16  mx-auto mx-auto text-sm lg:text-md border-b-2">
      <div className="m-auto p-4">
        <img src="/logoAFF.svg" width="200" alt="ds" className="m-auto" />
      </div>
      <div className="basis-9/12 justify-between m-auto">
        {/* <div className="my-6 flex justify-end border-b border-red-500   p-5">
          <div className="form-control w-2/3">
            <div className="input-group w-full ">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered w-1/2"
              />
              <button className="btn btn-square bg-gray-200 text-info-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex  text-md">
            <span className="m-1 p-1 font-bold underline decoration-green-600">
              ENG
            </span>
            <span className="m-1 p-1 font-bold">FR</span>
          </div>
        </div> */}
        <ul className="menu menu-horizontal bg-base-100 rounded-box p-2 w-full justify-start font-semibold items-center">
          <li className="hover:bg-yellow-300 hover:text-gray-800 focus:bg-yellow-800">
            <Link href="/">
              <a>
                <AiFillHome className="text-2xl" />
              </a>
            </Link>
          </li>
          {navigationData.map((item, i) => (
            <NavItem item={item} key={i} />
          ))}
        </ul>
      </div>
      <div className="flex  text-md  justify-center items-center m-auto ">
        <span className="mx-4">
          <GoSearch className="text-2xl font-bold " />
        </span>
        <span className="m-1 p-1 font-bold underline decoration-yellow-600">ENG</span>
        <span className="m-1 p-1 font-bold">FR</span>
      </div>
    </nav>
  );
};

export default Navigation;
