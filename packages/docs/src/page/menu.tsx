import React from "react"
import { Panel,PanelItem,PanelCode } from "../component/panel"
import { Menu, MenuItem, SubMenu,Table } from "dawn-ui"

class HorMenu extends React.Component {
    render() {
        return (
            <Menu defaultActive="1" mode="horizontal" onSelect={this.onSelect}>
                <MenuItem index="1">处理中心</MenuItem>
                <SubMenu index="2" title="我的工作台">
                    <MenuItem index="2-1">选项1</MenuItem>
                    <MenuItem index="2-2">选项2</MenuItem>
                    <MenuItem index="2-3">选项3</MenuItem>
                </SubMenu>
                <MenuItem index="3">订单管理</MenuItem>
            </Menu>
        )
    }
    onSelect(){
        
    }
}

class HorMenuDark extends React.Component {
    render() {
        return (
            <Menu theme="dark" defaultActive="1" mode="horizontal" onSelect={this.onSelect.bind(this)}>
                <MenuItem index="1">处理中心</MenuItem>
                <SubMenu index="2" title="我的工作台">
                    <MenuItem index="2-1">选项1</MenuItem>
                    <MenuItem index="2-2">选项2</MenuItem>
                    <MenuItem index="2-3">选项3</MenuItem>
                </SubMenu> 
                <MenuItem index="3">订单管理</MenuItem>
            </Menu>
        )
    }
    onSelect(){
        
    }
}

class MenuPage extends React.Component {
    render() {
        const columns = [{
            label: "参数",
            prop: "parameter"
        },{
            label: "说明",
            prop: "explain"
        },{
            label: "类型",
            prop: "type"
        },{
            label:"可选值",
            prop: "optional"
        },{
            label:"默认值",
            prop: "default"
        }]
        const MenuData=[{
            parameter: "theme",
            explain: "主题",
            type: "string",
            optional: "dark | default",
            default: "default"
        },{
            parameter: "defaultActive",
            explain: "默认激活",
            type: "string",
            optional: "",
            default: ""
        },{
            parameter: "mode",
            explain: "垂直或竖直模式",
            type: "string",
            optional: "horizontal | vertical",
            default: "horizontal"
        },{
            parameter: "onSelect",
            explain: "选中菜单时触发事件",
            type: "",
            optional: "",
            default: "返回选中菜单的index"
        }]
        const SubMenumData=[{
            parameter: "index",
            explain: "菜单标识",
            type: "string",
            optional: "",
            default: ""
        },{
            parameter: "title",
            explain: "标题",
            type: "string",
            optional: "",
            default: ""
        }]
        const MenuItemData=[{
            parameter: "index",
            explain: "菜单标识",
            type: "string",
            optional: "",
            default: ""
        }]
        return (
            <main className="main">
                <h2>Menu 菜单栏</h2>
                <h3>默认菜单栏</h3>
                <Panel>
                    <PanelItem>
                       <HorMenu></HorMenu>
                    </PanelItem>
                    <PanelCode>
                        {`
    render() {
        return (
            <Menu defaultActive="1" mode="horizontal" onSelect={this.onSelect}>
                <MenuItem index="1">处理中心</MenuItem>
                <SubMenu index="2" title="我的工作台">
                    <MenuItem index="2-1">选项1</MenuItem>
                    <MenuItem index="2-2">选项2</MenuItem>
                    <MenuItem index="2-3">选项3</MenuItem>
                </SubMenu>
                <MenuItem index="3">订单管理</MenuItem>
            </Menu>
        )
    }
    onSelect(){
        
    }
`}
                    </PanelCode>
                </Panel>
                <h3>单选框组</h3>
                <Panel>
                    <PanelItem>
                        <HorMenuDark></HorMenuDark>
                    </PanelItem>
                    <PanelCode>
                        {`
    render() {
        return (
            <Menu theme="dark" defaultActive="1" mode="horizontal" onSelect={this.onSelect.bind(this)}>
                <MenuItem index="1">处理中心</MenuItem>
                <SubMenu index="2" title="我的工作台">
                    <MenuItem index="2-1">选项1</MenuItem>
                    <MenuItem index="2-2">选项2</MenuItem>
                    <MenuItem index="2-3">选项3</MenuItem>
                </SubMenu> 
                <MenuItem index="3">订单管理</MenuItem>
            </Menu>
        )
    }
    onSelect(){
        
    }
`}
                    </PanelCode>
                </Panel>
                <h3>Menu 属性列表</h3>
                <Table
                    columns={columns}
                    data={MenuData}
                />
                <h3>SubMenum 属性列表</h3>
                <Table
                    columns={columns}
                    data={SubMenumData}
                />
                <h3>MenuItem 属性列表</h3>
                <Table
                    columns={columns}
                    data={MenuItemData}
                />
            </main>
        )
    }
}

export default MenuPage;