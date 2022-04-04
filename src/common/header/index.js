import * as React from 'react';
import { AppBar, Box, Link, Container, Badge  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function ButtonAppBar() {
    const navigate = useNavigate();

    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor: "#ddd"}}>
            <Box sx = {{textAlign:'center', padding: 1, color:"#000", boxShadow:5, fontFamily:'Raleway',fontSize:20}}>
            Supporting, inspiring, and investing in women
            </Box>
      </AppBar>
      <AppBar position="static" sx={{backgroundColor:"#fff", borderBottomLeftRadius:50, borderBottomRightRadius:50, padding:2, opacity:'85%'}}>
        <Container maxWidth="xl">
            <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            >
                <Link onClick={() => {navigate('/');}}>
                    <Box component="img" sx={{height: '88px',width: '128px',paddingLeft: '29px',}} src="/static/img/logo.png"/>
                </Link>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                    <Link component="button" variant="body3" underline='none' onClick={() => {navigate('/Home');}} color={'black'} sx={{ padding:1, border:1, borderRadius:10}}>HOME</Link>
                    <Link component="button" variant="body3" underline='none' onClick={() => {navigate('/About');}} color={'black'} sx={{ padding:1, border:1, borderRadius:10}}>ABOUT</Link>
                    <Link component="button" variant="body3" underline='none' onClick={() => {navigate('/Shop');}} color={'black'} sx={{ padding:1, border:1, borderRadius:10}}>SHOP</Link>
                    <Link component="button" variant="body3" underline='none' onClick={() => {navigate('/Porfolio');}} color={'black'} sx={{ padding:1, border:1, borderRadius:10}}>POTFOLIO</Link>
                    <Link underline='none' href='/Login' color={'black'} sx={{ padding:1, border:1, borderRadius:10}} target="_blank">LOGIN</Link>
                    <Badge badgeContent={4} color="success">
                        <ShoppingCartCheckoutIcon sx={{color:"black", fontSize:30}}></ShoppingCartCheckoutIcon>
                    </Badge>
                </Stack>
            </Stack>
        </Container>
      </AppBar>
    </Box>
  );
}