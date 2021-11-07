import React, {useEffect, useState} from 'react';
import validation from './validation';

const SignUpForm = ({submitForm}) => {
    const [values, setValues] = useState({
        name:"",
        email:"",
        password:"",
    });
    const [errors, setErrors] = useState({});
    const [dataCorrect, setDataCorrect] = useState(false);
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(validation(values));
        setDataCorrect(true);
    };

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && dataCorrect){
            submitForm(true);
        }
    },[errors]);

    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Create Account Here</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label className="label">USER NAME</label>
                        <input className="input" type="text" name="name" value={values.name} onChange={handleChange}/>
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div className="email">
                        <label className="label">EMAIL</label>
                        <input className="input" type="email" name="email" value={values.email} onChange={handleChange}/>
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="password">
                        <label className="label">PASSWORD</label>
                        <input className="input" type="password" name="password" value={values.password} onChange={handleChange}/>
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div>
                        <button className="submit" onClick={handleSubmit}>SIGN UP</button>
                    </div>
                </form> 
            </div>
            
        </div>
    );
};

export default SignUpForm;
