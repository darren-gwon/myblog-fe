import { useRef } from 'react';
import { FormControl, InputLabel, Input, TextField, Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import Box from '@mui/material/Box';
import axios from "axios";
import { useForm } from "react-hook-form";
import {Select, MenuItem} from '@mui/material'

const WritePosting = () => {
    //ract-hook-form
    //register과 handleSubmit은 함수이다.
    //다른걸로 이름 변경이 안된다.
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        axios.post("http://localhost:9010/posting/write", data).then(res => {
            console.log(res);
        })
    }
    return (
        <Box component="form" sx={{ mt: 3, display: "flex", justifyContent: "center" }}
            onSubmit={handleSubmit(onSubmit)}>
            <FormControl sx={{
                width: "90%",
            }}>
                <InputLabel id="demo-simple-select-label">카테고리</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="카테고리"
                    {...register("category_no")}
                    defaultValue={1}>
                    <MenuItem value={1}>공지사항</MenuItem>
                    <MenuItem value={2}>자유글</MenuItem>
                    <MenuItem value={3}>소개글</MenuItem>
                </Select>
                <TextField
                    id="title"
                    label="제목"
                    rows={10}
                    fullWidth
                    required
                    placeholder="제목을 입력해주세요."
                    sx={{mt: "15px"}}
                    {...register("title")}/>
                <TextField
                    id="content"
                    label="내용"
                    multiline
                    rows={10}
                    fullWidth
                    required
                    placeholder="내용을 입력해주세요."
                    sx={{mt: "15px"}}
                    {...register("content")}/>
                <Button
                    type="submit"
                    variant="contained"
                    endIcon={<CreateIcon/>}
                    sx={{mt: "15px"}}>
                    저장
                </Button>
            </FormControl>
        </Box>
    )
}

export default WritePosting;