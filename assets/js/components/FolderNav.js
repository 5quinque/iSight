import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FileDirectoryIcon } from '@primer/octicons-react'

export default class FolderNav extends Component {

    render() {
        return this.getFolders('/folder', this.props.folders)
    }

    getFolders(path, folders) {
        return folders.map(folder =>
            <div className="nav-item" key={folder.inode}>
                <Link className={"nav-link"} to={`${path}/${folder.inode}`}><FileDirectoryIcon /> {folder.inode}</Link>
                { folder.items ? (
                    <div className="px-2 text-secondary">
                    {this.getFolders(`${path}/${folder.inode}`, folder.items)}
                    </div>
                ) : (
                    null
                )}
            </div>
        )
    }
}