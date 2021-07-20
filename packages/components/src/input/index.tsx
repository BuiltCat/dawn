import React from "react"
import style from "./input.module.css"

interface InputProps{
    placeholder?: string
    disabled?: boolean
    icon?: string
    size?: string
    name?: string
    readOnly?: boolean
    autoFocus?: boolean
    type?: string
}

export function Input({icon, name, autoFocus, disabled, size, readOnly, type, placeholder}: InputProps){
   return (
        <div className={`${style['cat-input']} ${disabled?style["disabled"]:""} ${size?size:""}`} >
            {icon ?  <i className={`catfont ${icon}`}></i> : null}
            <input name={ name } autoFocus={ autoFocus } readOnly={readOnly} type={type} disabled={disabled} placeholder={placeholder} />
        </div>
    )
    
}