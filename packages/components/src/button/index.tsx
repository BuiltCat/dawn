import React from 'react'
import style from './button.module.css'

type ButtonProps = {
    /** 按钮的样式 */
    type?: string
    children: React.ReactNode
    fill?: boolean
    round?: boolean
    disabled?: boolean
    size?: string
    icon?: string
    circle?: boolean
}

export function Button({ type, children, fill, round, disabled, size, icon, circle }: ButtonProps) {
    let className = [style['button']]


    if (type) {
        className.push(style[type])
    }

    if (fill) {
        className.push(style['fill'])
    }
    if (round) {
        className.push(style['round'])
    }
    if (size) {
        className.push(style[size])
    }
    if(circle) {
        className.push(style['circle'])
    }
    if(icon){
        return (
            <button className={className.join(' ')} disabled={disabled} >
                <span className={`catfont ${icon}`}>
                        {children}
                </span>
            </button>
        )
    }else{
        return (
            <button className={className.join(' ')} disabled={disabled} >
                        {children}
            </button>
        )
    }
    
}