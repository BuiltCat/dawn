import React from  "react"
import {Panel, PanelItem, PanelCode} from "../component/panel"
import { Input, Table } from "dawn-ui"

class InputPage extends React.Component{
    render(){
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
        const InputData=[{
            parameter: "icon",
            explain: "带图标的input",
            type: "string",
            optional: "",
            default: ""
        }, {
            parameter: "size",
            explain: "input的大小",
            type: "string",
            optional: "large | small | mini",
            default: ""
        }, {
            parameter: "disable",
            explain: "是否禁用",
            type: "boolean",
            optional: "true | false",
            default: "false"
        }]
        return(
            <main className="main">
            <h2>Input 输入框</h2>
            <h3>默认输入框</h3>
                <Panel>
                    <PanelItem>
                        <Input placeholder="请输入内容"></Input>
                    </PanelItem>
                    <PanelCode>
                       {`
    render(){
        return (
            <Input placeholder="请输入内容"></Input>
        )
    }
                       `} 
                    </PanelCode>
                </Panel>
                <h3>禁用输入框</h3>
                <Panel>
                    <PanelItem>
                        <Input disabled placeholder="请输入内容"></Input>
                    </PanelItem>
                    <PanelCode>
                       {`
    render(){
        return (
            <Input disabled placeholder="请输入内容"></Input>
        )
    }               
                        `} 
                    </PanelCode>
                </Panel>
                <h3>带图标的输入框</h3>
                <Panel>
                    <PanelItem>
                    <Input icon="cat-fire" placeholder="请输入内容"></Input>
                    </PanelItem>
                    <PanelCode>
                       {`
    render(){
        return (
            <Input icon="cat-fire" placeholder="请输入内容"></Input>
        )
    }
                        `} 
                    </PanelCode>
                </Panel>
                <h3>不同大小的输入框</h3>
                <Panel>
                    <PanelItem>
                        <Input placeholder="请输入内容" size="large" />
                        <Input placeholder="请输入内容" />
                        <Input placeholder="请输入内容" size="small" />
                        <Input placeholder="请输入内容" size="mini" />
                    </PanelItem>
                    <PanelCode>
                       {`
        render(){
            return (
                <Input placeholder="请输入内容" size="large" />
                <Input placeholder="请输入内容" />
                <Input placeholder="请输入内容" size="small" />
                <Input placeholder="请输入内容" size="mini" />
            )
        }
                        `} 
                    </PanelCode>
                </Panel>
                <h3>Input 属性列表</h3>
                <Table
                    columns={columns}
                    data={InputData}
                />
            </main>
        )
    }
}

export default InputPage