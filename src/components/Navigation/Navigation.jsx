import React from "react";
import styled from './Navigation.module.scss'

const NavigationItem = [
    'O mnie',
    'Kontakt',
    'Portfolio',
    'Instagram',
    'Facebook'
]

export const Navigation = () => (
    <div className={styled.navigationItems}>
        {NavigationItem.map((NavigationItems ,index) => (
            <div key={index}>
                <p>{NavigationItems}</p>
            </div>
        ))}
    </div>
)

export default Navigation