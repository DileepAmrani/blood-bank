
import React from 'react';
import {  MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import Grid from '@material-ui/core/Grid'
import NavBar from '../../Component/NavBar/NavBar'
const Profile = (props) => {
  return (
      <div>
                    <div style={{marginTop: '5%'}}>

                    </div>
                        <Grid container justify="center" >
                <Grid item xs={10} sm={10} md={6} lg={10}>
    <MDBRow>
      <MDBCol md='12'>
        <MDBCard wide cascade>
          
          <MDBView  cascade>

          </MDBView>

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
            <span>Name: </span> <strong>{props.postData.name}</strong>
            </MDBCardTitle>

            <p className='font-weight-bold'><span>Units Required: </span> {props.postData.units}</p>
            <p className='font-weight-bold'><span>Donation Recieved: </span> {props.postData.recieved}</p>
            <p className='font-weight-bold'><span>Still Required: </span> {props.postData.units}</p>
            <p className='font-weight-bold'><span>Blood Group: </span> {props.postData.group}</p>
            <p className='font-weight-bold'><span>Hospital: </span> {props.postData.hospital}</p>
            <p className='font-weight-bold'><span>Relation With Patient: </span> {props.postData.relation}</p>
            <p className='font-weight-bold'><span>Contact No.: </span> {props.postData.contact}</p>
            <p className='font-weight-bold'>Additional Instructions:

            <MDBCardText>
            {props.postData.additionalIns}
            </MDBCardText>
            </p>
           
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </Grid>
    </Grid>
    </div>
  )
}

export default Profile;