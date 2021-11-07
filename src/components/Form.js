import React,{useState} from 'react';
import SignUpForm from "./SignUpForm";
import Success from './Success';

const Form = () => {
    const [submitted, setSubmitted] = useState(false);
    const submitForm = () => {
        setSubmitted(true);
    };
    return (
    <div>
        {!submitted ? <SignUpForm submitForm={submitForm}/> : <Success/>}
    </div>
    );
};

export default Form;
