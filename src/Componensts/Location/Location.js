import React, { useState, useEffect } from 'react';
import { Add } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import api from '../../Api/Posts';
import location from '../../modules/location/index';

export default function Location() {
  //Location Dialog for Adding a location
  const [locationData, setLocationData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    getAllLocations();
  }, []);

  // Fetch location data from database
  // const [locationData, setLocationData] = useState([]);
  // useEffect(()=>{
  //     const fetchlocationData = async () =>{
  //         try{
  //             const response = await api.get('/getLocation');
  //             setLocationData(response.data);
  //         } catch(err) {
  //             if(err.response){
  //             console.log(err.response.data)
  //             console.log(err.response.status)
  //             console.log(err.response.headers)
  //             } else{
  //                 console.log(`Error : $(err.massage)`)
  //             }
  //         }
  //     }
  //     fetchlocationData();
  // },[])

  const getAllLocations = () => {
    location.getAllLocations(response => {
      if (response.status === 'success') {
        setLocationData(response.data);
      } else {
        setLocationData([]);
      }
    });
  };
  // Post Location in database
  const [data, setData] = useState();
  const handleCloseSubmit = async e => {
    e.preventDefault();
    const newLocations = { locationName: data };
    // Todo replace with axios
    try {
      fetch('http://localhost:8081/addLocation', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLocations),
      }).then(result => {
        console.log(result);
      });
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error : $(err.massage)`);
      }
    }

    setOpen(false);
  };

  // Delete Location in database
  const handleDelete = async (id, e) => {
    e.preventDefault();
    await api.delete(`/deleteLocation/${id}`).then(res => {
      console.log('Location Deleted Successfully', res);
    });
  };

  // Edit location in Database
  const [openEdit, setOpenEdit] = useState(false);

  const handleEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  // const [locationName, setLocationName] = useState("");

  // const handleUpdate = (id,e) => {
  //     e.preventDefault();
  //     axios.put(`http://localhost:8081/updateLocation/${id}`, {

  //     })
  //     .then(response => {
  //         setLocationName(response.locationName);
  //     })
  //     handleCloseEdit();
  // }

  return (
    // Location Container
    <>
      <Box>
        <AppBar sx={{ position: 'sticky' }} color='primary'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h6'>Locations</Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          maxHeight: '72vh',
          overflow: 'auto',
          margin: '20px',
          gap: '20px',
        }}
      >
        <List>
          {locationData.map(items => {
            return (
              <Card
                elevation={6}
                key={items.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxWidth: '400px',
                  margin: 'auto',
                  padding: '20px',
                  gap: '20px',
                  marginTop: '20px',
                }}
              >
                <CardContent>
                  <Typography variant='inherit' color='initial'>
                    {items.locationName}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={e => handleEdit(items.id, e)}
                    varirnt='outlined'
                    size='small'
                  >
                    <EditIcon color='action' />
                  </Button>
                  <Button
                    onClick={e => handleDelete(items.id, e)}
                    varirnt='outlined'
                    size='small'
                  >
                    <DeleteIcon color='warning' fontSize='small' />
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </List>
      </Box>

      {/* Add Location Button */}
      <Card
        elevation={10}
        sx={{
          maxWidth: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
        }}
      >
        <CardActions>
          <Button onClick={handleClickOpen}>
            <Add fontSize='large' />
          </Button>
        </CardActions>
      </Card>

      {/* Add location Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Location</DialogTitle>
        <DialogContent>
          <TextField
            onChange={e => {
              setData(e.target.value);
            }}
            value={data}
            autoFocus
            margin='dense'
            id='locationName'
            label='Location Name'
            type='text'
            fullWidth
            variant='standard'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCloseSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>

      {/* Update location Dialog */}
      <Dialog open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle>Update Location</DialogTitle>
        <DialogContent>
          <TextField
            // onChange={handleChange}
            value="Sorry You Can't Edit It"
            autoFocus
            margin='dense'
            id='locationName'
            label='New Location Name'
            type='text'
            fullWidth
            variant='standard'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button>Update</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
