import * as React from 'react';
import { AppBar, Box, Link, Container, Badge,Typography, IconButton, Menu, MenuItem,  } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['HOME', 'ABOUT', 'SHOP', 'PORFOLIO', 'LOGIN'];
export default function ButtonAppBar() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = (e,i) => {
      setAnchorElNav(null);
    };
    const handleMenuItemClick = (e,i) => {
      setAnchorElNav(null);
      switch (i) {
        case 0:
            navigate('/Home');
            break;
        case 1:
            navigate('/About');
            break;
        case 2:
            navigate('/Shop');
            break;
        case 3:
            navigate('/Portfolio');
            break;
        case 4:
            window.open('/Login','_blank')
            break;
      }
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor: "#ddd", width:'100%'}}>
            <Box sx = {{textAlign:'center', padding: 1, color:"#000", boxShadow:5, fontFamily:'Raleway',fontSize:20}}>
            Supporting, inspiring, and investing in women
            </Box>
      </AppBar>
      <AppBar position="static" sx={{backgroundColor:"#fff", borderBottomLeftRadius:50, borderBottomRightRadius:50, padding:2, opacity:{xs:'100%',md:'85%'}, width:'100%'}}>
        <Container maxWidth="xl">
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                    <Box sx={{display: { xs: 'flex', md: 'none'} }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        > <MenuIcon /> </IconButton>
                        <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left',}} 
                        keepMounted transformOrigin={{ vertical: 'top',horizontal: 'left',}}
                        open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' }, }}>
                        {pages.map((page,index) => (
                            <MenuItem key={page} onClick={(event) => handleMenuItemClick(event, index)}>
                                <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    <Link onClick={() => {navigate('/');}}>
                        <Box component="img" sx={{height: '88px',width: '128px',ml:{xs:'0px',md:'29px'}}} src="/static/img/logo.png"/>
                    </Link>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} display={{xs:'none', md:'flex'}}>
                        <Link component="button" variant="body3" underline='none' onClick={() => {navigate('/Home');}} color={'black'} sx={{ padding:1, border:1, borderRadius:10}}>HOME</Link>
                        <Link component="button" variant="body3" underline='none' onClick={() => {navigate('/About');}} color={'black'} sx={{ padding:1, border:1, borderRadius:10}}>ABOUT</Link>
                        <Link component="button" variant="body3" underline='none' onClick={() => {navigate('/Shop');}} color={'black'} sx={{ padding:1, border:1, borderRadius:10}}>SHOP</Link>
                        <Link component="button" variant="body3" underline='none' onClick={() => {navigate('/Porfolio');}} color={'black'} sx={{ padding:1, border:1, borderRadius:10}}>POTFOLIO</Link>
                        <Link underline='none' href='/Login' color={'black'} sx={{ padding:1, border:1, borderRadius:10}} target="_blank">LOGIN</Link>
                        <Badge badgeContent={4} color="success">
                            <ShoppingCartCheckoutIcon sx={{color:"black", fontSize:30}}></ShoppingCartCheckoutIcon>
                        </Badge>
                    </Stack>
                    <Box sx={{ display: { xs: 'flex', md: 'none'}, alignItems:"center"}}>
                        <Badge badgeContent={4} color="success">
                            <ShoppingCartCheckoutIcon sx={{color:"black", fontSize:30}}></ShoppingCartCheckoutIcon>
                        </Badge>
                    </Box>
                </Stack>
        </Container>
      </AppBar>
    </Box>
  );
}