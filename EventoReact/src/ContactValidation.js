import React from 'react';
import CustomerRegisterFunctional from './CustomerRegisterFunctional';

const ContactValidation =(values)=>
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

        if(!values.fullname)
        {
            errors.fullname="FullName is empty."
        }
        else if(!/^[a-zA-Z0-9\s,.'-]{3,}$/.test(values.fullname))
        {
            errors.fullname="valid FullName is required."
        }
        if(!values.businessName)
        {
            errors.businessName="Business Name field is empty."
        }
        else if(!/^[a-zA-Z0-9\s,.'-]{3,}$/.test(values.businessName))
        {
            errors.businessName="Business Name is required."
        }

        if(!values.address)
        {
            errors.address="Address field is empty."
        }
        else if(!/^[a-zA-Z0-9\s,.'-]{3,}$/.test(values.address))
        {
            errors.address="Address is required."
        }

        if(!values.contactno)
        {
            errors.contactno="Contact Number is empty."
        }
        else if(!/^[0-9]{10}/.test(values.contactno))
        {
            errors.contactno="Contact number is required."
        }

        return errors;
}

export default ContactValidation