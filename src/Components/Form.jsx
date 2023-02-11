// import React from 'react'
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const Form = ({city}) => {
//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography variant ='h2' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           {title}
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//             {city}
//         </Typography>
//       </CardContent>
//     </Card>
//   )
// }

// export default Form
import { TextField } from '@mui/material';
import React from 'react';

const Form = ({ handleOnChange, value }) => {
    return (
        <form  onSubmit={e => handleOnChange(e)}>
            <button type="submit">Buscar</button>
            <TextField name="city"  value={value} label="Outlined" variant="outlined" />
        </form>
    )
}
export default Form
