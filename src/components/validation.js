
const validation = (values) => {
    let errors ={};

    if(!values.name){
        errors.name="Name is Missing"
    }
    if(!values.email){
        errors.email="Email is Missing"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Invalid Email"
    }
    if(!values.password){
        errors.password="Password is Missing"
    } else if(values.password.length < 6){
        errors.password="Password must be more than 5 characters"
    }
    return errors;
}

export default validation
