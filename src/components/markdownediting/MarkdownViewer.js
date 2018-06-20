import React from 'react';
import PropTypes from 'prop-types';

const MarkdownViewer = (props) => <div className="markdown-viewer">
    <div className="markdown-viewer__content" dangerouslySetInnerHTML={{__html: props.htmlContent}}/>
</div>


MarkdownViewer.defaultProps = {
    markdownText: "",
    htmlContent: ""
}

MarkdownViewer.propTypes = {
    markdownText: PropTypes.string,
    htmlContent: PropTypes.string,
}

export default MarkdownViewer;