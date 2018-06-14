import React, {Component} from 'react';
import showdown from 'showdown';

class MarkdownViewer extends Component {

    constructor(props) {
        super(props);

        this.converter = new showdown.Converter();
    }

    render() {

        const htmlContent = this.converter.makeHtml(this.props.markdownText);

        return <div className={"markdown-viewer"} dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    }

}

export default MarkdownViewer;