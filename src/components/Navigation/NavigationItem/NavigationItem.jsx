import React from "react";
import styled from "./NavigationItem.module.scss";

export const NavigationItems = ({ MenuElement }) =>
  MenuElement.map((MenuElements, index) => (
    <div key={index} className={styled.topMenu}>
      <p key="index">{MenuElements}</p>
    </div>
  ));

export default NavigationItems;
