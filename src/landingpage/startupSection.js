import { Container, Divider, Typography, Box, Stack,Button } from "@mui/material";
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
const StartupSection = () =>{
    return (
        <Box sx={{backgroundColor:"#fff", marginTop:2}}>
            <Container maxWidth="lg" sx={{paddingTop:7}}>
                <Divider><Typography variant="h4">Stephanie McKinney built River VC to support start ups</Typography></Divider>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Typography variant="h5">Planing Futures</Typography>
                        <Typography variant="h6" paddingTop={5}>With many connections and experience, we are ready to help advise and financially back prospective companies. We are currently seeking companies founded by passionate and inventive teams that see the future of the world through different perspectives, knowing their customers, and fit in todays market.</Typography>
                    </Box>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Typography variant="h5">A Proven Approach</Typography>
                        <Typography variant="h6" paddingTop={5}>We are well-versed in a variety of different divisions such as space technology, medical advancements, and software. Tell us about your business and goals for the future. Helping startups with financial and investment planning with River VC. </Typography>
                    </Box>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Typography variant="h5">Why Us?</Typography>
                        <Typography variant="h6" paddingTop={5}>Our team is comprised of people who are determined to help build a better future. You can count on unbiased recommendations and impartial guidance. We have connections and experience that will aid you in your path. </Typography>
                    </Box>
                </Stack>
                <Divider><Typography variant="h4">Portfolio</Typography></Divider>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
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
                        <ColorButton>FIND OUR MORE</ColorButton>
                    </Box>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Typography variant="h5">Cytonics</Typography>
                        <Box component="img" sx={{paddingTop: 2}} src="/static/img/CytonicsPitchDeck_F_P01__32.jpg"/>
                        <Typography variant="h6" paddingTop={5}>Our team is comprised of people who are determined to help build a better future. You can count on unbiased recommendations and impartial guidance. We have connections and experience that will aid you in your path. </Typography>
                        <ColorButton>FIND OUR MORE</ColorButton>
                    </Box>
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Typography variant="h5">Virtuix</Typography>
                        <Box component="img" sx={{paddingTop: 2}} src="/static/img/maxresdefault.jpeg"/>
                        <Typography variant="h6" paddingTop={5}>Backed by Mark Cuban and other notable investors, the Omni is an omnidirectional treadmill that lets players walk and run in 360 degrees inside video games and other virtual worlds.</Typography>
                        <ColorButton>FIND OUR MORE</ColorButton>
                    </Box>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Typography variant="h5">Digitzs</Typography>
                        <Box component="img" sx={{paddingTop: 2}} src="/static/img/Screen Shot 2021-06-01 at 11.42.25 AM.png"/>
                        <Typography variant="h6" paddingTop={5}>
                        It is with great confidence and pride that we can say we’ve accomplished our mission to “make payments painless for platforms”.  In all these years, we have yet to see a more elegant, simple, risk-free and profitable way to build payments into your merchant software platform.
                        </Typography>
                        <ColorButton>FIND OUR MORE</ColorButton>
                    </Box>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Typography variant="h5">The Artemis Fund</Typography>
                        <Box component="img" sx={{paddingTop: 2}} src="/static/img/th.jpg"/>
                        <Typography variant="h6" paddingTop={5}>The Artemis Fund is helping back women founders change the statistics and support their tech-enabled company. 
                        "Our mission is to give female founders the access to capital that they deserve. We take the lead in most of our deals and go to work to help our founders complete their existing and future rounds with our network of trusted co-investors."</Typography>
                        <ColorButton>FIND OUR MORE</ColorButton>
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
                <Divider><Typography variant="h4">OUR TEAM</Typography></Divider>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Typography variant="h5">CEO</Typography>
                        <Typography variant="h6" paddingTop={5}>She created River VC LLC to help invest in start-up companies. As a woman-owned VC firm, she has a fresh unique take on today's market. She is passionate about changing the future for the better and knows that there are founders whose views are the same. Her hobbies are painting, Spartan races, and spending time with her family. </Typography>
                    </Box>
                    <Box sx={{textAlign:'center', padding:4}}>
                        <Typography variant="h5">Advisors</Typography>
                        <Typography variant="h6" paddingTop={5}>Edward DeVries is one of many advisors in River but stands apart. With his insight into many different fields including but not limited to medical, technology, fintech, and space tech. He is a valuable advisor to River. </Typography>
                    </Box>
                </Stack>
                <Divider><Typography variant="h4">SOCIAL MEDIA</Typography></Divider>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={5} padding={5}>
                    <Box component="img" sx={{paddingTop: 2}} src="/static/img/instagram.png"/>
                    <Box component="img" sx={{paddingTop: 2}} src="/static/img/linkdin.png"/>
                    <Box component="img" sx={{paddingTop: 2}} src="/static/img/facebook.png"/>
                    <Box component="img" sx={{paddingTop: 2}} src="/static/img/youtubu.png"/>
                </Stack>
                <Divider><Typography variant="h4">CONTACT US</Typography></Divider>
                <Stack direction="column" justifyContent="center" alignItems="center" spacing={5} padding={5}>
                    <Typography variant="h5">Looking forward to collaborating with you on your company's future and how River can be a part of it! </Typography>
                    <Typography variant="h5">River VC LLC</Typography>
                    <Typography variant="h5">Hours</Typography>
                    <Typography variant="h5">Monday - Friday: 9am - 5pm EST</Typography>
                    <Typography variant="h5">Saturday - Sunday: By appointment</Typography>
                </Stack>

            </Container>
        </Box>
    )
}

export default StartupSection