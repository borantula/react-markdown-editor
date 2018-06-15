import React, {Component} from 'react';
import showdown from 'showdown';
import PropTypes from 'prop-types';

class MarkdownViewer extends Component {

    constructor(props) {
        super(props);

        this.converter = new showdown.Converter({
            simplifiedAutoLink : true,
            noHeaderId:true,
            strikethrough:true,
            tasklists:true,
            simpleLineBreaks:true,
            openLinksInNewWindow:true
        });
    }

    render() {

        const htmlContent = this.converter.makeHtml(this.props.markdownText);

        return <div className={"markdown-viewer"} dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    }

}

MarkdownViewer.defaultProps = {
    markdownText : ""
}

MarkdownViewer.propTypes = {
    markdownText : PropTypes.string
}

export default MarkdownViewer;