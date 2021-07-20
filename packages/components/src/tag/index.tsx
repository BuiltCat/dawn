import React, { useState } from "react"
import style from "./tag.module.css"

interface TagProps{
    type?: string
    closed?: boolean
    children?: any
    onClose?: ()=>void
}

export function Tag({onClose, closed, type, children}:TagProps){
    
    const [ hiddenState, setHiddenState] = useState(false)
    const onClick = () => {
        setHiddenState(true)
        onClose? onClose():''
    }
    const renderElement = () => {
        const catTag = {
            display: hiddenState? 'none':'inner-block'
        }
        if(closed){
            let i = <i className={`cat-close catfont`}></i>
            if(onClose){
                i =  <i className={`cat-close catfont`} onClick={onClick}></i>
            }
            return (
                <span className={`${style['cat-tag']} ${style[type?type:'']}` } style={catTag}>
                    {children}
                    {i}
                </span>
            )
        }
        return (
            <span className={`${style['cat-tag']} ${style[type?type:'']} `}  style={catTag}>
                {children}
            </span>
        )
    }
    return renderElement()
}