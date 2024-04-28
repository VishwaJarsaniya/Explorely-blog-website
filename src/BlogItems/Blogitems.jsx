import React from 'react';
import { blogList } from "../data";
import { Card, CardContent, Typography, Grid } from "@mui/material";

function BlogItems() {
    return (
        <div>
            <Grid container>
            {blogList.map((blog) => (
                <div key={blog.id} style={{display:'flex'}}>
                        <Grid item style={{marginRight:'40px',cursor:'pointer'}}>
                        <div>
                            <img src={blog.cover} style={{height:'350px',width:'240px',borderRadius:'15px',padding:'6px'}}/>
                            <Typography style={{fontWeight:500,marginTop:'5px'}}>{blog.desc1}</Typography>
                            <Typography style={{fontWeight:500,marginTop:'5px',marginBottom:'30px'}}>{blog.desc2}</Typography>
                        </div>
                        </Grid>
                </div>
            ))}
            </Grid>
        </div>
    );
}

export default BlogItems;
