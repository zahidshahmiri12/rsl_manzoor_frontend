import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "../../../src/styles.css"
import { Box } from '@mui/system';
export default function DropDown() {
    const [data, setData] = React.useState('');

    const handleChange = (event) => {
        setData(event.target.value);
    };

    return (
        <Box sx={{fontFamily : 'Poppins', fontWeight : "500",}}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel >Location</InputLabel>
                <Select
                    labelId="demo-select-small"
                    // id="demo-select-small"
                    value={data}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Pakistan</MenuItem>
                    <MenuItem value={20}>India</MenuItem>
                    <MenuItem value={30}>Japan</MenuItem>
                    <MenuItem value={40}>Toyko</MenuItem>
                    <MenuItem value={50}>Arab</MenuItem>
                    <MenuItem value={60}>Iraq</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
