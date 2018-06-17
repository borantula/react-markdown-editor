import React, {Component} from 'react';

class DownloadAsHtml extends Component {

    download = () =>{

    }

    render() {
        return <div className="download-as-html">
            <span onClick={this.download}></span>
        </div>
    }

}