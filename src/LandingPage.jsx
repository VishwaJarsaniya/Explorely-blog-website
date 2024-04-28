import React, { useState } from "react";
import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import Nav from "./Nav";
import images from "./images.json";
import finance from "./pics/finance.jpg";
import travel from "./pics/travel.jpg";
import laptop from "./pics/laptop.jpg";
import pic1 from "./pics/pic1.png";
import pic2 from "./pics/pic2.png";
import pic3 from "./pics/pic3.png";
import pic4 from "./pics/pic4.png";
import pic5 from "./pics/pic5.png";
import pic6 from "./pics/pic6.png";
import pic7 from "./pics/pic7.png";
import pic8 from "./pics/pic8.png";
import pic13 from "./pics/pic13.png";
import pic14 from "./pics/pic14.png";
import pic15 from "./pics/pic15.png";
import Footer from "./Footer";
import BlogItems from "./BlogItems/Blogitems";


function LandingPage() {

    const [ email, setEmail ] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
      }

    return (
        <div style={{ minHeight: '600px', overflowY: 'auto', height: 'auto', backgroundColor: '#f9f7f6' }}>
            <div style={{ marginBottom: '50px' }}>
                <Nav />
            </div>
            <div style={{display:'flex'}}>
                <div>
                    <Typography style={{ fontSize: '50px', fontWeight: 500, textAlign: 'left', marginLeft: '65px', marginTop: '20px',marginRight:'90px' }}>Explore the best in <br /> finance, lifestyle, sports, <br />technology and travel <br /> with our engaging articles.</Typography>
                </div>
                

                <div>
                    <div style={{ display: 'flex', flexDirection: 'row', transform: 'rotate(5deg)', width: 'auto', marginRight: '50px', overflow: 'hidden' }}>
                        <div>
                            <img src={laptop} style={{ width: '300px', height: '420px', marginRight: '10px', borderRadius: '10px' }} alt="Laptop" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <img src={finance} style={{ width: '300px', height: '205px', marginBottom: '10px', borderRadius: '10px' }} alt="Finance" />
                            <img src={travel} style={{ width: '300px', height: '205px', borderRadius: '10px' }} alt="Travel" />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'left', marginLeft: '60px', marginTop: '30px' }}>
                <Button style={{ marginRight: '20px',backgroundColor:'#f4eae4',padding:'9px' }}><Typography style={{ textTransform: 'none', fontSize: '17px', color:'#000', fontWeight:500}}>Featured</Typography></Button>
                <Button style={{ marginRight: '20px' }}><Typography style={{ textTransform: 'none', fontSize: '17px', color:'#000', fontWeight:500 }}>Lifestyle</Typography></Button>
                <Button style={{ marginRight: '20px' }}><Typography style={{ textTransform: 'none', fontSize: '17px' , color:'#000', fontWeight:500}}>Finance</Typography></Button>
                <Button style={{ marginRight: '20px' }}><Typography style={{ textTransform: 'none', fontSize: '17px' , color:'#000', fontWeight:500}}>Sports</Typography></Button>
                <Button style={{ marginRight: '20px' }}><Typography style={{ textTransform: 'none', fontSize: '17px', color:'#000', fontWeight:500 }}>Travel</Typography></Button>
            </div>
            <hr />

            
            <div style={{ display:'flex',padding: '20px', marginTop: '20px',marginLeft:'30px',marginRight:'30px' }}>
                
                    <div>
                    <CardContent style={{cursor:'pointer'}}>
                        <img src={pic1} style={{ width: '500px', height: '310px', borderRadius: '10px' }} />
                        <Typography style={{fontWeight:500,marginTop:'5px'}}>The Intersection of Technology and Design<br /> How Tech is Transforming The Design World </Typography>
                     </CardContent>
                    </div>

                    <div>
                    <CardContent  style={{marginLeft:'7px',marginRight:'5px',cursor:'pointer'}}>
                        <img src={pic2} style={{ width: '252px', height: '310px', borderRadius: '10px' }} />
                        <Typography style={{fontWeight:500,marginTop:'5px'}}>The Importance Of Emotional Intelligence in the Workspace</Typography>
                    </CardContent>
                    </div>

                    <div>
                    <CardContent  style={{marginRight:'12px',cursor:'pointer'}}>
                        <img src={pic3} style={{ width: '252px', height: '310px', borderRadius: '10px' }} />
                        <Typography style={{fontWeight:500,marginTop:'5px'}}>Mange Money: Strategies for Budgeting and Saving</Typography>
                    </CardContent>
                    </div>

                    <div>
                    <CardContent style={{cursor:'pointer'}}>
                        <img src={pic8} style={{ width: '250px', height: '310px', borderRadius: '10px' }} />
                        <Typography style={{fontWeight:500,marginTop:'5px'}}>Player Returns from Injury to Lead Team to Victory</Typography>
                    </CardContent>
                    </div>
             
            </div>

            <div style={{ display:'flex',padding: '20px', marginTop: '20px',marginLeft:'30px',marginRight:'30px' }}>
                
                    <div>
                    <CardContent style={{cursor:'pointer'}}>
                        <img src={pic4} style={{ width: '250px', height: '310px', borderRadius: '10px' }} />
                        <Typography style={{fontWeight:500,marginTop:'5px'}}>Nail Your Job Interview: <br />Tips and Tricks for Success</Typography>
                    </CardContent>
                    </div>

                    <div>
                    <CardContent  style={{marginLeft:'7px',marginRight:'5px',cursor:'pointer'}}>
                        <img src={pic7} style={{ width: '252px', height: '310px', borderRadius: '10px' }} />
                        <Typography style={{fontWeight:500,marginTop:'5px'}}>How Yoga Enhances your Mental and Physical Health</Typography>
                    </CardContent>
                    </div>

                    <div>
                    <CardContent  style={{marginRight:'12px',cursor:'pointer'}}>
                        <img src={pic5} style={{ width: '252px', height: '310px', borderRadius: '10px' }} />
                        <Typography style={{fontWeight:500,marginTop:'5px'}}>How To Build Meaningful Professional Connections</Typography>
                    </CardContent>
                    </div>

                    <div>
                    <CardContent style={{cursor:'pointer'}}>
                        <img src={pic6} style={{ width: '500px', height: '310px', borderRadius: '10px' }} />
                        <Typography style={{fontWeight:500,marginTop:'5px'}}>The Importance of Understanding your<br /> Relationship with Finances</Typography>
                    </CardContent>
                    </div>
             
            </div>

        <Button style={{marginTop:'40px',marginBottom:'20px'}}><Typography style={{textDecoration:'none', color:'#000',fontWeight:700}}>EXPLORE MORE</Typography></Button>

        {/* local json file */}
        <div style={{ marginTop: '40px'}}>
            <Card style={{ borderRadius: '0px', backgroundColor: '#f4eae4',paddingLeft:'45px'  }}>
                <Typography  style={{textDecoration:'none', color:'#000',fontWeight:600, textAlign:'left',fontSize:'25px',marginBottom:'20px',marginTop:'25px'}}> Explore, learn and grow with in depth insights</Typography>
                <BlogItems />
            </Card>
            </div>

        <Card style={{borderRadius:'15px', backgroundColor:'#f4eae4',margin:'60px',position:'relative',overflow:'visible',height:'400px',marginTop:'120px'}}>
        <div style={{display:'flex'}}>
                <div>
                    <Typography style={{ fontSize: '40px', fontWeight: 500, textAlign: 'left', marginLeft: '65px', marginTop: '20px',marginRight:'130px' ,marginBottom:'50px'}}>35K people are enjoying <br />Explorely, come join <br /> our mailing list</Typography>
                    <TextField id="subscribe" label="Enter your email" value={email} onChange={handleEmailChange} InputProps={{style: { borderRadius: 60 , border:'1px solid black',width:'420px'}}}></TextField><Button style={{borderRadius:60,backgroundColor:'#000',color:'#fff',padding:'15px',marginLeft:'10px'}}>Subscribe</Button>
                </div>

                <div>
                    <div style={{ display: 'flex', flexDirection: 'row', transform: 'rotate(5deg)', width: 'auto', marginRight: '50px',zIndex:999, position:'absolute'}}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <img src={pic13} style={{ width: '300px', height: '205px', marginBottom: '10px', borderRadius: '10px' }} alt="Finance" />
                            <img src={pic14} style={{ width: '300px', height: '205px', borderRadius: '10px' }} alt="Travel" />
                        </div>
                        <div>
                            <img src={pic15} style={{ width: '300px', height: '420px', marginLeft: '10px', borderRadius: '10px' }} alt="Laptop" />
                        </div>
                       
                    </div>
                </div>
            </div>

        </Card>

        <div style={{marginTop:'100px'}}>
        <Footer />
        </div>

        </div>
    );
};

export default LandingPage;
