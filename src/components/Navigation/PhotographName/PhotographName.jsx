import React from "react";
import styled from "./PhotographName.module.scss";

const PhotographName = ({ NamePhoto }) => (
  <h3 className={styled.authorMenu}>{NamePhoto}</h3>
);

export default PhotographName;
