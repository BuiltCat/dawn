import React, { useState } from "react"
import style from "./select.module.css"

interface SelectProps {
    options: Array<any>
    placeholder: string
    onChange: ({ }) => void
    disabled?: boolean
}

export function Select({ onChange, options, disabled, placeholder }: SelectProps) {
    const [valueState, setValueState] = useState('')
    const [labelState, setLabelState] = useState('')
    const [openState, setOpenState] = useState(false)
    const clickOption = (value: string, label: string) => {
        return () => {
            setValueState(value)
            setLabelState(label)
            setOpenState(false)

            onChange({
                value,
                label
            })
        }
    }
    const renderElement = () => {
        const value = valueState
        return options.map(o => {
            if (o.disabled) {
                return <li key={o.value} className={`${style['option']} ${style['disabled']} ${value === o.value ? style['active']: ''}`} value={o.value}>{o.label}</li>
            }
            return <li key={o.value} onClick={clickOption(o.value, o.label)} className={`${style['option']} ${value === o.value ? style['active'] : ''}`} value={o.value}>{o.label}</li>

        })
    }
    if (disabled) {
        return (
            <div className={`${style['cat-select']} ${disabled ? 'disabled' : ''}`}>
                <div className={style['select']}>
                    <span className={`catfont cat-down`}></span>
                    {placeholder}
                </div>
            </div>
        )
    }
    return (
        <div className={`${style['cat-select']} ${disabled ? style['cat-disabled'] : ''}`}>
            <div className={`${style['select']} ${openState ? style['open']: ''}`} onClick={() => {
                setOpenState(!openState)
            }}>
                {labelState || placeholder}
                <span className={`catfont cat-down ${openState ? style['open']: ''}`}></span>
            </div>
            <ul className={style['select-option']}>
                {renderElement()}
            </ul>
        </div>
    )
}