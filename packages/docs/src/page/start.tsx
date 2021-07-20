import React from "react";
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';
class StartPage extends React.Component {
    render() {
        const useText =`import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'pussycat';

ReactDOM.render(
    <Button type="Primary">Hollow World</Button>, 
    document.getElementById('app')
);`
        return (
            <main className="main">
                <h2>快速开始</h2>
                <h3>安装</h3>
                <pre>
                    <code className="lang-javascript" dangerouslySetInnerHTML={{
                        __html: hljs.highlightAuto("npm i pussycat --save").value
                    }}>
                    </code>

                </pre>
                <p>
                    推荐使用 npm 来安装，更好地和 webpack 配合使用。
                </p>
                <h3>使用</h3>
                <pre>
                    <code className="lang-javascript" dangerouslySetInnerHTML={{
                        __html: hljs.highlightAuto(useText).value}}>
                    </code>

                </pre>

            </main>
        )
    }
}

export default StartPage;