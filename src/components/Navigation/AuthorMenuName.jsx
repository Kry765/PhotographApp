import React from "react";
import styled from './AuthorMenuName.module.scss'

const AuthorMenuName = (props) => (
        <h3 className={styled.authorMenu}>{props.Fotograf}</h3>
)

export default AuthorMenuName