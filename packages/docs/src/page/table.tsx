import React from "react";
import { Panel, PanelItem, PanelCode } from "../component/panel"
import { Table } from "dawn-ui";
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
class StripeTable extends React.Component {
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
            }, {
                date: '2019-8-17',
                weather: '阴',
                local: '杭州',
                humidity: '77%'
            }]
        }
    }
    render() {
        return (
            <Table
                columns={this.state.columns}
                data={this.state.data}
                stripe={true}
            />
        )
    }
}
class BorderTable extends React.Component {
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
            }, {
                date: '2019-8-17',
                weather: '阴',
                local: '杭州',
                humidity: '77%'
            }]
        }
    }
    render() {
        return (
            <Table
                columns={this.state.columns}
                data={this.state.data}
                border={true}
            />
        )
    }
}
class TablePage extends React.Component {
    render() {
        return (
            <main className="main">
                <h2>Table 表格</h2>
                <h3>基础表格</h3>
                <Panel>
                    <PanelItem>
                        <BaseTable></BaseTable>
                    </PanelItem>
                    <PanelCode>
                        {`
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
                local: '北京',
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
`}
                    </PanelCode>
                </Panel>
                <h3>带斑马纹的表格</h3>
                <Panel>
                    <PanelItem>
                        <StripeTable></StripeTable>
                    </PanelItem>
                    <PanelCode>
                        {`
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
            }, {
                date: '2019-8-17',
                weather: '阴' ,
                local: '杭州',
                humidity: '77%'
            }]
        }
      }
    render() {
        return (
            <Table
              columns={this.state.columns}
              data={this.state.data}
              stripe={true}
            />
          )
    }
`}
                    </PanelCode>
                </Panel>
                <h3>带边框的表格</h3>
                <Panel>
                    <PanelItem>
                        <BorderTable></BorderTable>
                    </PanelItem>
                    <PanelCode>
                        {`
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
            }, {
                date: '2019-8-17',
                weather: '阴',
                local: '杭州',
                humidity: '77%'
            }]
        }
    }
    render() {
        return (
            <Table
                columns={this.state.columns}
                data={this.state.data}
                border={true}
            />
        )
    }
`}
                    </PanelCode>
                </Panel>
            </main>
        )
    }
}
export default TablePage;