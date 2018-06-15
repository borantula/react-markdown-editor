import React, {Component} from 'react';
import PropTypes from "prop-types";

class MarkdownEditor extends Component {


    render() {

        return <div
            contentEditable
            ref={this.props.editor}
            className="markdown-editor"
            onKeyUpCapture={this.props.handleChange}
            dangerouslySetInnerHTML={{ __html: this.props.initialMarkdownText }}
        />
    }

}

MarkdownEditor.defaultProps = {
    initialMarkdownText : ""
}

MarkdownEditor.propTypes = {
    initialMarkdownText : PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    editor: PropTypes.any.isRequired
}

export default MarkdownEditor;