import React from 'react'
import style from "./layout.module.css"

interface LayoutRowProps{
    gutter ?:number
    children: any
}

interface LayoutColProps{
    span: number
    offset?: number
    gutter ?:number
    children: any
}

function LayoutRow(props: LayoutRowProps){
    const renderChildren = ()=>{
        return React.Children.map( props.children, child => {
            return React.cloneElement(child, {
                ...child.props,
                gutter: props.gutter
            })
        })
    }
    return (
        <div className={ style["cat-layout-row"] }>
            {renderChildren()}
        </div>
    )
}

function LayoutCol(props: LayoutColProps){
        const innerStyle = {
            width: `${(props.span/24)*100}%`,
            marginLeft:  props.offset ? `${(props.offset / 24)*100}%` : '0',
            padding: props.gutter?`0 ${ props.gutter/2}px`:0
        }
        return (
            <div className={ style["cat-layout-col"] } style={innerStyle}>
                { props.children}
            </div>
        )
}

export {
    LayoutRow,
    LayoutCol
}