import React from "react";
import styled from "../NavigationWrapper/NavigationWrapper.module.scss";
import NavigationItem from "../NavigationItem/NavigationItem";
import PhotographName from "../PhotographName/PhotographName";
import { MdMenu } from "react-icons/md";

const NamePhoto = "Fotograf";
const MenuElement = ["O mnie", "Kontakt", "Portfolio", "Instagram", "Facebook"];

export const NavigationWrapper = () => (
  <>
    <PhotographName NamePhoto={NamePhoto} />
    <div className={styled.navWrapper}>
      <NavigationItem MenuElement={MenuElement} />
      <MdMenu className={styled.BurgerMenu} />
    </div>
  </>
);
