import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email,setEmail] = useState('');
    const [success,setSuccess] =useState(false);

    const handleOnBlur =e=>{
        setEmail(e.target.value);
    }

    const handleAdminSubmit =e =>{
        e.preventDefault();
        const user={email};
        fetch('http://localhost:5000/user/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount)
            console.log(data);
            setSuccess(true)
        })
        
        e.target.reset();

    }

    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField 
            sx={{width:'50%'}}
            id="standard-basic" 
            onBlur={handleOnBlur}
            label="email" 
            type="email"
            variant="standard" />
            <Button type="submit" variant="contained">make admin</Button>
            </form>
            {
                        success && <Alert severity="success">Successfully admin made</Alert>
                    }
        </div>
    );
};

export default MakeAdmin;