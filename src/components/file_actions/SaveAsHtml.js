import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FileSaver from 'file-saver';

class SaveAsHtml extends Component {

    save = () =>{
        const blob = new Blob([this.props.content], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, "notes.html");
    }

    render() {
        return <div className="download-as-html">
            <button className="save-as-btn" onClick={this.save}>html</button>
        </div>
    }

}

SaveAsHtml.defaultProps = {
    content:""
}

SaveAsHtml.propTypes = {
    content: PropTypes.string,
}


export default SaveAsHtml;