import React from 'react'
import { Header, Input, Button, NativeSelects, Drawer, Card} from '../../Component/index'
import { firebaseApp } from '../../Config/Firebase/firebase'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { AddComment, GetComment }  from '../../Config/Redux/action'

class PostDetail extends React.Component{
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
        this.props.GetComment(this.props.location.state.id)
    }

    comment = () =>{
      let data = {
            comment: this.state.comment,
            postId: this.props.location.state.id,
            data: this.state.currentUser
        }
        console.log(data)
       this.props.AddComment(data)
    }

    render(){
    console.log(this.props.getComments)
    console.log(this.props.location.state)
        return(
            <div>
                <Drawer currentUser={this.state.currentUser} path={this.props.history} />
                <div style={{marginTop: '80px'}}>
                <h3>Post Detail</h3>
                <Grid container justify="center" >
                <Grid item xs={10} sm={10} md={6} lg={4}>
                <Paper>
                    <Card name='Dileep Kumar' postData={this.props.location.state}/>
                <Paper >
                    <h2>Comments</h2>
                <hr />
                {/* <h2>{this.props.getComments.comment}</h2> */}
                    <div style={{display: 'flex', margin: '0px 10%'}}>
                   <Input name="commet here" onchange={(e)=> this.setState({comment: e.target.value})}/><Button name="Comment" onclick={()=>{this.comment()}}/>
                    </div>
                </Paper>

                <Paper style={{margin: '3px'}}>
                    <h2>Volunteers</h2>
                    <div style={{display: 'flex', margin: '0px 10%'}}>
                        Name: Mukesh
                    </div>
                </Paper>
                </Paper>
                </Grid>
                </Grid>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        getComments: state.getComments,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        AddComment: (data)=> dispatch(AddComment(data)),
        GetComment: (data)=> dispatch(GetComment(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PostDetail)