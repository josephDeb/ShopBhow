import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const Ratings = () => {
    const [value, setValue] = React.useState(2);
  return (
<>

    <div className='w-full flex items-center gap-2'>
    <h1>Product rate</h1>
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
    <h4>{value}</h4>
    </div>

</>
  )
}

export default Ratings