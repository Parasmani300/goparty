import { LockOutlined } from '@mui/icons-material';
import { Button, Grid,TextField, Paper, Avatar, FormControlLabel, Checkbox, Typography, Link } from '@mui/material';
import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {auth,emailPasswordSignIn,signInWithGoogle,signUpNow} from '../config/firebase'

export default function Login() {
    const [userEmail,setUserEmail] = useState("");
    const [password,setUserPassowrd] = useState("");
    const navigate = useNavigate();

    useEffect(() =>{
        auth.onAuthStateChanged(() => {
            console.log("The User is " + auth.user);
        });
    },[])

    const signInUser = async(email,passowrd) => 
    {
        emailPasswordSignIn(email,passowrd)
        alert("User created");
    }

    const paperStyle = {
        padding:"20px",
        height:"70vh",
        width:300,
        margin:"20px auto"
    }
    const avatarStyle = {
        backgroundColor:"blue"
    }

    const marginText = {
        marginBottom:"10px"
    }

    const marginBtn = {
        marginBottom:"8px"
    }
  return (
    <div>
       <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align={"center"}>
                    <Avatar style={avatarStyle}>
                        <LockOutlined />
                    </Avatar>
                    <h2>Sign In</h2> 
                </Grid>
                <TextField
                     label="Username"
                      placeholder='e.g Ram'
                      fullWidth
                      style={marginText}
                      onChange={(e)=>setUserEmail(e.target.value)}
                />
                    <TextField
                         type={"password"}
                         label="Password"
                         fullWidth
                         onChange={(e)=>setUserPassowrd(e.target.value)}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name='checked'
                                color='primary'
                            />
                        }
                        label="Remember Me"
                    />
                <Button variant='contained' color='primary' fullWidth style={marginBtn} onClick={()=>signInUser(userEmail,password)}>Sign In</Button>
                <Typography>
                    <Link href="#">Forgot Password</Link>
                </Typography>
                <Typography>
                    New User?
                    <Link href="#" onClick={()=>navigate("signup")}> Create an Account.</Link>
                </Typography>
                {/* <h3>Other Login options</h3> */}
                <Grid align="center" style={marginBtn}>
                    <Typography>
                       {/* ------- Or connect with -------- */}
                    </Typography>
                    <Button onClick={()=>signInWithGoogle()}>
                        <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/281/281764.png" />
                    </Button>
                </Grid>
            </Paper>
       </Grid>
    </div>
  )
}
