import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css"
// 组件
import Headr from "./component/header"
import Main from "./component/main"
import Footer from "./component/footer"
import Nav from "./component/nav"
// 页面
import StartPage from "./page/start"

import LayoutPage from './page/layout'
import IconPage from "./page/icon"
import ButtonPage from "./page/button"

import RadioPage from "./page/radio"

import MenuPage from "./page/menu"
import TablePage from "./page/table"
import InputPage from "./page/input"
import CheckBoxPage from './page/checkbox'
import SelectPage from './page/select'
import TagPage from './page/tag'
import ProgressPage from './page/progress'
import LoadingPage from './page/Loading'

function Index() {
    return (<div className="page">
        <Headr></Headr>
        <Main></Main>
        <Footer></Footer>
    </div>)
}
function Components() {
    return (
        <div className="page components">
            <Headr></Headr>
            <div className="app layout clearfix">
                <Nav></Nav>
                <Route path="/component/layout" component={LayoutPage} />
                <Route path="/component/icon" component={IconPage} />
                <Route path="/component/button" component={ButtonPage} />
                <Route path="/component/start" component={StartPage} />
                <Route path="/component/radio" component={RadioPage} />
                <Route path="/component/checkbox" component={CheckBoxPage} />
                <Route path="/component/input" component={InputPage} />
                <Route path="/component/select" component={SelectPage} />
                <Route path="/component/table" component={TablePage} />
                <Route path="/component/tag" component={TagPage} />
                <Route path="/component/progress" component={ProgressPage} />
                <Route path="/component/loading" component={LoadingPage} />
                <Route path="/component/menu" component={MenuPage} />
            </div>
            <Footer></Footer>
        </div>
    )
}
export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Index></Index>
                </Route>
                <Route path="/component">
                    <Components></Components>
                </Route>
            </Switch>
        </Router>
    )
}