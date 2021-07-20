import React from "react"
import { Panel, PanelItem, PanelCode } from "../component/panel"
import { Tag, Table } from "dawn-ui"

class TagClose extends React.Component{
    onClose=()=>{
      console.log(1)
    }
    render(){
      return (
        <div>
          <Tag onClose={this.onClose} closed>标签1</Tag>
          <Tag onClose={this.onClose}  closed type="primary">标签2</Tag>
          <Tag onClose={this.onClose}  closed type="success">标签3</Tag>
          <Tag onClose={this.onClose}  closed type="info">标签4</Tag>
          <Tag onClose={this.onClose}  closed type="warning">标签5</Tag>
          <Tag onClose={this.onClose}  closed type="danger">标签6</Tag>
        </div>
      )
    }
}

class TagPage extends React.Component {
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
        const TagData=[{
            parameter: "type",
            explain: "主题",
            type: "string",
            optional: "primary | success | info | warning | danger",
            default: "default"
        }, {
            parameter: "closed",
            explain: "是否可关闭",
            type: "boolean",
            optional: "true | false",
            default: "false"
        }, {
            parameter: "onClose",
            explain: "关闭tag时触发的事件",
            type: "",
            optional: "",
            default: ""
        }]
        return (
            <main className="main">
                <h2>Tag 标签</h2>
                <h3>基础标签</h3>
                <Panel>
                    <PanelItem>
                    <Tag>标签1</Tag>
                    <Tag type="primary">标签2</Tag>
                    <Tag type="success">标签3</Tag>
                    <Tag type="info">标签4</Tag>
                    <Tag type="warning">标签5</Tag>
                    <Tag type="danger">标签6</Tag>
                    </PanelItem>
                    <PanelCode>
                        {`
    render(){
        return (
            <Tag>标签1</Tag>
            <Tag type="primary">标签2</Tag>
            <Tag type="success">标签3</Tag>
            <Tag type="info">标签4</Tag>
            <Tag type="warning">标签5</Tag>
            <Tag type="danger">标签6</Tag>
        )
    }
`}
                    </PanelCode>
                </Panel>
                <h3>可关闭的标签</h3>
                <Panel>
                    <PanelItem>
                        <TagClose />
                    </PanelItem>
                    <PanelCode>
                        {`
    
    render(){
        return (
            <div>
                <Tag onClose={this.onClose} closed>标签1</Tag>
                <Tag onClose={this.onClose}  closed type="primary">标签2</Tag>
                <Tag onClose={this.onClose}  closed type="success">标签3</Tag>
                <Tag onClose={this.onClose}  closed type="info">标签4</Tag>
                <Tag onClose={this.onClose}  closed type="warning">标签5</Tag>
                <Tag onClose={this.onClose}  closed type="danger">标签6</Tag>
          </div>
        )
    }
    onClose=()=>{
        console.log(1)
    }
`}
                    </PanelCode>
                </Panel> 
                <h3>Tag 属性列表</h3>
                <Table
                    columns={columns}
                    data={TagData}
                />
            </main>
        )
    }
}
export default TagPage;