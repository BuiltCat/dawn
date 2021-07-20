import React from "react"
import { Panel, PanelItem, PanelCode} from "../component/panel"
import {Table,CheckBox,CheckBoxGroup} from "dawn-ui"

class CheckBoxShow extends React.Component{
    constructor(){
        super()
        this.state = {
          checkList: ['复选框 A', '选中且禁用']
        }
      }
      render() {
        return (
            <div>
            <CheckBoxGroup value={this.state.checkList} onChange={this.onChange}>
                <CheckBox label="复选框 A"></CheckBox>
                <CheckBox label="复选框 B"></CheckBox>
                <CheckBox label="复选框 C"></CheckBox>
                <CheckBox label="禁用" disabled></CheckBox>
                <CheckBox label="选中且禁用" disabled></CheckBox>
            </CheckBoxGroup>
            </div>
        )
      }
      onChange(value){
        console.log(value)
      }
}

class CheckBoxPage extends React.Component {
    render() {
        const columns = [{
            label: "参数",
            prop: "parameter"
        },{
            label: "说明",
            prop: "explain"
        },{
            label:"可选值",
            prop: "optional"
        },{
            label:"默认值",
            prop: "default"
        },{
            label: "类型",
            prop: "type"
        }]
        const CheckBoxData=[{
            parameter: "clicked",
            explain: "checkbox是否被选中",
            type: "Boolean",
            optional: "true | false",
            default: "false"
        },{
            parameter: "disabled",
            explain: "是否禁用checkbox",
            type: "Boolean",
            optional: "true | false",
            default: "false"
        },{
            parameter: "label",
            explain: "选项名称",
            type: "string",
            optional: "",
            default: ""
        }]
        const CheckBoxGroupData=[{
            parameter: "value",
            explain: "值列表",
            type: "string[]",
            optional: "",
            default: ""
        },{
            parameter: "onChange",
            explain: "改变checlbox返回的数组",
            type: "string[]",
            optional: "",
            default: ""
        }]
        return (
            <main className="main">
                <h2>CheckBox 多选框</h2>
                <h3>多选框</h3>
                <Panel>
                    <PanelItem>
                        <CheckBox clicked>选项 1</CheckBox>
                    </PanelItem>
                    <PanelCode>
                        {`
    render() {
        return (
            <CheckBox>选项 1</CheckBox>
        )
    }
`}
                    </PanelCode>
                </Panel>
                <h3>禁用多选框</h3>
                <Panel>
                    <PanelItem>
                        <CheckBox disabled clicked>选项 1</CheckBox>
                        <CheckBox disabled>选项 2</CheckBox>
                    </PanelItem>
                    <PanelCode>
                        {`
    render() {
        return (
            <CheckBox disabled clicked>选项 1</CheckBox>
            <CheckBox disabled>选项 2</CheckBox>
        )
    }
`}
                    </PanelCode>
                </Panel>
                <h3>多选框组</h3>
                <Panel>
                    <PanelItem>
                        <CheckBoxShow></CheckBoxShow>
                    </PanelItem>
                    <PanelCode>
                        {`
  constructor(){
    super()
    this.state = {
      checkList: ['复选框 A', '选中且禁用']
    }
  }
  render() {
    return (
        <div>
        {/* <CheckBoxGroup value={this.state.checkList} onChange={this.onChange}> */}
        <CheckBox label="复选框 A"></CheckBox>
        <CheckBox label="复选框 B"></CheckBox>
        <CheckBox label="复选框 C"></CheckBox>
        <CheckBox label="禁用" disabled></CheckBox>
        <CheckBox label="选中且禁用" disabled></CheckBox>
        {/* </CheckBoxGroup> */}
        </div>
    )
  }
  onChange(value){
      
  }
`
                        }
                    </PanelCode>
                </Panel>
                <h3>CheckBox 属性列表</h3>
                <Table
                    columns={columns}
                    data={CheckBoxData}
                />
                <h3>CheckBoxGroup 属性列表</h3>
                <Table
                    columns={columns}
                    data={CheckBoxGroupData}
                />
            </main>
        )
    }
}

export default CheckBoxPage