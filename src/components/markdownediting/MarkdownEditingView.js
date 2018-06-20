import React, {Component} from 'react';
import localforage from "localforage";
import showdown from "showdown";
import MarkdownViewer from "./MarkdownViewer";
import MarkdownEditor from "./MarkdownEditor";
import MainMenu from "../mainmenu/MainMenu";
import "./MarkdownEditing.css";
import SaveAsTxt from "../file_actions/SaveAsTxt";
import SaveAsHtml from "../file_actions/SaveAsHtml";

/**
 * HOC for editing view
 */
class MarkdownEditingView extends Component {

    constructor(props) {
        super(props);

        this.editor = React.createRef();

        this.LOCAL_STORAGE_KEY = 'markdownText';


        this.state = {
            // get initial text from local storage
            markdownText: "",
            initialMarkdownText: "",
            htmlContent:""
        }


        this.converter = new showdown.Converter({
            simplifiedAutoLink : true,
            noHeaderId:true,
            strikethrough:true,
            tasklists:true,
            simpleLineBreaks:true,
            openLinksInNewWindow:true
        });
    }

    componentDidMount() {
        this.setFromLocalStorage()
    }


    /**
     * set initial value from local storage if there is any
     */
    setFromLocalStorage() {
        localforage.getItem(this.LOCAL_STORAGE_KEY).then((value) => {
            this.setState({
                initialMarkdownText: value,
                markdownText: value,
                htmlContent:this.convertToHtml(value)
            });


        }).catch((err) => {
            // This code runs if there were any errors
            console.log('error getting', err);
        });

    }

    handleChange = () => {
        const markdownText = this.editor.current.innerText;
        this.setState({
            markdownText,
            htmlContent:this.convertToHtml(markdownText)
        });


        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localforage.setItem(this.LOCAL_STORAGE_KEY, this.state.markdownText).then((value) => {
            // Do other things once the value has been saved.
        }).catch((err) => {
            // This code runs if there were any errors
            console.log('error setting', err);
        });
    }

    convertToHtml(markdownText)
    {
        return this.converter.makeHtml(markdownText);
    }

    render() {
        return <div className="markdown-editing-view">
            <MarkdownEditor editor={this.editor}
                            handleChange={this.handleChange}
                            initialText={this.state.initialMarkdownText}
                            initialMarkdownText={this.state.initialMarkdownText}
            />
            <MarkdownViewer markdownText={this.state.markdownText}
                            htmlContent={this.state.htmlContent}
            />
            <MainMenu/>
            <div className="markdown-viewer__actions">
                <SaveAsTxt content={this.props.markdownText}/>
                <SaveAsHtml content={this.props.htmlContent}/>
            </div>
        </div>
    }

}

export default MarkdownEditingView;