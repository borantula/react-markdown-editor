import React, {Component} from 'react';
import PropTypes from "prop-types";

class MarkdownEditor extends Component {

    componentDidMount()
    {
        document.getElementById('markdown-editor').focus()
    }

    render() {


        return <div className="markdown-editor-container">
            <div
                id="markdown-editor"
            contentEditable
            tabIndex="1"
            ref={this.props.editor}
            className="markdown-editor"
            onKeyUpCapture={this.props.handleChange}
            dangerouslySetInnerHTML={{ __html: this.props.initialMarkdownText }}
        />
        </div>
    }

}

MarkdownEditor.defaultProps = {
    initialMarkdownText : ""
}

MarkdownEditor.propTypes = {
    initialMarkdownText : PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    editor: PropTypes.object.isRequired
}

export default MarkdownEditor;