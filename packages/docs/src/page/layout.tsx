import React from "react"
import { Panel, PanelItem, PanelCode } from "../component/panel"
import { LayoutCol, LayoutRow, Table } from "dawn-ui"

class LayoutPage extends React.Component {
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
        const LayoutRowData=[{
            parameter: "gutter",
            explain: "分栏间隔",
            type: "number",
            optional: "",
            default: "0"
        }]
        const LayoutColData = [{
            parameter: "span",
            explain: "所占列数",
            type: "number",
            optional: "",
            default: ""
        }, {
            parameter: "offset",
            explain: "偏移量",
            type: "number",
            optional: "",
            default: "0"
        }]
        const style = {
            height: 40 + 'px',
            borderRadius: 4 + 'px',
            background: '#0099FF'
        }
        return (
            <main className="main">
                <h2>Layout 布局</h2>
                <h3>基础布局</h3>
                <Panel>
                    <PanelItem>
                        <LayoutRow>
                            <LayoutCol span={24}>
                                <div style={style}></div>
                            </LayoutCol>
                        </LayoutRow>
                        <LayoutRow>
                            <LayoutCol span={12}> <div style={{
                                ...style,
                                opacity: 0.4
                            }}></div></LayoutCol>
                            <LayoutCol span={12}> <div style={{
                                ...style,
                                opacity: 0.6
                            }}></div></LayoutCol>
                        </LayoutRow>
                        <LayoutRow>
                            <LayoutCol span={8}><div style={{
                                ...style,
                                opacity: 0.4
                            }}></div></LayoutCol>
                            <LayoutCol span={8}><div style={{
                                ...style,
                                opacity: 0.5
                            }}></div></LayoutCol>
                            <LayoutCol span={8}><div style={{
                                ...style,
                                opacity: 0.6
                            }}></div></LayoutCol>
                        </LayoutRow>
                        <LayoutRow>
                            <LayoutCol span={6}><div style={{
                                ...style,
                                opacity: 0.4
                            }}></div></LayoutCol>
                            <LayoutCol span={6}><div style={{
                                ...style,
                                opacity: 0.5
                            }}></div></LayoutCol>
                            <LayoutCol span={6}><div style={{
                                ...style,
                                opacity: 0.6
                            }}></div></LayoutCol>
                            <LayoutCol span={6}><div style={{
                                ...style,
                                opacity: 0.7
                            }}></div></LayoutCol>
                        </LayoutRow>
                    </PanelItem>
                    <PanelCode>
                        {`
    render(){
        return (
            <LayoutRow>
                <LayoutCol span={24}></LayoutCol>
            </LayoutRow>
            <LayoutRow>
                <LayoutCol span={12}></LayoutCol>
                <LayoutCol span={12}></LayoutCol>
            </LayoutRow>
            <LayoutRow>
                <LayoutCol span={8}></LayoutCol>
                <LayoutCol span={8}></LayoutCol>
                <LayoutCol span={8}></LayoutCol>
            </LayoutRow>
            <LayoutRow>
                <LayoutCol span={6}></LayoutCol>
                <LayoutCol span={6}></LayoutCol>
                <LayoutCol span={6}></LayoutCol>
                <LayoutCol span={6}></LayoutCol>
            </LayoutRow>
        )
    }
`}
                    </PanelCode>
                </Panel>
                <h3>分栏间隔</h3>
                <Panel>
                    <PanelItem>
                        <LayoutRow gutter={20}>
                            <LayoutCol span={6}><div style={{
                                ...style,
                                opacity: 0.4
                            }}></div></LayoutCol>
                            <LayoutCol span={6}><div style={{
                                ...style,
                                opacity: 0.5
                            }}></div></LayoutCol>
                            <LayoutCol span={6}><div style={{
                                ...style,
                                opacity: 0.6
                            }}></div></LayoutCol>
                            <LayoutCol span={6}><div style={{
                                ...style,
                                opacity: 0.7
                            }}></div></LayoutCol>
                        </LayoutRow>
                    </PanelItem>
                    <PanelCode>
                        {`
    render(){
        return (
            <LayoutRow  gutter={20}>
                <LayoutCol span={6}></LayoutCol>
                <LayoutCol span={6}></LayoutCol>
                <LayoutCol span={6}></LayoutCol>
                <LayoutCol span={6}></LayoutCol>
            </LayoutRow>
        )
    }
`}
                    </PanelCode>
                </Panel> 
                <h3>偏移分栏</h3>
                <Panel>
                    <PanelItem>
                        <LayoutRow gutter={20}>
                            <LayoutCol span={6}><div style={{
                                ...style,
                                opacity: 0.4
                            }}></div></LayoutCol>
                            <LayoutCol offset={6} span={6}><div style={{
                                ...style,
                                opacity: 0.6
                            }}></div></LayoutCol>
                            <LayoutCol span={6}><div style={{
                                ...style,
                                opacity: 0.7
                            }}></div></LayoutCol>
                        </LayoutRow>
                        <LayoutRow gutter={20}>
                            <LayoutCol offset={6} span={6}><div style={{
                                ...style,
                                opacity: 0.4
                            }}></div></LayoutCol>
                        </LayoutRow>
                        <LayoutRow gutter={20}>
                            <LayoutCol offset={12} span={12}><div style={{
                                ...style,
                                opacity: 0.4
                            }}></div></LayoutCol>
                        </LayoutRow>
                    </PanelItem>
                    <PanelCode>
                        {`
    render(){
        return (
            
            <LayoutRow gutter={20}>
            <LayoutCol span={6}></LayoutCol>
            <LayoutCol offset={6} span={6}></LayoutCol>
            <LayoutCol span={6}></LayoutCol>
            </LayoutRow>
            <LayoutRow gutter={20}>
            <LayoutCol offset={6} span={6}></LayoutCol>
            </LayoutRow>
            <LayoutRow gutter={20}>
            <LayoutCol offset={12} span={12}></LayoutCol>
            </LayoutRow>
        )
    }
`}
                    </PanelCode>
                </Panel>
                <h3>LayoutRow 属性列表</h3>
                <Table
                    columns={columns}
                    data={LayoutRowData}
                />
                <h3>LayoutRCol 属性列表</h3>
                <Table
                    columns={columns}
                    data={LayoutColData}
                />
            </main>
        )
    }
}
export default LayoutPage;