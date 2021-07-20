import React, { useState } from "react"
import style from "./menu.module.css"

interface MenuProps {
    // 主题
    theme?: string
    defaultActive: string
    mode: string
    onSelect?: () => void
    children: any
}
interface MenuState {
    defaultActive: string
    theme: string
}
interface SubMenuProps {
    index: string
    title: string
    children: any
    checked?: string
    defaultActive?: any
    onClick?: any
    onSelect?: any
}
interface MenuItemProps {
    onClick?: any
    index: string
    onSelect?: any
    checked?: any
    children: any
}
function Menu({ theme, defaultActive, mode, children, onSelect }: MenuProps) {
    const [themeState] = useState(theme ? theme : 'default')
    const [defaultActiveState, setDefaultActiveState] = useState(defaultActive)
    const onClick = (newDefaultActive: string) => {
        setDefaultActiveState(newDefaultActive)
    }
    const renderChildren = () => {
        return React.Children.map(children, child => {
            if (child.type === SubMenu) {
                return React.cloneElement(child, {
                    ...child.props,
                    checked: defaultActiveState.slice(0, 1) === child.props.index,
                    defaultActive: defaultActiveState,
                    onClick: onClick,
                    onSelect: onSelect
                })
            }
            return React.cloneElement(child, {
                ...child.props,
                checked: defaultActiveState === child.props.index,
                onClick: onClick,
                onSelect: onSelect
            })
        })
    }
    return (
        <ul className={`${style['cat-menus']} ${style[mode]} ${style[themeState]}`}>
            {renderChildren()}
        </ul>
    )
}

function SubMenu({ children, defaultActive, onClick, onSelect, checked, title }: SubMenuProps) {
    const renderChildren = () => {
        return React.Children.map(children, child => {
            return React.cloneElement(child, {
                ...child.props,
                checked: defaultActive === child.props.index,
                onClick: onClick,
                onSelect: onSelect
            })
        })
    }
    return (
        <li className={checked ? style['active'] : ''}>
            <div>
                {title}
                <span className={ `${style['catfont']} ${style['cat-down']}`}></span>
            </div>
            <ul className= { style['cat-submenu'] }>
                {renderChildren()}
            </ul>
        </li>
    )
}

function MenuItem({onClick, onSelect, index, checked, children}: MenuItemProps ){
    const changeDefault = () => {
        if (onClick) {
            onClick(index)
        }
        if (onSelect) {
            onSelect(index)
        }
    }
        return (
            <li className={checked ? style['active'] : ''} onClick={ changeDefault }>
                {children}
            </li>
        )
}


export {
    Menu,
    MenuItem,
    SubMenu
}