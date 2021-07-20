import React from 'react';
import { NavBar, NavBarItem, NavBarGroup } from "../component/navbar"
import { Route } from "react-router-dom";

function Nav() {
    return (
        <Route path="/component">
            <NavBar>
                <NavBarGroup title="开发指南">
                    <NavBarItem path="/component/start">快速开始</NavBarItem>
                </NavBarGroup>
                <NavBarGroup title="Basic">
                    <NavBarItem path="/component/layout">Layout 布局</NavBarItem>
                    <NavBarItem path="/component/icon">Icon 图标</NavBarItem>
                    <NavBarItem path="/component/button">Button 按钮</NavBarItem>
                </NavBarGroup>
                <NavBarGroup title="From">
                    <NavBarItem path="/component/radio">Radio 单选框</NavBarItem>
                    <NavBarItem path="/component/checkbox">Checkbox 多选框</NavBarItem>
                    <NavBarItem path="/component/input">Input 输入框</NavBarItem>
                    <NavBarItem path="/component/select">Select 选择框</NavBarItem>
                </NavBarGroup>
                <NavBarGroup title="Data">
                    <NavBarItem path="/component/table">Table 表格</NavBarItem>
                    <NavBarItem path="/component/tag">Tag 标签</NavBarItem>
                    <NavBarItem path="/component/progress">ProgressPage 进度条</NavBarItem>
                </NavBarGroup>
                <NavBarGroup title="Notice">
                    <NavBarItem path="/component/loading">Loading 加载</NavBarItem>
                </NavBarGroup>
                <NavBarGroup title="Nav">
                    <NavBarItem path="/component/menu">Menu 菜单栏</NavBarItem>
                </NavBarGroup>
            </NavBar>
        </Route>
    )
}


export default Nav;