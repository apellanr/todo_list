import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { get_one, delete_todo } from '../actions/index';
import SF from './imgs/sanFrancisco.jpg';

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

    render() {
        console.log('Single Todo:', this.props.todo)
        console.log('View todo props', this.props);
        const {todo} = this.props;

        if(!todo) {
            return <h1>Loading...</h1>
        }

        return (
            <div>
                <Link to="/" className="btn btn-outline-primary">Back To List</Link>
                <h1>Title: {todo.title}</h1>
                <p>Details: {todo.details}</p> 
                <button className="btn btn-danger" onClick={ () => this.handleDelete() }>Delete</button>
            </div>    
        )
    }
}

function mapStateToProps(state) {
    return {
        todo: state.todos.single
    }
}

export default connect(mapStateToProps, {get_one, delete_todo})(ViewTodo);