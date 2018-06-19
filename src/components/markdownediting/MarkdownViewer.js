import React, {Component} from 'react';

import PropTypes from 'prop-types';
import FileSaver from 'file-saver';

class MarkdownViewer extends Component {

    //TODO move to a component
    saveAsTxt = ()=>
    {
        const blob = new Blob([this.props.markdownText], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, "notes.txt");
    }

    //TODO move to a component
    saveAsHtml = ()=>
    {
        const blob = new Blob([this.props.htmlContent], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, "notes.html");
    }

    render() {

        return <div className={"markdown-viewer"} >
            <div className="markdown-viewer__content" dangerouslySetInnerHTML={{ __html: this.props.htmlContent }}></div>
            <div className="markdown-viewer__actions">
                <a href="#" onClick={this.saveAsTxt}>download as txt</a>
                <a href="#" onClick={this.saveAsHtml}>download as html</a>
            </div>
        </div>
    }

}

MarkdownViewer.defaultProps = {
    markdownText : "",
    htmlContent:""
}

MarkdownViewer.propTypes = {
    markdownText : PropTypes.string,
    htmlContent: PropTypes.string,
}

export default MarkdownViewer;