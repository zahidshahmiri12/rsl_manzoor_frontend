import { Box, Button, Card,  CardContent, Divider, List, Typography, AppBar, Toolbar, Dialog, DialogTitle, DialogContent, TextField, DialogActions, CardActions } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import api from "../../Api/Posts"
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
export default function Category() {

  //Location Dialog for Adding a location
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
      setOpen(true)
  }

  const handleClose = () => {
      setOpen(false)
  }

  // const [news, setNews] = useState([]);
  // const fetchNewsData = async () => {
  //     try {
  //       const response = await api.get('/getNews');
  //       setNews(response.data);
  //     } catch (err) {
  //       if (err.response) {
  //         console.log(err.response.data)
  //         console.log(err.response.status)
  //         console.log(err.response.headers)
  //       } else {
  //         console.log(`Error : $(err.massage)`)
  //       }
  //     }
  //   fetchNewsData();
  // }

  // Get Request for category
  const [categoryData, setCategoryData] = useState([]);
    useEffect(()=>{
        const fetchlocationData = async () =>{
            try{
                const response = await api.get('/getCategory');
                setCategoryData(response.data);
            } catch(err) {
                if(err.response){
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
                } else{
                    console.log(`Error : $(err.massage)`)
                }
            }
        }
        fetchlocationData();
    },[])


  // Post request for category
  const [addCategory,setAddCategory] = useState();
  const handleCloseSubmit = async (e) => {
      e.preventDefault();
      const newCategory = {categoryName : addCategory}
      console.log(newCategory)
      try{
          fetch("http://localhost:8081/addCategory",{
              method :"POST",
              headers :{
                  "Accept" : "application/json",
                  "Content-Type" : "application/json"
              },
              body : JSON.stringify(newCategory)
          }).then((result) => {
              console.log(result);
          })
      } catch(err) {
          if(err.response){
              console.log(err.response.data)
              console.log(err.response.status)
              console.log(err.response.headers)
          } else{
              console.log(`Error : $(err.massage)`)
          }
      }
      
      setOpen(false)
  }

   // Delete Category in database
   const handleDelete = async (id,e) =>{
    e.preventDefault();
    await api.delete(`/deleteCategory/${id}`)
    .then(res=>{
        console.log("Category Deleted Successfully",res);
    })
}

  return (
    <>
      <Box>
        <AppBar sx={{position : "sticky"}} color="primary">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">
              Category
            </Typography>
            <Typography variant="h6" color="inherit">
              <Button color="inherit" onClick={handleClickOpen}>
                <AddCircleRoundedIcon fontSize="large" />
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{
        display: "flex",
      }}>
        <Swiper
          slidesPerView={6}
          breakpoints={{
            356: {
              slidesPerView: 2,
              spaceBetween: 2,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 2,
            },
            978: {
              slidesPerView: 5,
              spaceBetween: 2,
            },
          }}
          loop={false}
          // loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >

          {
            categoryData.map((item) => {
              return (
                <SwiperSlide>
                  <Button>
                    <List>
                      <Card key={item.id} elevation={4} sx={{ display : "flex", justifyContent : "space-between",minWidth : "200px", maxWidth: "250px", margin: 1}}>
                        <CardContent>
                          <Typography sx={{ display: "flex", justifyContent: "center" }} variant="h6" component="div">
                            {item.categoryName}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button color="warning" fontSize="small" onClick={(e) => handleDelete(item.id,e)}>
                            <RemoveCircleOutlineIcon/>
                          </Button>
                        </CardActions>
                      </Card>
                    </List>
                    </Button>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </Box>
      <Divider />
      {/* <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        margin: "10px",
        width: "98vw",
        justifyContent: "center",
        alignUtems: "center"

      }}>
        {
          news.map((items) => {
            return (
              <Card key={items.id} sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_960_720.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {items.locationName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            )
          })
        }
      </Box> */}
       {/* Add location Dialog */}
       <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Category</DialogTitle>
                <DialogContent>
                    <TextField
                        onChange={(e)=>{setAddCategory(e.target.value)}}
                        value={addCategory}
                        autoFocus
                        margin="dense"
                        id="categoryName"
                        label="Category Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleCloseSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
    </>
  )
}
