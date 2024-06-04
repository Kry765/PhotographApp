import React from "react";
import styled from "./NavigationItem.module.scss";

export const NavigationItemDesktop = ({ MenuDesciption }) =>
  MenuDesciption.map((MenuElements, index) => (
    <>
      <div className={styled.topMenuDesktop}>
        <a key={index} href={MenuElements.link} className={styled.topMenuLink}>
          {MenuElements.description}
        </a>
      </div>
      <div className={styled.topMenuMobileItems}>
        <a key={index} href={MenuElements.link}>
          {MenuElements.description}
        </a>
      </div>
    </>
  ));

export default NavigationItemDesktop;
