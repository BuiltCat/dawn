import React from "react"
import style from "./loading.module.css"

interface LoadingProps {
    text?: string
    loading?: boolean
    fullscreen?: boolean
    children: any
}

export function Loading({ loading, children, fullscreen, text }: LoadingProps) {
    document.body.className = document.body.className.replace("cat-loading catfont", "")
    if (!loading) {
        return (
            <div>
                {children}
            </div>
        )
    }
    if (fullscreen) {
        document.body.className = "cat-loading catfont"
        return (
            <div className="cat-loading catfont">
                <div className="cat-loading-full">
                    <div className="cat-loading-text">
                        {text}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="cat-loading catfont">
                <div className="cat-loading-div">
                </div>
                <div className="cat-loading-text">
                    {text}
                </div>
                {children}
            </div>
        )
    }
}