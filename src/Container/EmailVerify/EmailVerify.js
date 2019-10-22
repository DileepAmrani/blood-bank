import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import ButtonMaterial from '@material-ui/core/Button'
import {firebaseApp} from './../../Config/Firebase/firebase'


class EmailVerify extends React.Component{

    componentDidMount=()=>{
     firebaseApp.auth().onAuthStateChanged((user)=>{
         if(user){
           if(user.emailVerified===true){
               this.props.history.push("/home")
           }
           else{
           }
         }
         else{
            this.props.history.push("/")
         }
     })
    }
    render(){
        return(
            <div>
                     <Grid container justify="center" >
                    <Grid item xs={10} sm={10} md={6} lg={8}>
                        <Paper>
                            <div style={{backgroundColor: 'gray', color: '#fff', borderRadius: '10px'}}> 
                             <h1 style={{padding: '10px'}}>App Name Here</h1>
                            </div>
                          <span>Please verify your Email and Continue</span><br /><br />
                            <ButtonMaterial style={{backgroundColor: '#2979ff', color: '#fff', marginBottom: '20px'}}>
                                Continue
                            </ButtonMaterial>
                         
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


export default EmailVerify