import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Login, SignUp, Home, EmailVerify, Profile, Dashboard, BloodRequired, MyRequests, PostDetail  } from '../../Container/index'

class BasicRouter extends React.Component{
    render(){
        return(
            <Router>
               <Route exact path="/" component={Login} />
               <Route  path="/signup" component={SignUp} />
               <Route  path="/home" component={Home} />
               <Route  path="/emailverify" component={EmailVerify} />
               <Route  path="/profile" component={Profile} />
               <Route  path="/dashboard" component={Dashboard} />
               <Route  path="/bloodrequired" component={BloodRequired} />
               <Route  path="/myrequest" component={MyRequests} />
               <Route  path="/detail" component={PostDetail} />
            </Router>
        )
    }
}

export default BasicRouter