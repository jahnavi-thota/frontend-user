export const saveUser = (payload) => {

    // http call using fetch.POST method

    return {type: "ADD_USER", payload: {message: "Successfully added User!!"}}
}


export const addUser = (payload) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8080/api/v1/addUser', requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 200){
                    console.log("success");
                    dispatch(saveUser())
                }
            })
        
    }

}

export const findEmployees = (payload) => {
    return {type: "FIND_EMPLOYEES", payload: payload}
}


export const fetchUser = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8080/api/v1/getUsers', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            }) .then(data => {
                console.log(data);
                dispatch(findEmployees(data));
            })
            
        
    }

}