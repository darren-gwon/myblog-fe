import React from "react";
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const WritePosting=()=>{
    return (
        <div>
            <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" name="user_id" />
            </FormControl>
        </div>
    )
}

export default WritePosting;