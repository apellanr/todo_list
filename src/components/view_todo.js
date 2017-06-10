import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { get_one } from '../actions/index';
import SF from './imgs/sanFrancisco.jpg';

class ViewTodo extends Component {
    
    componentDidMount() {
        console.log('ViewToDo props:', this.props.match.params.id);
        this.props.get_one(this.props.match.params.id);
    }

    render() {
        console.log('Single Todo:', this.props.todo)
        const {todo} = this.props;

        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={SF} alt="Card image cap"/>
                    <div className="card-block">
                        <h4 className="card-title">SF Quick Trip #1</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, repellat.</p>
                        <Link to="/" className="btn btn-outline-primary">Back To List</Link>
                    </div>
                </div>
            </div>    
        )
    }
}

function mapStateToProps(state) {
    return {
        todo: state.todo.single
    }
}

export default connect(null, {get_one})(ViewTodo);