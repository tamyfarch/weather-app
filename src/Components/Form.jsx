import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Form = ({city}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant ='h2' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {city}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {city}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Form