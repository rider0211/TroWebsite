import React from "react";
import {Box, Container, Typography, Link} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PageBackground = () =>{
    const navigate = useNavigate();
    return(
        <Box>
            <Box component="img" src="/static/img/blob_back.png" sx={{width:"100%", position:'fixed',display:{xs:'none', md:'block'}, zIndex:-1, marginTop:-45}}></Box>
            <Container maxWidth="sm" sx={{paddingTop:{xs:'20px',md:"300px"}, opacity:"90%", textAlign:'-webkit-center'}}>
                <Box sx={{boxShadow:25, borderRadius:100, background:"white",paddingLeft:2, paddingRight:2, paddingTop:12, paddingBottom:12, width:"fit-content", textAlign:'center'}}> 
                    <Typography variant="h4">Helping founders plan</Typography> 
                    <Typography variant="h4" align="center">a bright future!</Typography>
                    <Link component="button" variant="body3" underline='none' onClick={() => {navigate('/Home');}} color={'black'} sx={{marginTop:2,padding:1, border:1, borderRadius:10}}>Contact</Link>
                </Box>
            </Container>
        </Box>
    )
}
export default PageBackground