import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FileSaver from 'file-saver';

class SaveAsTxt extends Component {

    save = () =>{
        const blob = new Blob([this.props.content], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, "notes.txt");
    }

    render() {
        return <div className="download-as-html">
            <button onClick={this.save}>txt</button>
        </div>
    }

}

SaveAsTxt.defaultProps = {
    content:""
}

SaveAsTxt.propTypes = {
    content: PropTypes.string,
}


export default SaveAsTxt;