import React from 'react';
import CustomerRegisterFunctional from './CustomerRegisterFunctional';
const validation =(values)=>
{
    let errors={};

        if(!values.emailid)
        {
            errors.emailid="Email is empty."
        }
        else if(!/^[A-Za-z0-9._-]{5,}@[A-Za-z0-9.]{5,12}\.[a-z]{3}$/.test(values.emailid))
        {
            errors.emailid="valid Email is required."
        }
        if(!values.pwd)
        {
            errors.pwd="Password is empty."
        }
        else if(!/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(values.pwd))
        {
            errors.pwd="valid password is contain symbol,digit and special character required."
        }
        if(!values.fname)
        {
            errors.fname="First name is empty."
        }
        else if(!/^[A-Z]+[a-zA-Z]*$/.test(values.fname))
        {
            errors.fname="valid first name is required."
        }

        if(!values.lname)
        {
            errors.lname="Last name is empty."
        }
        else if(!/^[A-Z]+[a-zA-Z]*$/.test(values.lname))
        {
            errors.lname="valid Last name is required."
        }
        if(!values.sec_ans)
        {
            errors.sec_ans="Answer is empty."
        }
        else if(!/^[a-zA-Z]*$/.test(values.sec_ans))
        {
            errors.answer="answer is required."
        }
        if(!values.contactno)
        {
            errors.contactno="Contact Number is empty."
        }
        else if(!/^[0-9]{10}/.test(values.contactno))
        {
            errors.contactno="Contact number is required."
        }

        if(!values.address)
        {
            errors.address="Address field is empty."
        }
        else if(!/^[a-zA-Z0-9\s,.'-]{3,}$/.test(values.address))
        {
            errors.address="Address is required."
        }


    return errors;
     
};

export default validation