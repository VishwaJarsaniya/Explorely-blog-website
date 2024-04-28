import React from "react";
import { Card, CardContent, Grid, Typography, Button, Box } from "@mui/material";


function Nav() {



    return(

        <div>
            <Box style={{borderRadius:'0.2px',borderColor:'grey', backgroundColor:'#f4eae4', height:'70px'}} >
                <CardContent  >
                <Grid container justifyContent="space-between" style={{marginRight:'70px'}}>
                    <Grid item>
                        <Typography style={{ color: '#000', fontSize: '25px', fontWeight: 500,cursor:'pointer',marginLeft:'50px' }}>Explorely</Typography>
                    </Grid>
                   <Grid item>
                        <Button style={{marginRight:'35px'}}><Typography style={{color:'#000',fontWeight:500,}}>Home</Typography></Button>
                        <Button style={{marginRight:'15px'}}><Typography style={{color:'#000',fontWeight:500}}>Subscribe</Typography></Button>
                   </Grid>
                </Grid>
                </CardContent>
            </Box>
        </div>

    );
};

export default Nav;