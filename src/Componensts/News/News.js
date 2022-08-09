import { AppBar, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import DropDown from './DropDown'

export default function News() {
  return (
    <Box>
        <AppBar>
            <Toolbar sx={{display : "flex", justifyContent : "space-between"}}>
                <Typography variant="h6" color="inherit">
                    News
                </Typography>
                <DropDown/>
            </Toolbar>
        </AppBar>
    </Box>
  )
}
