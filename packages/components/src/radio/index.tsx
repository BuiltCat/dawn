import React from "react";
import style from "./radio.module.css"

interface RadioProps {
    onChange?: (value: any) => void
    disabled?: boolean
    value: any
    checked?: boolean
    stateValue?: any
    children: any
}
interface RadioGroupProps {
    children: any
    value: any
    onChange: (value: any) => void
}

function Radio({ onChange, disabled, value, stateValue, children}: RadioProps) {
    
    const labelClassName = [style['cat-radio']]
    if(disabled){
        labelClassName.push(style['disabled'])
    }
    return (
        <label className={ labelClassName.join(' ') }>
            <span className={`${style['circle']} ${value === stateValue ? style["is-clicked"] : ""}`}></span>
            <input checked={value === stateValue} onChange={() => { onChange?onChange(value):null }} disabled={disabled} type="radio" />
            <span>{children}</span>
        </label>
    )
}

function RadioGroup(props: RadioGroupProps) {
    const renderChildren = () => {
        return React.Children.map(props.children, child => {
            return React.cloneElement(child,
                {
                    ...child.props,
                    onChange: props.onChange,
                    stateValue: props.value
                })
        })
    }
    return (
        <div>
            {renderChildren()}
        </div>
    )
}
export {
    Radio,
    RadioGroup
}