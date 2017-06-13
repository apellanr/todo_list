import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';
import ViewList from './view_list';
import ViewTodo from './view_todo';
import AddToDo from './add_form';
import './app.css';

const App = () => (
    <Router>
        <div className="container">
            <h1>To Do List</h1>
             <Link to="/add-todo" className="btn btn-outline-success">Add To Do</Link>
            <Route exact path="/" component={ViewList}/>
            <Route path="/todo/:id" component={ViewTodo}/>
            <Route path="/add-todo" component={AddToDo}/>
        </div>
    </Router>
);

export default App;
