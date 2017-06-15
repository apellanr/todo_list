import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => {
    return (
        <nav className="navbar fixed-bottom navbar-light bg-faded">
              <Link className="navbar-brand text-center" to="/"><i className="fa fa-copyright copyright"></i> narwhalDev</Link>
        </nav>
    )
}

export default footer;