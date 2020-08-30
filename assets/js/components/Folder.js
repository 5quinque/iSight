import React, {Component} from 'react';
import axios from 'axios';
import { FileZipIcon, UploadIcon, TrashcanIcon } from '@primer/octicons-react'

class Folder extends Component {
    constructor() {
        super();

        this.state = { folder: null, files: [], loading: true}
    }

    componentDidMount() {
        this.setState({folder: this.props.match.params.folder})
        this.getFiles();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({folder: nextProps.match.params.folder})
        this.getFiles();
    }

    getFiles() {
        axios.get(`https://127.0.0.1:8000/api/files/${this.state.folder}`).then(files => {
            this.setState({ files: files.data, loading: false })
        })
    }

    render() {
        const loading = this.state.loading;
        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">{this.state.folder}</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary"><UploadIcon /> Upload</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary"><FileZipIcon /> Download</button>
                            <button type="button" className="btn btn-sm btn-danger"><TrashcanIcon /> Delete Folder</button>
                        </div>
                    </div>
                </div>
            


                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>
                        ) : (
                            <div className={'row'}>
                                {this.state.files.map(file =>

                                <div className="col" key={file.id}>
                                <img src="https://via.placeholder.com/150" className="rounded mx-auto d-block" alt={file.filename}></img>
                                </div>

                                )}
                            </div>
                        )}



            </div>
        )
    }
}
    
export default Folder;