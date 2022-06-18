import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
    const[profilePic, setProfilePic]=useState('https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4arX/image/rZ1xSXKCJ4cd-IExOYahRWdrqoo.jpg');
    const[userId, setUserId]=useState('darren_gwon');
    const[nickname, setNickname]=useState('Darren');
    const[intro, setIntro]=useState(`안녕하세요. Darren's Devlog에 오신 것을 환영합니다.
                                    ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ`)
  return (
    <Card sx={{ maxWidth: 380 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          min-height="300"
          image={profilePic}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {
            `${nickname}(${userId})`
            }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {intro}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}