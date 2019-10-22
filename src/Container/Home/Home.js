import React from 'react'
import './Home.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { Header, FooterPage, NavbarPage, Drawer, Button } from '../../Component/index'
import { firebaseApp } from '../../Config/Firebase/firebase'
import { connect } from 'react-redux'
import { GetRequests, AddVolunteer } from '../../Config/Redux/action'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            allTodo: [],
            currentUser: ''
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
            if (user) {
                if (user.emailVerified === true) {
                    this.props.history.push("/home")
                }
                else {
                    this.props.history.push("/emailverify")
                }
            }
            else {
                this.props.history.push("/")
            }
        })
        this.props.GetRequests()
    }

    addVolunteer = () => {
        let data = {
            name: this.state.currentUser.fistName,
            email: this.state.currentUser.email,
            userId: this.state.currentUser.userId,
            // postId: 
        }
        this.props.AddVolunteer(data)
    }

    render() {
        console.log(this.state)
        console.log(this.state.currentUser)
        console.log(this.props.getRequests)
        return (
            <div>
                <Drawer currentUser={this.state.currentUser} path={this.props.history} />
                <br /><br /><br /><br /><br /><br />


                <Grid container justify="center" >
                    <Grid item xs={10} sm={10} md={6} lg={6}>
                        {this.props.getRequests && this.props.getRequests.map((v, i) => {
                            return <Paper className='paper' >
                                <span className='head'> Name:  </span><span>{v.name}</span><br />
                                <span className='head'> No of Units Required: </span> <span>{v.units} </span><br />
                                <span className='head'>Urgency:</span> <span>{v.urgency}</span><br />
                                <span className='head'>Contact No: </span> <span>{v.contact}</span><br />
                                <span className='head'>Additional Instructions: </span> <span>{v.additionalIns}</span><br />
                                <span className='head'>Volunteers: </span> <span>{v.volunteer}</span><br />

                                <Button name="Volunteer" onclick={() => this.addVolunteer()} /><Button name="Comment" onclick={() => this.props.history.push('detail', v)} />
                            </Paper>
                        })

                        }
                    </Grid>
                </Grid>
                <FooterPage />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        getRequests: state.getRequests,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetRequests: () => dispatch(GetRequests()),
        AddVolunteer: (data) => dispatch(AddVolunteer(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)