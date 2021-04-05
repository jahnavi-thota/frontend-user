const initialState = {
    message: '',
    users: [
        // { id: 11, name: 'Abhinav', salary: 12345 },
        // { id: 102, name: 'Abhishek', salary: 23456 },
        // { id: 103, name: 'Ajay', salary: 34567 }
    ]
}

const reducer = (state = initialState, { type, payload }) => {

    // console.log(type);
    switch (type) {
    case "DELETE_USER":
        var filteredList = state.employees.filter((employee)=>{
            if(employee.id != payload.id){
                return employee;
            }
        })
        console.log(filteredList)
        return { employees: filteredList }
    }
}

export default reducer;
