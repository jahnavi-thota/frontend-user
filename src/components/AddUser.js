import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as actions from '../actions/actions'

class AddUser extends Component{
    constructor(){
        super();
        this.username = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.state = {message: ''}
    }

    addUser(event)
    {
        console.log('method for adding user',this.username.current.value)
        console.log('method for adding user',this.email.current.value)
        console.log('method for adding a user',this.password.current.value)
        event.preventDefault();


        this.props.onAddUser({id: 0, username: this.username.current.value, email: this.email.current.value,password: this.password.current.value});
    }

    render() {
        return (
            <div>
                
                <div className="alert alert-success" role="alert">
                    {this.props.message}
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">User Name</span>
                </div>
                <input type="text" ref={this.username} className="form-control" placeholder="Enter User Name" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Email</span>
                </div>

                <input type="text" ref={this.email} className="form-control" placeholder="Enter Email" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Password</span>
                </div>
                <input type="text" ref={this.password} className="form-control" placeholder="Enter Password" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>


                <button type="button" className="btn btn-primary" onClick={this.addUser.bind(this)}>Add User</button>

                </div>
        )
    }
}
// export default AddEmployee;
const mapStateToProps = (state) => {
    return {
        message: state.message
        // employees: state.employees
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onAddUser: (payload) => dispatch(actions.addUser(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToState)(AddUser);
