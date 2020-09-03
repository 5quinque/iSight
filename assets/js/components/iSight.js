import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import NewFolder from './NewFolder';
import FolderNav from './FolderNav';
import Folder from './Folder';

export default function ISight(props) {
    const { creatingNewFolder, folders, loading, onNewFolderClick, onCloseNewFolderClick} = props;

    return (
        <div>
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Link className={"navbar-brand brand-text col-md-3 col-lg-2 mr-0 px-3"} to={"/"}>iSight</Link>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"></input>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="#">Sign out</a>
                    </li>
                </ul>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    
                        {loading ? (
                            <div className={'text-center pt-3'}>
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <div className="sidebar-sticky pt-3">
                                <FolderNav
                                    folders={folders}
                                />
                                <div className="text-center border-top pt-3">
                                    <NewFolder
                                        creatingNewFolder={creatingNewFolder}
                                        onNewFolderClick={onNewFolderClick}
                                        onCloseNewFolderClick={onCloseNewFolderClick}
                                    />
                                </div>
                            </div>
                        )}
                    </nav>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <Switch>
                            <Route path="/folder/:folder(.+)" component={Folder} />
                        </Switch>
                    </main>
                </div>
            </div>
        </div>
    )
}