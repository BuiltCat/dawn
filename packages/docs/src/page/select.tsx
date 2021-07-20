import React from "react"
import { Panel, PanelItem, PanelCode } from "../component/panel"
import { Select, Table } from "dawn-ui"


class Selection extends React.Component{
    constructor(){
    super()
    this.state = {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面',
      }, {
        value: '选项5',
        label: '北京烤鸭',
      }],
      value: ''
    };
  }
  render() {
    return (
        <Select onChange={this.onChange} options={this.state.options} placeholder="请选择"></Select>
      )  
    }
  onChange=(object) =>{
    console.log(object)
  }
}

class SelectionDisable extends React.Component{
    constructor(){
    super()
    this.state = {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面',
      }, {
        value: '选项5',
        label: '北京烤鸭',
      }],
      value: ''
    };
  }
  render() {
    return (
        <Select disabled onChange={this.onChange} options={this.state.options} placeholder="请选择"></Select>
      )  
    }
  onChange=(object) =>{
    console.log(object)
  }
}
class SelectionDisableOption extends React.Component{
    constructor(){
    super()
        this.state = {
        options: [{
            value: '选项1',
            label: '黄金糕'
        }, {
            value: '选项2',
            label: '双皮奶'
        }, {
            value: '选项3',
            label: '蚵仔煎'
        }, {
            value: '选项4',
            label: '龙须面',
        }, {
            value: '选项5',
            label: '北京烤鸭',
            disabled: true
        }],
        value: ''
        };
    }
    render() {
        return (
            <Select onChange={this.onChange} options={this.state.options} placeholder="请选择"></Select>
        )  
    }
    onChange=(object) =>{
        console.log(object)
    }
}
class SelectPage extends React.Component {
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
        const SelectData = [{
            parameter: "disabled",
            explain: "是否禁用",
            type: "boolean",
            optional: "true | false",
            default: "false"
        },{
            parameter: "placeholder",
            explain: "占位符",
            type: "string",
            optional: "",
            default: ""
        },{
            parameter: "onChange",
            explain: "选中option时调用的方法",
            type: "",
            optional: "",
            default: "返回选中option的value和label"
        }]
        const OptionData = [{
            parameter: "value",
            explain: "option的值",
            type: "",
            optional: "",
            default: ""
        }, {
            parameter: "label",
            explain: "option的标签",
            type: "string",
            optional: "",
            default: ""
        }, {
            parameter: "disabled",
            explain: "是否禁用",
            type: "boolean",
            optional: "true | false",
            default: "false"
        }]
        return (
            <main className="main">
                <h2>Select 选择器</h2>
                <h3>默认选择器</h3>
                <Panel>
                    <PanelItem>
                       <Selection />
                    </PanelItem>
                    <PanelCode>
                        {`
    constructor(){
        super()
        this.state = {
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面',
          }, {
            value: '选项5',
            label: '北京烤鸭',
            disabled: true
          }],
          value: ''
        };
      }
      render() {
        return (
            <Select onChange={this.onChange} options={this.state.options} placeholder="请选择"></Select>
          )  
        }
      onChange=(object) =>{
        console.log(object)
      }
`}
                    </PanelCode>
                </Panel>
                <h3>禁用选择器</h3>
                <Panel>
                    <PanelItem>
                        <SelectionDisable />
                    </PanelItem>
                    <PanelCode>
                        {`
    constructor(){
        super()
        this.state = {
        options: [{
            value: '选项1',
            label: '黄金糕'
        }, {
            value: '选项2',
            label: '双皮奶'
        }, {
            value: '选项3',
            label: '蚵仔煎'
        }, {
            value: '选项4',
            label: '龙须面',
        }, {
            value: '选项5',
            label: '北京烤鸭',
        }],
        value: ''
        };
    }
    render() {
        return (
            <Select disbaled onChange={this.onChange} options={this.state.options} placeholder="请选择"></Select>
        )  
    }
    onChange=(object) =>{
        console.log(object)
    }
`}
                    </PanelCode>
                </Panel> 
                <h3>禁用选项</h3>
                <Panel>
                    <PanelItem>
                        <SelectionDisableOption />
                    </PanelItem>
                    <PanelCode>
                        {`
    constructor(){
        super()
        this.state = {
        options: [{
            value: '选项1',
            label: '黄金糕'
        }, {
            value: '选项2',
            label: '双皮奶'
        }, {
            value: '选项3',
            label: '蚵仔煎'
        }, {
            value: '选项4',
            label: '龙须面',
        }, {
            value: '选项5',
            label: '北京烤鸭',
            disabled: true
        }],
        value: ''
        };
    }
    render() {
        return (
            <Select onChange={this.onChange} options={this.state.options} placeholder="请选择"></Select>
        )  
    }
    onChange=(object) =>{
        console.log(object)
    }
`}
                    </PanelCode>
                </Panel>
                <h3>Select 属性列表</h3>
                <Table
                    columns={columns}
                    data={SelectData}
                />
                <h3>Option 属性列表</h3>
                <Table
                    columns={columns}
                    data={OptionData}
                />
            </main>
        )
    }
}
export default SelectPage;