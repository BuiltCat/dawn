import React from 'react'
import style from"./table.module.css"

type TableProps = {
    data: Array<any>
    columns: Array<any>
    stripe?: boolean
    border?: boolean
}

function renderHeader(columns: Array<any>){
    // let columns = this.props.columns
    return columns.map((col)=>{
        return <th key={col.prop}>{col.label}</th>
    })
}
function renderRows(data: Array<any>, columns: Array<any>){
    // let data = this.props.data
    // let columns = this.props.columns
    return data.map((data, index)=>{
        let rows = columns.map((col)=>{
            return <td key={col.prop}>{data[col.prop]}</td>
        })
        return <tr key={index}>{rows}</tr>
    })
}
export function Table({columns, data, stripe, border}: TableProps){
    let className = [ style['tables'] ]
    if(stripe){
        className.push( style['stripe'])
    }
    if(border){
        className.push( style['border'])
    }
    return (
            <table className={ className.join(' ')}>
                <thead>
                    <tr> 
                        {renderHeader(columns)}
                    </tr>
                </thead>
                <tbody>
                    {renderRows(data, columns)}
                </tbody>
            </table>
        )
}