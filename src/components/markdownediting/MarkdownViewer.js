import React from 'react';
import PropTypes from 'prop-types';
import SaveAsHtml from "../file_actions/SaveAsHtml";
import SaveAsTxt from "../file_actions/SaveAsTxt";

const MarkdownViewer = (props) => <div className="markdown-viewer">
    <div className="markdown-viewer__content" dangerouslySetInnerHTML={{__html: props.htmlContent}}/>
    <div className="markdown-viewer__actions">
        <SaveAsTxt content={props.markdownText}/>
        <SaveAsHtml content={props.htmlContent}/>
    </div>
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