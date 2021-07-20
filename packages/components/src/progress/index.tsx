import React from "react"
import sytle from "./progress.module.css"
interface ProgressProps {
    percentage: number
    textInside?: boolean
    status?: string
    strokeWidth?: number
}

export function Progress({ percentage, strokeWidth, status, textInside }: ProgressProps) {
    const progressInner = {
        width: percentage + "%",
        height: strokeWidth + "px"
    }
    const catProgress = {
        height: strokeWidth + "px"
    }
    const progressNumber = {
        height: strokeWidth + "px",
        lineHeight: strokeWidth + "px"
    }
    return (
        <div className={`${sytle['cat-progress']} ${textInside ? sytle['text-inside'] : ''}`} style={catProgress}>
            <div className={`${sytle['progress-inner']} ${status ? sytle[status] : ''}`} style={progressInner}>
                <span className={sytle['progress-number']} style={progressNumber}>
                    {textInside ? `${percentage}%` : ''}
                </span>
            </div>
        </div>
    )
}