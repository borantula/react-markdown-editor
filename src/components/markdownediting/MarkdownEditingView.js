import React, {Component} from 'react';
import MarkdownViewer from "./MarkdownViewer";
import MarkdownEditor from "./MarkdownEditor";
import "./MarkdownEditing.css";

/**
 * HOC for editing view
 */
class MarkdownEditingView extends Component {

    constructor(props) {
        super(props);

        this.editor = React.createRef();

        this.state = {
            markdownText : ""
        }
    }


    handleChange = ()=> {
        this.setState({
            markdownText : this.editor.current.innerText
        })
    }

    render() {
        return <div className={"markdown-editing-view"}>
            <MarkdownEditor editor={this.editor} handleChange={this.handleChange}/>
            <MarkdownViewer markdownText={this.state.markdownText}/>
        </div>
    }

}

export default MarkdownEditingView;