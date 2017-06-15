import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';  
import { Link } from 'react-router-dom';
import { add_todo } from '../actions/index';

class AddForm extends Component {
    onFormSubmit(values) {
        console.log('form submitted', values);
        this.props.add_todo(values).then(() => {
            // console.log('ready to redirect', this.props);
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
        <div>    
            <h3 className="add-header add">Add Item</h3>
            <div className="container">
                <form onSubmit={handleSubmit((values) => this.onFormSubmit(values) )}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label add">Title</label>
                        <div className="col-sm-10">
                            <Field
                            className="form-control"
                            name="title"
                            component="input"
                            type="text"
                            placeholder="Enter item title"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label add">Details</label>
                        <div className="col-sm-10">
                            <Field
                            className="form-control"
                            name="details"
                            component="input"
                            type="text"
                            placeholder="Enter item details"
                            />
                        </div>
                        
                    </div>
                    <button className="btn btn-info">Add Item</button>
                    <Link to="/" className="btn btn-warning">Cancel</Link>
                </form>
            </div> 
        </div>    
        )
    }
}

AddForm = reduxForm({
    form: 'add-form'
})(AddForm);

export default connect(null, { add_todo })(AddForm);