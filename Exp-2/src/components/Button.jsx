import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';
import ToggleButton from '@mui/material/ToggleButton';

export default function ButtonBasic() {
  return (
    <>
    <Button size="small" variant='outlined'>Small</Button>
    <br/>
    <Button size="medium" variant='contained'>Medium</Button>
    <br/>
    <Button size="large" variant='text'>Large</Button>
    <br/>
    <TextField label="Small" size="small" variant="outlined"/>
    <br/>
    <Rating name="size-medium" defaultValue={2} size="medium" />
    <br/>
    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    <br/>
    <ToggleButton value="web">Web</ToggleButton>
    <br/>
    </>
  )
}