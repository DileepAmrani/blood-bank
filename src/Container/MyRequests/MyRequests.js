import React from 'react'
import { Drawer } from '../../Component/index'
import { firebaseApp } from '../../Config/Firebase/firebase'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { GetMyRequests } from '../../Config/Redux/action'

class MyRequests extends React.Component {
    constructor() {
        super()
        this.state = {
            currentUser: '',

        }
    }
    componentDidMount = () => {
        firebaseApp.auth().onAuthStateChanged((user) => {
            console.log(user.uid)
            firebaseApp.firestore().collection('users').doc(user.uid).get()
                .then((res) => {
                    console.log(res.data())
                    this.setState({ currentUser: res.data() })
                })
        })
        this.props.GetMyRequests()
    }
    render() {
        console.log(this.props.getMyRequests)
        return (
            <div>
                <Drawer currentUser={this.state.currentUser} path={this.props.history} />
                <div style={{ marginTop: '80px' }}>
                <h3>My Request And Response</h3>
                <Grid container justify="center" >
                <Grid item xs={10} sm={10} md={6} lg={4}>
                {this.props.getMyRequests && this.props.getMyRequests.map((v, i) => {
                            return <Paper className='paper' >
                                <span className='head'> Name:  </span><span>{v.name}</span><br />
                                <span className='head'> No of Units Required: </span> <span>{v.units} </span><br />
                                <span className='head'>Urgency:</span> <span>{v.urgency}</span><br />
                                <span className='head'>Contact No: </span> <span>{v.contact}</span><br />
                                <span className='head'>Additional Instructions: </span> <span>{v.additionalIns}</span><br />
                                <span className='head'>Volunteers: </span> <span>{v.volunteer}</span><br />

                            </Paper>
                        })

                        }
              </Grid>
              </Grid>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        getMyRequests: state.getMyRequests
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        GetMyRequests: () => dispatch(GetMyRequests())
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(MyRequests)