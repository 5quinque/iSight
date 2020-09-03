
import React, { Component } from 'react';
import axios from 'axios';
import ISight from './iSight';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            folders: [],
            activeFolder: null,
            loading: true,
            creatingNewFolder: false
        }

        this.handleNewFolderClick = this.handleNewFolderClick.bind(this);
        this.handleCloseNewFolderClick = this.handleCloseNewFolderClick.bind(this);
    }

    componentDidMount() {
        this.getFolders();
    }

    getFolders() {
        axios.get(`https://127.0.0.1:8000/api/folders/`).then(folders => {
            this.setState({ folders: folders.data, loading: false })
        })
    }

    handleNewFolderClick() {
        this.setState({creatingNewFolder: true});
    }

    handleCloseNewFolderClick() {
        this.setState({creatingNewFolder: false});
    }

    render() {
        const { creatingNewFolder, loading, folders } = this.state;

        return <ISight
            creatingNewFolder={creatingNewFolder}
            loading={loading}
            folders={folders}
            onNewFolderClick={this.handleNewFolderClick}
            onCloseNewFolderClick={this.handleCloseNewFolderClick}
        />
    }
}

export default Home;