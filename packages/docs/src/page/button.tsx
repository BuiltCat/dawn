import React from "react";
import { Panel, PanelItem, PanelCode } from "../component/panel"
import { Button, Table } from "dawn-ui";

class ButtonPage extends React.Component {
    render() {
        const columns = [{
            label: "参数",
            prop: "parameter"
        }, {
            label: "说明",
            prop: "explain"
        }, {
            label: "类型",
            prop: "type"
        }, {
            label: "可选值",
            prop: "optional"
        }, {
            label: "默认值",
            prop: "default"
        }]
        const data = [{
            parameter: "size",
            explain: "尺寸",
            type: "string",
            optional: "mini | small | medium | default",
            default: "default"
        }, {
            parameter: "type",
            explain: "类型",
            type: "string",
            optional: "default | primary | success | info | warning  danger",
            default: "default"
        }, {
            parameter: "fill",
            explain: "是否填充按钮",
            type: "Boolean",
            optional: "true | false",
            default: "false"
        }, {
            parameter: "round",
            explain: "是否圆角按钮",
            type: "Boolean",
            optional: "true | false",
            default: "false"
        }, {
            parameter: "circle",
            explain: "是否圆型按钮",
            type: "Boolean",
            optional: "true | false",
            default: "false"
        }, {
            parameter: "disable",
            explain: "是否禁用按钮",
            type: "Boolean",
            optional: "true | false",
            default: "false"
        }, {
            parameter: "icon",
            explain: "图标",
            type: "string",
            optional: "——",
            default: "——"
        }]
        return (
            <main className="main">
                <h2>Button 按钮</h2>
                <h3>基础按钮</h3>
                <Panel>
                    <PanelItem>
                        <Button>默认按钮</Button>
                        <Button type={'primary'}>主要按钮</Button>
                        <Button type={'success'}>成功按钮</Button>
                        <Button type={'info'}>信息按钮</Button>
                        <Button type={'warning'}>警告按钮</Button>
                        <Button type={'danger'}>危险按钮</Button>
                    </PanelItem>
                    <PanelCode>
                        {`
    render() {
        return (
            <Button>默认按钮</Button>
            <Button type={'primary'}>主要按钮</Button>
            <Button type={'success'}>成功按钮</Button>
            <Button type={'info'}>信息按钮</Button>
            <Button type={'warning'}>警告按钮</Button>
            <Button type={'danger'}>危险按钮</Button>
        )
    }
`}
                    </PanelCode>
                </Panel>
                <h3>填充按钮</h3>
                <Panel>
                    <PanelItem>
                        <Button fill>默认按钮</Button>
                        <Button type={'primary'} fill>主要按钮</Button>
                        <Button type={'success'} fill>成功按钮</Button>
                        <Button type={'info'} fill>信息按钮</Button>
                        <Button type={'warning'} fill>警告按钮</Button>
                        <Button type={'danger'} fill>危险按钮</Button>
                    </PanelItem>
                    <PanelCode>
                        {`
    render() {
        return (
            <Button fill>默认按钮</Button>
            <Button type={'primary'} fill>主要按钮</Button>
            <Button type={'success'} fill>成功按钮</Button>
            <Button type={'info'} fill>信息按钮</Button>
            <Button type={'warning'} fill>警告按钮</Button>
            <Button type={'danger'} fill>危险按钮</Button>
        )
    }
`}
                    </PanelCode>
                </Panel>
                <h3>圆角按钮</h3>
                <Panel>
                    <PanelItem>
                        <Button round>默认按钮</Button>
                        <Button type={'primary'} round>主要按钮</Button>
                        <Button type={'success'} round>成功按钮</Button>
                        <Button type={'info'} round>信息按钮</Button>
                        <Button type={'warning'} round>警告按钮</Button>
                        <Button type={'danger'} round>危险按钮</Button>
                    </PanelItem>
                    <PanelCode>
                        {`
    render() {
        return (
            <Button round>默认按钮</Button>
            <Button type={'primary'} round>主要按钮</Button>
            <Button type={'success'} round>成功按钮</Button>
            <Button type={'info'} round>信息按钮</Button>
            <Button type={'warning'} round>警告按钮</Button>
            <Button type={'danger'} round>危险按钮</Button>
        )
    }
`}
                    </PanelCode>
                </Panel>
                <h3>圆型按钮</h3>
                <Panel>
                    <PanelItem>
                        <Button icon={'cat-fire'} circle></Button>
                        <Button type={'primary'} icon={'cat-fire'} circle></Button>
                        <Button type={'success'} icon={'cat-pause'} circle></Button>
                        <Button type={'info'} icon={'cat-pause'} circle></Button>
                        <Button type={'warning'} icon={'cat-pause'} circle></Button>
                        <Button type={'danger'} icon={'cat-pause'} circle></Button>
                    </PanelItem>
                    <PanelCode>
                        {`
    render() {
        return (
            <Button icon={'cat-fire'} circle></Button>
            <Button type={'primary'} icon={'cat-fire'} circle></Button>
            <Button type={'success'} icon={'cat-pause'} circle></Button>
            <Button type={'info'} icon={'cat-pause'} circle></Button>
            <Button type={'warning'} icon={'cat-pause'} circle></Button>
            <Button type={'danger'} icon={'cat-pause'} circle></Button>
        )
    }
`}
                    </PanelCode>
                </Panel>
                <h3>禁用按钮</h3>
                <Panel>
                    <PanelItem>
                        <Button disabled>默认按钮</Button>
                        <Button type={'primary'} disabled>主要按钮</Button>
                        <Button type={'success'} disabled>成功按钮</Button>
                        <Button type={'info'} disabled>信息按钮</Button>
                        <Button type={'warning'} disabled>警告按钮</Button>
                        <Button type={'danger'} disabled>危险按钮</Button>
                    </PanelItem>
                    <PanelCode>
                        {`
    render() {
        return (
            <Button icon={'cat-fire'} circle></Button>
            <Button type={'primary'} icon={'cat-fire'} circle></Button>
            <Button type={'success'} icon={'cat-pause'} circle></Button>
            <Button type={'info'} icon={'cat-pause'} circle></Button>
            <Button type={'warning'} icon={'cat-pause'} circle></Button>
            <Button type={'danger'} icon={'cat-pause'} circle></Button>
        )
    }
`}
                    </PanelCode>
                </Panel>
                <h3>不同尺寸</h3>
                <Panel>
                    <PanelItem>
                        <Button size={'mini'}>超小按钮</Button>
                        <Button size={'small'}>小型按钮</Button>
                        <Button size={'medium'}>中型按钮</Button>
                        <Button >默认按钮</Button>
                    </PanelItem>
                    <PanelCode>
                        {`
    render() {
        return (
            <Button size={'mini'}>超小按钮</Button>
            <Button size={'small'}>小型按钮</Button>
            <Button size={'medium'}>中型按钮</Button>
            <Button >默认按钮</Button>
        )
    }`}
                    </PanelCode>
                </Panel>
                <h3>属性列表</h3>
                <Table
                    columns={columns}
                    data={data}
                />
            </main>
        )
    }
}

export default ButtonPage;