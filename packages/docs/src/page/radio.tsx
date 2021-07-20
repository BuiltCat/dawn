import React from "react";
import { Panel,PanelItem,PanelCode } from "../component/panel"
import { Radio, RadioGroup, Table } from "dawn-ui";

class RadioGroupOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "a"
        }
    }
    onChange= (value) => {
        this.setState({ value:value });
    }
    render() {
        return (
            <div>
                <Radio value="a" stateValue={this.state.value} onChange={this.onChange}>备选项</Radio>
                <Radio value="b" stateValue={this.state.value} onChange={this.onChange}>备选项</Radio>
            </div>
        )
    }
}

class RadioGroupTwo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 3
        }
    }
    onChange(value) {
        this.setState({ value:value });
    }
    render() {
        return (
            <RadioGroup value={this.state.value} onChange={this.onChange.bind(this)}>
                <Radio value={3}>备选项</Radio>
                <Radio value={6}>备选项</Radio>
                <Radio value={9}>备选项</Radio>
            </RadioGroup>
        )
    }

}

class RadioPage extends React.Component {
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
        const RadioData=[{
            parameter: "value",
            explain: "Radio的value值",
            type: "string | number | boolean",
            optional: "",
            default: ""
        }, {
            parameter: "stateValue",
            explain: "状态值",
            type: "string | number | boolean",
            optional: "",
            default: ""
        }, {
            parameter: "disable",
            explain: "是否禁用",
            type: "boolean",
            optional: "true | false",
            default: "false"
        }]
        const RadioGroupData=[{
            parameter: "value",
            explain: "值",
            type: "string | number | boolean",
            optional: "",
            default: ""
        },{
            parameter: "onChange",
            explain: "绑定值变化时触发",
            type: "",
            optional: "",
            default: "返回选中Radio的值"
        }]
        return (
            <main className="main">
                <h2>Radio 单选框</h2>
                <h3>单选框</h3>
                <Panel>
                    <PanelItem>
                        <RadioGroupOne></RadioGroupOne>
                    </PanelItem>
                    <PanelCode>
                        {`
    constructor(props) {
            super(props);
            this.state = {
                value: "a"
            }
        }
        onChange(value) {
            this.setState({ value });
        }
        render() {
            return (
                <div>
                    <Radio value="a" checked={this.state.value === "a"} onChange={this.onChange.bind(this)}>备选项</Radio>
                    <Radio value="b" checked={this.state.value === "b"} onChange={this.onChange.bind(this)}>备选项</Radio>
                </div>
            )
    }
`}
                    </PanelCode>
                </Panel>
                <h3>禁用按钮</h3>
                <Panel>
                    <PanelItem>
                        <Radio disabled value={1}>中国</Radio>
                        <Radio disabled value={2}>美国</Radio>
                    </PanelItem>
                    <PanelCode>
                        {`
    render() {
        return (
            <div>
                <Radio disabled value={1}>中国</Radio>
                <Radio disabled value={2}>美国</Radio>
            </div>
        )
    }
`}
                    </PanelCode>
                </Panel>
                <h3>单选框组</h3>
                <Panel>
                    <PanelItem>
                        <RadioGroupTwo></RadioGroupTwo>
                    </PanelItem>
                    <PanelCode>
                        {`
    constructor(props) {
        super(props);

        this.state = {
            value: 3
        }
    }
    onChange(value) {
        this.setState({ value });
    }
    render() {
        return (
            <RadioGroup value={this.state.value} onChange={this.onChange.bind(this)}>
                <Radio value={3}>备选项</Radio>
                <Radio value={6}>备选项</Radio>
                <Radio value={9}>备选项</Radio>
            </RadioGroup>
        )
    }
`}
                    </PanelCode>
                </Panel>
                <h3>Radio 属性列表</h3>
                <Table
                    columns={columns}
                    data={RadioData}
                />
                <h3>RadioGroup 属性列表</h3>
                <Table
                    columns={columns}
                    data={RadioGroupData}
                />
            </main>
        )
    }
}

export default RadioPage;