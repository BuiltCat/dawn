import React from "react";
import hljs from 'highlight.js'



class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.showCode = this.showCode.bind(this);
        this.state = {
            isOpen: false,
            title: '显示代码'
        }
    }
    renderChildren() {
        return React.Children.map(this.props.children, child => {
            if (child.type === PanelCode) {
                return React.cloneElement(child, {
                    isOpen: this.state.isOpen
                })
            }
            return child
        })
    }
    showCode() {
        this.setState({
            title: this.state.isOpen ? '显示代码':'隐藏代码',
            isOpen: !this.state.isOpen,
        })
    }
    render() {
        return (
            <div className="panel">
                { this.renderChildren() }
                <div className="panel-code" onClick={ this.showCode }>
                    { this.state.title }
                </div>
            </div>
        )
    }
}
class PanelItem extends React.Component {
    render() {
        return (
            <div className="panel-item">
                { this.props.children }
            </div>
        )
    }
}
class PanelCode extends React.Component {
    render() {
        return (
            <div className={this.props.isOpen ? 'panel-code-show' : 'panel-code-none'}>
                <pre>
                    <code className="lang-javascript" dangerouslySetInnerHTML={{
                        __html: hljs.highlightAuto(this.props.children).value}}>
                    </code>
                </pre>
            </div>
        )
    }
}

export {
    Panel,
    PanelItem,
    PanelCode
};