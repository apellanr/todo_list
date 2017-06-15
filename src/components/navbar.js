import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class Navbar extends Component {
    render() {
        console.log(this.props);

        return (
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link to="/" className="navbar-brand">To Do List</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add-todo">Add Item</Link>
                    </li>
                </ul>
            </div>
        </nav>
        )
    }
}

export default Navbar;


