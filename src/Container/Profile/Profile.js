// // import React from 'react'
// // import Grid from '@material-ui/core/Grid'

// // class Profile extends React.Component {
// //     render() {
// //         return (
            
// //             <div >
// //                   <Grid container justify="center" >
// //                 <Grid item xs={10} sm={10} md={6} lg={4}>
// //                 <div style={{ backgroundColor: 'black', height: '100px' }}>
// //                     ghgjhgjh
// //                 </div>
// //                 <div style={{ backgroundColor: 'blue', height: '100px', width: '100px' , position: 'absolute', zIndex: 1, alignSelf: 'center'}}>
// //                     hkhjkh
// //                 </div>
// //                 <div style={{ backgroundColor: 'red', height: '300px' }}>
// //                     hkhjkh
// //                 </div>
// //                 </Grid>
// //                 </Grid>

// //             </div>
// //         )
// //     }
// // }

// // export default Profile





// import React from 'react';
// import {  MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
// import Grid from '@material-ui/core/Grid'
// import NavBar from '../../Component/NavBar/NavBar'
// const Profile = (props) => {
//   return (
//       <div>
//                     <NavBar path={props.history}/>
//                     <div style={{marginTop: '5%'}}>

//                     </div>
//                         <Grid container justify="center" >
//                 <Grid item xs={10} sm={10} md={6} lg={4}>
//     <MDBRow>
//       <MDBCol md='12'>
//         <MDBCard wide cascade>
          
//           <MDBView  cascade>
//             <center>

//             <MDBCardImage
//             style={{width : 150, borderRadius : '100%'}}
//               hover
//               overlay='white-slight'
//               className='card-img-top'
//               src='https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.0-1/c0.0.240.240a/p240x240/71083487_944823329194574_4537050460464349184_n.jpg?_nc_cat=105&_nc_oc=AQnPuSb0fRLT5u0vhtbHoGDeXZXIHXtk-6vMqu1GrmBmAlfN9pq8RzCr2y7EUtZTgpE&_nc_ht=scontent.fkhi17-1.fna&oh=86931172d82740ab92baf40f18643143&oe=5E5EED18'
//               alt='Card cap'
//               />
//               </center>

//           </MDBView>

//           <MDBCardBody cascade className='text-center'>
//             <MDBCardTitle className='card-title'>
//               <strong>Alice Mayer</strong>
//             </MDBCardTitle>

//             <p className='font-weight-bold blue-text'>Photographer</p>

//             <MDBCardText>
//               Sed ut perspiciatis unde omnis iste natus sit.{' '}
//             </MDBCardText>

           
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//     </MDBRow>
//     </Grid>
//     </Grid>
//     </div>
//   )
// }

// export default Profile;