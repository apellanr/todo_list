import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import SF from './imgs/sanFrancisco.jpg';
import * as actions from '../actions/index';
// import { get_one, delete_todo, toggle_complete } from '../actions/index';


class ViewTodo extends Component {
    
    componentDidMount() {
        console.log('ViewToDo props:', this.props.match.params.id);
        this.props.get_one(this.props.match.params.id);
    }

    handleDelete() {
        console.warn('ready to delete item:', this.props.todo._id);
        this.props.delete_todo(this.props.todo._id).then(() => {
            this.props.history.push('/');
        });
    }

    handleComplete() {
        console.info('toggle complete clicked!');
        this.props.toggle_complete(this.props.todo._id);
    }

    render() {
        console.log('Single Todo:', this.props.todo)
        console.log('View todo props', this.props);
        const {todo} = this.props;

        if(!todo) {
            return <h1>Loading...</h1>
        }

        return (
            <div>
                <Link to="/" className="btn btn-primary">Back To List</Link>
                <div className="card">
                    <div className="card-block">
                        <h2>Title: { todo.title }</h2>
                        <h4>Details: { todo.details } </h4>
                        <p>Item Completed: <b>{todo.complete ? `${new Date(parseInt(this.props.todo.completed))}` : 'Not completed'}</b></p>
                    </div>
                </div>
                    <button className={`btn btn-${todo.complete ? 'danger' : 'info' }`} onClick={() => this.handleComplete()}>{todo.complete ? 'Restore' : 'Complete'}</button>
                    <button className="btn btn-warning" onClick={ () => this.handleDelete() }>Delete</button>
            </div>    
        )
    }
}

function mapStateToProps(state) {
    return {
        todo: state.todos.single
    }
}

export default connect(mapStateToProps, actions)(ViewTodo);