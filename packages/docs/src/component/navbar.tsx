import React from "react";
import { Link } from "react-router-dom";

type navBarProps = {
    children: React.ReactNode
}
type NavBarGroupProps = {
    children: React.ReactNode
    title: string
}
type NavBarItemProps = {
    children: React.ReactNode
    path: string
}

function NavBar(props: navBarProps){
    return (
        <ul className="nav-bar">
            {props.children}
        </ul>
    )
}

function NavBarGroup(props: NavBarGroupProps){
    return (
        <li>
            <span className="title">{props.title} </span>
            <ul className="nav-group">
                {props.children}
            </ul>
        </li>
    )
}

function NavBarItem(props: NavBarItemProps){
    return (
        <li>
            <Link to={props.path}>
                {props.children}
            </Link>
        </li>
    )
}

export {
    NavBar,
    NavBarGroup,
    NavBarItem
}