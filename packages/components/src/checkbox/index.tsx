import React, { useState } from "react";
import style from "./checkbox.module.css";

interface CheckBoxProps{
    clicked?:boolean
    disabled?:boolean
    children?: any
    label?: string
    HandleValueChange?:(value: any)=>void
}
interface CheckBoxState{
    clicked:boolean
}
interface CheckBoxGroupProps{
    children: Array<any>
    value: Array<any>
    onChange: (value: any) => void
}
interface CheckBoxGroupState{
    value: Array<string>
}

export function CheckBox({clicked, label, HandleValueChange, disabled, children}: CheckBoxProps){
    const [clickedState, setClickedState ] = useState(clicked)
    const onClick = () =>{
        if(HandleValueChange){
            HandleValueChange(label)
        }
        setClickedState(!clickedState)
    }
    return (
        <label className={`${style['cat-checkbox']} ${disabled? style['disabled'] :''}`}>
            <span className={`${style['square']} catfont ${clickedState?style['is-clicked']:''}`}></span>
            <input type="checkbox" disabled ={disabled} onClick={ onClick } />
            <span>{ children || label }</span>
        </label>
    )
}
export function CheckBoxGroup({ value, children, onChange  }: CheckBoxGroupProps){
    const [ valueState, setValueState ] = useState(value)
    const renderCheckBox = () => {
        return children.map( c =>{
            for(let v in value){
                if( value[v] === c.props.label){
                    return React.cloneElement(c,{
                            clicked: true,
                            key: c.props.label,
                            HandleValueChange: HandleValueChange
                        })
                }
            }
            return React.cloneElement(c,{
                clicked: false,
                key: c.props.label,
                HandleValueChange: HandleValueChange
            })
        } )
    }
    const HandleValueChange = (label: string) => {
        const value = valueState
        const index = value.indexOf(label)
        if(index >= 0){
            value.splice(index,1)
        }else{
            value.push(label)
            setValueState(value)
        }
    }
    return(
        <div onChange={()=> {onChange(valueState)}}>
            { renderCheckBox() }
        </div>
    )
}
