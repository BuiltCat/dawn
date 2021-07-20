import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css"

export default function Header() {
    return (
        <header className="header clearfix">

            <ul>
                <li>
                    <Link to='/'>
                        主页
                    </Link >
                </li>
                <li>
                    <Link to='/component/start'>
                        组件
                    </Link >
                </li>
            </ul>
            <div className="line"></div>
        </header>
    )
}