import React, { useState } from "react";
import { FormControl, InputLabel, Input, TextField, Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import Box from '@mui/material/Box';
import { textAlign } from "@mui/system";

const WritePosting = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <Box component="form" onSubmit={''} sx={{ mt: 3, display:"flex", justifyContent:"center" }}>
            <FormControl sx={{
                mt: "50px",
                width: "90%",
            }}>
                <TextField
                    label="제목"
                    rows={10}
                    fullWidth
                    required
                    placeholder="제목을 입력해주세요." />
                <TextField
                    label="내용"
                    multiline
                    rows={10}
                    fullWidth
                    required
                    placeholder="내용을 입력해주세요."
                    sx={{
                        mt: "10px"
                    }} />
                <Button
                    type="submit"
                    variant="contained"
                    endIcon={<CreateIcon />}
                    sx={{
                        mt: "10px"
                    }}>
                    저장
                </Button>
            </FormControl>
        </Box>
    )
}

export default WritePosting;