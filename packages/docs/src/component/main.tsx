import React, { useEffect, useState, WheelEventHandler } from "react";
import {
    Button
} from "dawn-ui"
import { Link } from "react-router-dom"
import "../css/start.css"

export default function Main() {
    return (
        <main className="start">
            <div className="inner">
                <h2>Dawn</h2>
                <p>一个可以使用的React UI组件库</p>
                <Link to='/component/start'><Button fill size={'mini'}>开始使用</Button></Link>
                <a href="https://github.com/BuiltCat/Pussycat"><Button fill size={'mini'}>GitHub</Button></a>
            </div>
        </main>
    )
}