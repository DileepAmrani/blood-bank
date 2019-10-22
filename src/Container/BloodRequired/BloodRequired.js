import React from 'react'
import { Header, Input, Button, NativeSelects, Drawer} from '../../Component/index'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { firebaseApp } from '../../Config/Firebase/firebase'
import { PostRequest, GetHospitals, GetRealation, GetUrgency, GetGroups } from '../../Config/Redux/action'



 
class BloodRequired extends React.Component {
    constructor() {
        super()
        this.state = {
            currentUser:'',

        }
    }
    componentDidMount=()=>{
        firebaseApp.auth().onAuthStateChanged((user)=>{
            console.log(user.uid)

            firebaseApp.firestore().collection('users').doc(user.uid).get()
            .then((res)=>{
                console.log(res.data())
                this.setState({currentUser: res.data()})
            })
        })
        this.props.GetHospitals()
        this.props.GetRealation()
        this.props.GetUrgency()
        this.props.GetGroups()
    }
    render() {

        console.log(this.props.getHospitals)
        console.log(this.props.getRelation)
        console.log(this.state)
        return (
            <div className="signup">
                <Drawer currentUser={this.state.currentUser} path={this.props.history}/>
                <br />
                <br />
                <br />
                <Grid container justify="center" >
                <Grid item xs={10} sm={10} md={6} lg={4}>
                <Paper className="loginBox">
                <div >
                     <span className="heading">Post Blood Requirement</span>
                    <NativeSelects name="Blood Group"   data={this.props.getGroups} onchange={(e)=>this.setState({bloodgroup: e.target.value})}/>
                    <Input  name="No. of Units Required"  type="number" onchange={(e)=>this.setState({noOfUnits: e.target.value})}/>
                    <NativeSelects name="Urgency" data={this.props.getUrgency}  onchange={(e)=>this.setState({ urgency : e.target.value})}/>
                    {/* <NativeSelects name="Country" data={countries}  onchange={(e)=>this.setState({ country : e.target.value})} />
                    <NativeSelects name="State"  />
                    <NativeSelects name="City"  /> */}
                    <NativeSelects name="Hospital"   data={this.props.getHospitals}  onchange={(e)=>this.setState({ hospital : e.target.value})}/>                    
                    <NativeSelects name="Relation"   data={this.props.getRelation}  onchange={(e)=>this.setState({ relation: e.target.value})}/>                    
                    <Input  name="Contact Number"  type="number" onchange={(e)=>this.setState({contact: e.target.value})}/>
                    <Input  name="Additional Instructions"  type="text" onchange={(e)=>this.setState({additionalIns: e.target.value})}/>

                    <Button name="Post" onclick={()=> this.props.PostRequest(this.state)}/>

                </div>
                </Paper>
                </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        getHospitals : state.getHospitals,
        getGroups : state.getGroups,
        getRelation : state.getRelation,
        getUrgency : state.getUrgency,
        getGroups : state.getGroups,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        PostRequest: (data)=> dispatch(PostRequest(data)),
        GetHospitals:()=> dispatch(GetHospitals()),
        GetRealation:()=> dispatch(GetRealation()),
        GetUrgency:()=> dispatch(GetUrgency()),
        GetGroups:()=> dispatch(GetGroups()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BloodRequired)