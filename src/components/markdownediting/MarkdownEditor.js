import React, {Component} from 'react';

class MarkdownEditor extends Component {


    render() {
        return <div
            contentEditable
            ref={this.props.editor}
            className="markdown-editor"
            onKeyUpCapture={this.props.handleChange}
        />
    }

}

export default MarkdownEditor;