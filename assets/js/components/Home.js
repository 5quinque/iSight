
import React, { Component } from 'react';
import { Route, Switch, Redirect, Link, withRouter, useParams } from 'react-router-dom';
import axios from 'axios';
import { BrowserIcon, ClippyIcon, FileDirectoryIcon, HourglassIcon } from '@primer/octicons-react'
import FolderNav from './FolderNav';
import Folder from './Folder';


class Home extends Component {
    constructor() {
        super();

        this.state = { folders: [], loading: true}
    }

    componentDidMount() {
        this.getFolders();
    }

    getFolders() {
        axios.get(`https://127.0.0.1:8000/api/folders/`).then(folders => {
            this.setState({ folders: folders.data, loading: false })
        })
    }

    render() {
        const loading = this.state.loading;
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
                                <div className={'text-center'}>
                                    <HourglassIcon />
                                </div>
                            ) : (
                                <div className="sidebar-sticky pt-3">
                                    <ul className="nav flex-column">
                                        <FolderNav folders={this.state.folders} />
                                    </ul>
                                </div>

                            )}

                        </nav>

                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                            <Switch>
                                {/* <Redirect exact from="/" to="/users" /> */}
                                <Route path="/folder/:folder(.+)" component={withRouter(Folder)} />
                            </Switch>

                        </main>
                    </div>

                </div>


            </div>
        )
    }
}

export default Home;