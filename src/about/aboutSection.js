import { Container, Divider,Link, Typography, Box, Stack,Button } from "@mui/material";
import React from "react";
import { styled } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
const ColorButton = styled(Button)(({ theme }) => ({
    borderRadius:'40px',
    backgroundColor: 'rgba(77, 89, 149, 0.06)',
    fontSize: '13px',
    paddingLeft: '10px',
    paddingRight: '10px',
    color:blue[700],
    '&:hover': {
        color: grey[50],
        backgroundColor: blue[100],
    },
    marginRight:'10px',
    marginLeft:'20px',
    marginTop:'20px',
    textTransform:'none',
    fontWeight:'normal'
    }));


const AboutSection = () =>{
    return (
        <Box sx={{backgroundColor:"#fff", marginTop:2}}>
            <Container maxWidth="lg" sx={{paddingTop:7}}>
                <Divider><Typography variant="h4" id="portfolio">About Us</Typography></Divider>
                <Stack direction={{xs:'column', md:"row"}} justifyContent="space-between" alignItems="center" spacing={2}>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Box component="img" sx={{paddingTop: 2}} src="/static/img/mcMickey.jpg"/>
                        <Typography variant="h5" paddingTop={2}>Why We support female founders and investors</Typography>
                        <Typography variant="h6" paddingTop={5}>We created River VC to invest in women entrepreneurs to help fund their business and to aid investors with their money.</Typography>
                    </Box>
                </Stack>
                <Stack direction={{xs:'column', md:"row"}} justifyContent="space-between" alignItems="center" spacing={2}>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Box component="img" sx={{paddingTop: 2}} src="/static/img/navigatinWater.png"/>
                        <Typography variant="h5"paddingTop={2}>Learn from our CEO on her Podcast "Navigating the waters"</Typography>
                        <Typography variant="h6" paddingTop={5}>stay tuned to "Navigating the Waters" and learn not only how to represent yourself and your business as a founder but also how to learn how to invest your money in startups.</Typography>
                        <ColorButton href="https://open.spotify.com/show/6qpCwW2s0eLkAljsTdAa9C" target="_blank">LEARN MORE</ColorButton>
                    </Box>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Box component="img" sx={{paddingTop: 2}} src="/static/img/zoomvideo.png"/>
                        <Typography variant="h5"paddingTop={2}>Articles on trending topics in the investing world</Typography>
                        <Typography variant="h6" paddingTop={5}>Learning the fundaments can be challenging in itself and even more so when they change! Stay connected and informed through our weekly article.</Typography>
                        <ColorButton href="https://www.linkedin.com/in/stephanie-mckinney/" target="_blank">LEARN MORE</ColorButton>
                    </Box>
                </Stack>
                <Divider><Typography variant="h4" id="portfolio">Working together</Typography></Divider>
                <Typography variant="h5" textAlign={'center'} paddingTop={2}>Become apart of River VC</Typography>
                <Stack direction={{xs:'column', md:"row"}} justifyContent="space-between" alignItems="center" spacing={2}>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Box component="img" sx={{paddingTop: 2, width:320, height:240}} src="/static/img/palm.jpg"/>
                        <Typography variant="h5"paddingTop={2}>Entrepreneur</Typography>
                        <Typography variant="h6" paddingTop={5}>If you are founder looking for insight, help, or funding you are in the right place! Here at River Vc we provide you an inclusive environment to express your ideas and  startup . We have a pool of people who have years of experience, knowledge, ad network to help your company succeed.</Typography>
                    </Box>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Box component="img" sx={{paddingTop: 2, width:320, height:240}} src="/static/img/calculator.jpeg"/>
                        <Typography variant="h5"paddingTop={2}>Investor</Typography>
                        <Typography variant="h6" paddingTop={5}>
                        Are you looking to start making your money work for you? Are you passionate about helping others? Have the urning to learn more about investing? Join River VC as we guide you through the path of investing in start ups.
                        </Typography>
                    </Box>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Box component="img" sx={{paddingTop: 2, width:320, height:240}} src="/static/img/pointer.jpg"/>
                        <Typography variant="h5"paddingTop={2}>Partner</Typography>
                        <Typography variant="h6" paddingTop={5}>We are always looking to partner with those whose values aline with ours and are looking to make a positive impact. You maybe an individual, a start up, small business, or corporate entity. We provide numerous partner opportunities to excel at our common goal of propelling female founders and lead females investors to success.</Typography>
                    </Box>
                </Stack>
                <Divider><Typography variant="h4">SOCIAL MEDIA</Typography></Divider>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={5} padding={5}>
                    <Link href="https://www.instagram.com/rivervcllc" target={'_blank'}><Box component="img" sx={{paddingTop: 2}} src="/static/img/instagram.png"/></Link>
                    <Link href="https://www.linkedin.com/in/stephanie-mckinney" target={'_blank'}><Box component="img" sx={{paddingTop: 2}} src="/static/img/linkdin.png"/></Link>
                    <Link href="https://www.twitter.com/river_vc" target={'_blank'}><Box component="img" sx={{paddingTop: 2}} src="/static/img/facebook.png"/></Link>
                    <Link href="https://www.youtube.com/channel/UCg2PXDuS5PGS8M2bweNLICA" target={'_blank'}><Box component="img" sx={{paddingTop: 2}} src="/static/img/youtubu.png"/></Link>
                </Stack>
            </Container>
        </Box>
    )
}

export default AboutSection