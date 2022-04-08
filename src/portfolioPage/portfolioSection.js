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


const ProtfolioSection = () =>{
    return (
        <Box sx={{backgroundColor:"#fff", marginTop:2}}>
            <Container maxWidth="lg" sx={{paddingTop:7}}>
                <Divider><Typography variant="h4" id="portfolio">Portfolio</Typography></Divider>
                <Stack direction={{xs:'column', md:"row"}} justifyContent="space-between" alignItems="center" spacing={2}>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Typography variant="h5">Scotch Whisky</Typography>
                        <Box component="img" sx={{paddingTop: 2}} src="/static/img/withky.jpeg"/>
                        <Typography variant="h6" paddingTop={5}>With many connections and experience, we are ready to help advise and financially back prospective companies. We are currently seeking companies founded by passionate and inventive teams that see the future of the world through different perspectives, knowing their customers, and fit in todays market.</Typography>
                    </Box>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Typography variant="h5">GeoToll</Typography>
                        <Box component="img" sx={{paddingTop: 2}} src="/static/img/geololl.png"/>
                        <Typography variant="h6" paddingTop={5}>
                        "GeoToll’s core technology is based on enhanced GPS (“e-GPS”), which equips smartphones with automatic tolling capabilities on all types of toll roads – express lanes, managed lanes, general-purpose lanes, and toll bridges – with over 99% accuracy."
                        </Typography>
                        <ColorButton href="https://www.geotoll.com/" target="_blank">FIND OUR MORE</ColorButton>
                    </Box>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Typography variant="h5">Cytonics</Typography>
                        <Box component="img" sx={{paddingTop: 2}} src="/static/img/CytonicsPitchDeck_F_P01__32.jpg"/>
                        <Typography variant="h6" paddingTop={5}>Our team is comprised of people who are determined to help build a better future. You can count on unbiased recommendations and impartial guidance. We have connections and experience that will aid you in your path. </Typography>
                        <ColorButton href="https://www.cytonics.com/" target="_blank">FIND OUR MORE</ColorButton>
                    </Box>
                </Stack>
                <Stack direction={{xs:'column', md:"row"}} justifyContent="space-between" alignItems="center" spacing={2}>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Typography variant="h5">Virtuix</Typography>
                        <Box component="img" sx={{paddingTop: 2}} src="/static/img/maxresdefault.jpeg"/>
                        <Typography variant="h6" paddingTop={5}>Backed by Mark Cuban and other notable investors, the Omni is an omnidirectional treadmill that lets players walk and run in 360 degrees inside video games and other virtual worlds.</Typography>
                        <ColorButton href="https://digitzs.com/" target="_blank">FIND OUR MORE</ColorButton>
                    </Box>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Typography variant="h5">Digitzs</Typography>
                        <Box component="img" sx={{paddingTop: 2}} src="/static/img/Screen Shot 2021-06-01 at 11.42.25 AM.png"/>
                        <Typography variant="h6" paddingTop={5}>
                        It is with great confidence and pride that we can say we’ve accomplished our mission to “make payments painless for platforms”.  In all these years, we have yet to see a more elegant, simple, risk-free and profitable way to build payments into your merchant software platform.
                        </Typography>
                        <ColorButton href="https://digitzs.com/" target="_blank">FIND OUR MORE</ColorButton>
                    </Box>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Typography variant="h5">The Artemis Fund</Typography>
                        <Box component="img" sx={{paddingTop: 2}} src="/static/img/th.jpg"/>
                        <Typography variant="h6" paddingTop={5}>The Artemis Fund is helping back women founders change the statistics and support their tech-enabled company. 
                        "Our mission is to give female founders the access to capital that they deserve. We take the lead in most of our deals and go to work to help our founders complete their existing and future rounds with our network of trusted co-investors."</Typography>
                        <ColorButton href="https://www.theartemisfund.com" target="_blank">FIND OUR MORE</ColorButton>
                    </Box>
                </Stack>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Typography variant="h5">This could be your company...</Typography>
                        <Box component="img" sx={{paddingTop: 2}} src="/static/img/qt=q_29.jpeg"/>
                        <Typography variant="h6" paddingTop={5}>Want your company to reach its goals? Schedule a meeting with our CEO!</Typography>
                        <ColorButton>FIND OUR MORE</ColorButton>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default ProtfolioSection