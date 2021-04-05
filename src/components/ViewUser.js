import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";
// import AddUser from './AddUser';
import { connect } from 'react-redux';

import * as actions from '../actions/action'

// const employees = [
//     {id: 3, name: "Ravi", salary: 34343.34},
//     {id: 34, name: "Priya", salary: 44343.34},
//     {id: 6, name: "Rahul", salary: 34343.34}
// ]

// Get employees json from Spring app..


class ViewUser extends Component {

    constructor(){
        super();
        this.state = {users: [], message: ''}
    }

    componentDidMount() {
        console.log('Initialization...')
        this.props.onFetchUsers();

        // fetch('http://localhost:8080/api/employees/')
        //     .then(response => response.json())
        //     .then(
        //         data => {
        //             console.log(data)
        //             this.setState({employees:data})
        //         }
        //     );
    }
    

    deleteUser(id){
        console.log('Deleting user ...' , id)
        const url = 'http://localhost:8080/api/v1/users/' + id
        fetch(url, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(
                data => {
                    console.log(data)
                    this.setState({users:data.employees, message: data.text})

                }
            );
    }

    render() {

        var userList = this.props.users.map((user, i)=>{
            return (
                    <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td><Link to={"/detailview/" + user.id}>{user.username}</Link> </td>
                        <td>{user.username}</td>
                        <td><button type="button" className="btn btn-danger" onClick={this.deleteEmployee.bind(this, user.id)}> X </button>
                        <Link to={"/update/" + user.id}><button type="button" className="btn btn-warning">Edit</button></Link></td>
                    </tr>
            )
        })


        return (
            <div class="row">


                <div className="alert alert-success" role="alert">
                    {this.props.message}
                </div>
            
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {userList}
                </tbody>
            </table>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log('State is:: ', state)
    return {
        users: state.users
        // this.props.employee = this.state.employees;
    }
}


const mapDispatchToState = (dispatch) => {
    return {
        onFetchUsers: () => dispatch(actions.fetchUser())
    }
}

// export default ViewEmployee;
export default connect(mapStateToProps, mapDispatchToState)(ViewUser);