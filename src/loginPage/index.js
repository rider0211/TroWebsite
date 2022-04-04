import { Box, Button, Link, Stack, Container, Typography,FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormControlLabel, Checkbox} from "@mui/material";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React from "react";
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate();
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
      });
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const handleEmailChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      const ColorButton = styled(Button)(({ theme }) => ({
        backgroundColor: '#918e8e',
        fontSize: '20px',
        paddingLeft: '10px',
        paddingRight: '10px',
        color:'white',
        '&:hover': {
            color: '#000',
            backgroundColor: '#fafafa',
        },
        marginRight:'10px',
        marginLeft:'20px',
        marginTop:'20px',
        textTransform:'none',
        fontWeight:'normal'
        }));
    return(
            <Stack direnction={'column'} justifyContent={'space-betweeb'} height="100%">
                <Link onClick={() => {navigate('/');}}>
                    <Box component="img" sx={{height: '88px',width: '128px',marginLeft: '100px',position:'fixed'}} src="/static/img/logo.png"/>
                </Link>
                <Stack direction={{xs:'column', md:"row"}} justifyContent={"space-between"} height="100%" alignItems="center" spacing={0} padding={0}>
                    <Container maxWidth="lg" sx={{backgroundColor:"#ddd",height:'100%', paddingTop:30, paddingBottom:10}}>
                        <Box width="100%">
                            <Stack direction="column" justifyContent={"space-between"} width="100%" alignItems="center" spacing={5}>
                                <Typography variant="h4">EXISTING MEMBERS</Typography>

                                <FormControl sx={{ m: 1, width: '50ch'}} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-emailaddress">Email Address</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-emailaddress"
                                        value={values.email}
                                        onChange={handleEmailChange('email')}
                                        label="EmailAddress"
                                    />
                                </FormControl>
                                <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                                <FormControlLabel
                                value="end"
                                control={<Checkbox />}
                                label="Remember Me"
                                labelPlacement="end"
                                />
                                <ColorButton>LOG IN</ColorButton>
                                <Link variant="body3" underline='none' onClick={() => {navigate('/Login');}} target="_blank">Forgot Your Password</Link>
                            </Stack>
                        </Box>
                    </Container>
                    <Container maxWidth="lg" sx={{backgroundColor:"#fff",height:'100%', paddingTop:30, paddingBottom:10}}>
                        <Stack direction="column" justifyContent={"space-between"} alignItems="center" spacing={5}>
                            <Typography variant="h4">FUTURE MEMBERS</Typography>
                            <Typography variant="h4" textAlign={'center'}>Are you ready to invest in the most compelling space startups</Typography>
                            <ColorButton>APPLY NOW</ColorButton>
                        </Stack>
                    </Container>
                </Stack>
            </Stack>
    )
}

export default LoginPage