import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';
import Navbar from './navbar';
import ViewList from './view_list';
import ViewTodo from './view_todo';
import AddToDo from './add_form';
import './app.css';

const App = () => (
    <Router>
        <div>
            <Navbar />
            <div className="container text-center">
                {/*<Link to="/add-todo" className="btn btn-success addBtn">Add To Do</Link>*/}
                <Route exact path="/" component={ViewList}/>
                <Route path="/todo/:id" component={ViewTodo}/>
                <Route path="/add-todo" component={AddToDo}/>
            </div>
        </div>
    </Router>
);

export default App;
