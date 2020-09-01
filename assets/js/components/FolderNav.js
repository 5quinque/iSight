import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class FolderNav extends Component {
    constructor() {
        super();

        this.state = {folderPath: null}

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <nav className="nav flex-column">
                { this.getFolders('', this.props.folders) }
            </nav>
        )
    }

    handleClick(event) {
        const folderPath = event.target.getAttribute('data-key');

        this.setState({folderPath})
    };

    getFolders(path, folders) {
        return folders.map(folder =>
            <div className="nav-item" key={folder.inode}>
                <NavLink
                    activeClassName="active"
                    className={"nav-link"}
                    data-key={`${path}/${folder.inode}`}
                    to={`/folder${path}/${folder.inode}`}
                    onClick={this.handleClick}
                >
                    {folder.inode}
                </NavLink>
                { folder.items && (
                    <div className="px-2">
                        {this.getFolders(`${path}/${folder.inode}`, folder.items)}
                    </div>
                )}
            </div>
        )
    }
}