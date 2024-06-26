import React from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { LANGUAGE } from "../../constant/url";

const NavMobile = ({ navigation, classNames, resetFlaghandler }) => {
  return (
    <Menu as="div" className="nav-mobile relative mx-3 ">
      <div>
        <Menu.Button className="flex items-center">
          <span className="sr-only">Open user menu</span>
          <p className="text-md">{LANGUAGE == "he" ? "לדפדף" : "Browse"}</p>
          <RiArrowDownSFill className="text-md" />
        </Menu.Button>
      </div>
      <Transition className={`absolute ${LANGUAGE == "he" ? "left-40" : "right-40"}`}>
        <RiArrowUpSFill className={`text-2xl absolute ${LANGUAGE == "he" ? "right-28" : "left-28"}`} />
        <Menu.Items className="absolute z-10 mt-4 w-60 bg-[#000000cc] py-1 shadow-lg text-center border-t-2">
          {navigation.map((item, i) => (
            <Menu.Item key={i}>
              {({ active }) => (
                <Link
                  to={`/${item.href}`}
                  className={classNames(
                    active ? "bg-[#000000e7] text-white" : "",
                    "block px-4 py-3 text-sm text-gray-300"
                  )}
                  onClick={item.href == "home" || "/" ? resetFlaghandler : null}
                >
                  {item?.name == "Shop" ? (
                    <span className=" font-bold text-red-600"> {LANGUAGE == "he" ? "חדש" : "New"} </span>
                  ) : null}

                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavMobile;
