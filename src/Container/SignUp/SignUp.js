import React from 'react'
import './SignUp.css'
import { Header, Input, Button, NativeSelects} from '../../Component/index'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { firebaseApp } from '../../Config/Firebase/firebase'


import { Signup, GetGroups } from '../../Config/Redux/action'


class SignUp extends React.Component {
    constructor(){
        super()
        this.state = {
      
        }
    }

     handleChange = () => event => {
        this.setState({
         
        });
      
      };

      componentDidMount(){
       this.props.GetGroups()
      }
    
    render() {
        console.log(this.state)
        console.log(this.props.getGroups)
        return (
            <div className="signup">
                <Header />
                <Grid container justify="center" >
                <Grid item xs={10} sm={10} md={6} lg={4}>
                <Paper className="loginBox">
                <div >
                    <span className="heading">Sign Up</span>
                    <Input ref={this.inputs} name="First Name"  type="text" onchange={(e)=>this.setState({firstName: e.target.value})}/>
                    <Input ref={this.inputs} name="Last Name"  type="text" onchange={(e)=>this.setState({lastName: e.target.value})}/>
                    <Input name="Email"  type="email" onchange={(e)=>this.setState({email: e.target.value})}/>

                    <NativeSelects name="Blood Group" data={this.props.getGroups}  onchange={(e)=>this.setState({ bloodGroup : e.target.value})} />


                    <Input name="Password"  type="password" onchange={(e)=>this.setState({password: e.target.value})}/>
                    <span style={{color: 'red'}}>{this.props.signuperror}</span>            
                    <Button name="Sign Up" onclick={()=> this.props.Signup(this.state, this.props.history)}/>
                    <br />   
                    <span onClick={()=>this.props.history.push('/')}>Already have Account? Login. </span>
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
        getGroups: state.getGroups 
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        Signup: (data, path)=> dispatch(Signup(data, path)),
        GetGroups: ()=> dispatch(GetGroups())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)