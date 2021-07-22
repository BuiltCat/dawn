import React from 'react'
import classNames from 'classnames/bind'
import styles from './button.module.css'

const cx = classNames.bind(styles);

export type IbuttonType = 'primary' | 'secondary' | 'text' | 'icon' | string

export interface IButtonProps extends React.HTMLAttributes<HTMLElement> {
    /** 按钮的样式 */
    type?: IbuttonType
    disabled?: boolean
    icon?: string
    dropdown?: boolean
    menuProps?: IContextualMenuProps[]
}

export interface IContextualMenuProps {
    key: string | number
    text: string
    icon?: string
}

export function Button({ type, disabled, icon, dropdown, children, menuProps }: IButtonProps) {
    const classes = cx('button', type)
    const renderMenu = () => {
        if (!menuProps) {
            return null
        }
        menuProps.map(menu => {
            return (<li>
                <span>{menu.icon}</span>
                <span>{menu.text}</span>
            </li>)
        })
        return (<ul>
            {menuProps}
        </ul>)

    }
    return (
        <button className={classes} disabled={disabled} >
            <div className={styles['inner']}>
                {icon ? <span className={`${styles['icon']} catfont ${icon}`}></span> : null}
                {children ? <span className={styles['text']}>{children}</span> : null}
                {dropdown ? <span className={`${styles['dropdown']} catfont cat-down`}></span> : null}
            </div>
            {renderMenu()}
        </button>
    )
}