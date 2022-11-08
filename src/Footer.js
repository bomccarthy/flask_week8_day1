import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
                <div className="container-fluid justify-content-end">
                    <div className="navbar-nav">
                        <a className="nav-link mx-2" href="index.html">Cigar Sommlier</a>
                        <a className="nav-link mx-2" href="mailto:sysrock@gmail.com">Contact</a>
                        <a className="nav-link mx-2" href="#">About</a>
                    </div>
                </div>
            </footer>
        )
    }
}
