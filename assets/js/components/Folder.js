import React, {Component} from 'react';
import axios from 'axios';
import { FileZipIcon, UploadIcon, TrashcanIcon } from '@primer/octicons-react'
import {Button, ButtonGroup, ButtonDanger} from '@primer/components'
import Thumbnail from './Thumbnail';

class Folder extends Component {
    constructor() {
        super();

        this.state = { folder: null, files: [], loading: true}
    }

    componentDidMount() {
        this.setState(
            {folder: this.props.match.params.folder},
            this.getFiles
        )
    }

    componentDidUpdate (prevProps, prevState) {
        if (this.state.folder !== this.props.match.params.folder) {
            this.setState(
                {folder: this.props.match.params.folder},
                this.getFiles
            );
        }
    }

    getFiles() {
        axios.get(`https://127.0.0.1:8000/api/files/${this.state.folder}`).then(files => {
            this.setState({ files: files.data, loading: false })
        })
    }

    render() {
        const { files, folder, loading } = this.state;

        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">{folder}</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    <ButtonGroup display='block' my={2}>
                        <Button><UploadIcon /></Button>
                        <Button><FileZipIcon /></Button>
                        <ButtonDanger><TrashcanIcon /></ButtonDanger>
                    </ButtonGroup>
                    </div>
                </div>
                {loading ? (
                    <div className={'text-center pt-3'}>
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className={'row'}>
                        {files.map(file =>
                            <Thumbnail key={file.id} filename={file.filename} />
                        )}
                    </div>
                )}
            </div>
        )
    }
}

export default Folder;