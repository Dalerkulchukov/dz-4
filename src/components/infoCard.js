import React from 'react';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const InfoCard = () => {
  const location = useLocation();
  const item = location?.state?.item;

  return (
  
    <Box sx={{
      display: 'flex',
      width: '100vw',
      backgroundColor: 'aquamarine',
      justifyContent: 'space-between',
    }}>
      <Box sx={{ 
        display: 'flex',
        
        width: '300px',
        height: '400px',
        backgroundColor: 'gray',
        border: '1px solid orange',
        '& img': {width: '100%', height: '100%'}
        }}>
        <img src={item?.stand_images?.[0]} alt="" />
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
      }}>
        <Typography sx={{ textAlign: 'center', fontSize: '32px', color: 'darkred' }}>{item?.stand}</Typography>
        <Typography sx={{ textAlign: 'center', fontSize: '32px', color: 'red' }}>{item?.type?.[0]}</Typography>
        <Typography sx={{ textAlign: 'center', fontSize: '32px' }}>{item?.type?.[1]}</Typography>
      </Box>
      <Box sx={{ 
        display: 'flex',
        
        width: '300px',
        height: '400px',
        backgroundColor: 'gray',
        border: '1px solid orange',
        '& img': {width: '100%', height: '100%'}
        }}>
        <img src={item?.user_images?.[0]} alt=""></img>
      </Box>
    </Box>
  );
};

export default InfoCard;