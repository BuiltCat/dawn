import React from "react"
import { Panel, PanelItem, PanelCode } from "../component/panel"
import { Progress, Table } from "dawn-ui"

class ProgressPage extends React.Component {
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
        const ProgressData=[{
            parameter: "percentage",
            explain: "百分比",
            type: "number",
            optional: "",
            default: ""
        }, {
            parameter: "status",
            explain: "状态",
            type: "string",
            optional: "success | exception",
            default: "false"
        }, {
            parameter: "textInside",
            explain: "显示文字进度",
            type: "boolean",
            optional: "true | false",
            default: "false"
        }, {
            parameter: "strokeWidth",
            explain: "进度条的宽度",
            type: "number",
            optional: "",
            default: ""
        }]
        return (
            <main className="main">
                <h2>Progress 进度条</h2>
                <h3>基础进度条</h3>
                <Panel>
                    <PanelItem>
                        <Progress percentage={0} />
                        <Progress percentage={70} />
                        <Progress percentage={100}  status="success" />
                        <Progress percentage={50} status="exception" />
                    </PanelItem>
                    <PanelCode>
                        {`
    render(){
        return (
            <Progress percentage={0} />
            <Progress percentage={70} />
            <Progress percentage={100}  status="success" />
            <Progress percentage={50} status="exception" />
        )
    }
`}
                    </PanelCode>
                </Panel>
                <h3>带文字的进度条</h3>
                <Panel>
                    <PanelItem>
                        <Progress percentage={0}  textInside/>
                        <Progress percentage={70}  textInside/>
                        <Progress percentage={100}  textInside status="success" />
                        <Progress percentage={50}  textInside status="exception" />
                    </PanelItem>
                    <PanelCode>
                        {`
    
    render(){
        return (
            <div>
            <Progress percentage={0}  textInside/>
            <Progress percentage={70}  textInside/>
            <Progress percentage={100}  textInside status="success" />
            <Progress percentage={50}  textInside status="exception" />
          </div>
        )
    }
    onClose=()=>{
        console.log(1)
    }
`}
                    </PanelCode>
                </Panel>
                <h3>自定义宽度的进度条</h3>
                <Panel>
                    <PanelItem>
                        <Progress percentage={0}  strokeWidth={30} />
                        <Progress percentage={70}  strokeWidth={30} />
                        <Progress percentage={100}  strokeWidth={30} textInside status="success" />
                        <Progress percentage={50} strokeWidth={30} textInside status="exception" />
                    </PanelItem>
                    <PanelCode>
                        {`
    
    render(){
        return (
            <div>
                <Progress percentage={0}  strokeWidth={30} />
                <Progress percentage={70}  strokeWidth={30} />
                <Progress percentage={100}  strokeWidth={30} textInside status="success" />
                <Progress percentage={50} strokeWidth={30} textInside status="exception" />
          </div>
        )
    }
    onClose=()=>{
        console.log(1)
    }
`}
                    </PanelCode>
                </Panel> 
                <h3>Progress 属性列表</h3>
                <Table
                    columns={columns}
                    data={ProgressData}
                />
            </main>
        )
    }
}
export default ProgressPage;