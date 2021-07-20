import React from "react"
import { Panel, PanelItem, PanelCode } from "../component/panel"
import { Loading,Button, Table } from "dawn-ui"

class BaseTable extends React.Component {
    constructor() {
        super()
        this.state = {
            columns: [
                {
                    label: "日期",
                    prop: "date",
                    width: 180
                },
                {
                    label: "地点",
                    prop: "local",
                    width: 180
                },
                {
                    label: "天气",
                    prop: "weather"
                },
                {
                    label: "湿度",
                    prop: "humidity"
                }
            ],
            data: [{
                date: '2019-08-17',
                weather: '多云转晴',
                local: '北京市朝阳区',
                humidity: '65%'
            }, {
                date: '2019-08-17',
                weather: '大雨',
                local: '天津',
                humidity: '75%'
            }, {
                date: '2019-08-17',
                weather: '晴转多云',
                local: '上海',
                humidity: '73%'
            }]
        }
    }
    render() {
        return (
                <Table
                    columns={this.state.columns}
                    data={this.state.data}
                />
        )
    }
}

class LoadingPage extends React.Component {
    constructor(){
        super()
        this.state = {
            loading: false,
            text: '3秒后关闭'
        }
    }
    onClick(){
        this.setState({
            loading: true
        })
        setTimeout(()=>{
            this.setState({
                text: '2秒后关闭'
            })
        }, 1000)
        setTimeout(()=>{
            this.setState({
                text: '1秒后关闭'
            })
        }, 2000)
        setTimeout(()=>{
            this.setState({
                loading: false,
                text: '3秒后关闭'
            })
        }, 3000)
    }
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
        const LoadingData=[{
            parameter: "text",
            explain: "显示文字",
            type: "string",
            optional: "",
            default: ""
        },{
            parameter: "loading",
            explain: "是否加载",
            type: "boolean",
            optional: "true | false",
            default: "false"
        },{
            parameter: "fullscreen",
            explain: "全屏加载",
            type: "boolean",
            optional: "true | false",
            default: "false"
        }]
        return (
            <main className="main">
                <h2>Loading 加载</h2>
                <h3>基本加载</h3>
                <Panel>
                    <PanelItem>
                        <Loading loading>
                            <BaseTable></BaseTable>
                        </Loading>
                    </PanelItem>
                    <PanelCode>
                        {`
    render(){
        return (
            <Loading loading>
                <BaseTable></BaseTable>
            </Loading>
        )
    }
`}
                    </PanelCode>
                </Panel>
                <h3>附带文字</h3>
                <Panel>
                    <PanelItem>
                        <Loading loading text="正在加载中">
                            <BaseTable></BaseTable>
                        </Loading>
                    </PanelItem>
                    <PanelCode>
                        {`
    render(){
        return (
            <Loading loading text="正在加载中">
                <BaseTable></BaseTable>
            </Loading>
        )
    }
`}
                    </PanelCode>
                </Panel> 
                <h3>全屏加载</h3>
                <Panel>
                    <PanelItem>
                        <Loading loading={this.state.loading} text={this.state.text} fullscreen></Loading>
                        <Button onClick={this.onClick.bind(this)}>全屏加载{this.state.loading}</Button>
                    </PanelItem>
                    <PanelCode>
                        {`
    constructor(){
        super()
        this.state = {
            loading: false
        }
    }
    onClick(){
        this.setState({
            loading: true
        })
        setTimeout(()=>{
            this.setState({
                loading: false
            })
        }, 3000)
    }
    render(){
        return (
            <Loading loading={this.state.loading} text="正在加载中" fullscreen></Loading>
            <Button onClick={this.onClick.bind(this)}>全屏加载{this.state.loading}</Button>
        )
    }
`}
                    </PanelCode>
                </Panel>
                <h3>Loading 属性列表</h3>
                <Table
                    columns={columns}
                    data={LoadingData}
                />
            </main>
        )
    }
}
export default LoadingPage;