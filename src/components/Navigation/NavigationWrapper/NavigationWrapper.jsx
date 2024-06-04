import React from "react";
import styled from "../NavigationWrapper/NavigationWrapper.module.scss";
import NavigationItem from "../NavigationItem/NavigationItem";
import PhotographName from "../PhotographName/PhotographName";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const NamePhoto = "Fotograf";
const MenuDesciption = [
  {
    link: "/home",
    description: "Strona Główna",
  },
  {
    link: "/contact",
    description: "Kontakt",
  },
  {
    link: "/aboutme",
    description: "O nas",
  },
  {
    link: "/instagram",
    description: (
      <>
        <span className={styled.socialMenuText}>Instagram</span>
        <RiInstagramFill className={styled.socialMenuIcon} />
      </>
    ),
  },
  {
    link: "/facebook",
    description: (
      <>
        <span className={styled.socialMenuText}>Facebook</span>
        <FaFacebookSquare className={styled.socialMenuIcon} />
      </>
    ),
  },
];

export const NavigationWrapper = () => (
  <>
    <div className={styled.navWrapper}>
      <PhotographName NamePhoto={NamePhoto} />
      <NavigationItem MenuDesciption={MenuDesciption} />
      <HiMenuAlt3 className={styled.BurgerMenu} />
    </div>
  </>
);
