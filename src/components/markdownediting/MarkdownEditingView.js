import React, {Component} from 'react';
import localforage from "localforage";
import MarkdownViewer from "./MarkdownViewer";
import MarkdownEditor from "./MarkdownEditor";
import MainMenu from "../mainmenu/MainMenu";
import "./MarkdownEditing.css";

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
            initialMarkdownText: ""
        }
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
                markdownText: value
            });
        }).catch((err) => {
            // This code runs if there were any errors
            console.log('error getting', err);
        });

    }

    handleChange = () => {
        this.setState({
            markdownText: this.editor.current.innerText
        });

        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localforage.setItem(this.LOCAL_STORAGE_KEY, this.state.markdownText).then((value) => {
            // Do other things once the value has been saved.
            //console.log('saved', value);
        }).catch((err) => {
            // This code runs if there were any errors
            console.log('error setting', err);
        });
    }

    render() {
        return <div className={"markdown-editing-view"}>
            <MarkdownEditor editor={this.editor}
                            handleChange={this.handleChange}
                            initialText={this.state.initialMarkdownText}
                            initialMarkdownText={this.state.initialMarkdownText}
            />
            <MarkdownViewer markdownText={this.state.markdownText}/>
            <MainMenu/>
        </div>
    }

}

export default MarkdownEditingView;