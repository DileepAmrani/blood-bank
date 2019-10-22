import { firebaseApp } from '../../Config/Firebase/firebase'


//Sign in function with firebase

function Signup(data, path) {
    return (dispatch) => {
        firebaseApp.auth().createUserWithEmailAndPassword(data.email, data.password).then((user) => {
            console.log(user.user.uid)
            user.user.sendEmailVerification()
                .then(() => {
                    console.log("email has sent")
                    firebaseApp.firestore().collection('users').doc(user.user.uid).set({
                        userId: user.user.uid,
                        email: data.email,
                        fistName: data.firstName,
                        lastName: data.lastName,
                        // bloodGroup: data.bloodGroup
                    }).then((res) => {
                        console.log(res)

                        dispatch({ type: "signup" })
                        path.push('/')

                    })
                })
                .catch((err) => {
                    console.log(err)
                })


        })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                dispatch({ type: "signupFailed", signuperror: errorMessage })
                // ...
            });

    }

}

// Login with firebase

function LogIn(data, path) {
    return (dispatch) => {
        firebaseApp.auth().signInWithEmailAndPassword(data.email, data.password)
            .then((user) => {
                console.log(user)

                firebaseApp.firestore().collection(`users`).doc(user.user.uid).get()
                    .then((res) => {
                        console.log(res.data())
                        let data = res.data();
                        localStorage.setItem('currentUser', JSON.stringify(data))

                        dispatch({ type: "signup" })
                        path.push('/home')

                    })

            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                dispatch({ type: "loginFailed", loginerror: errorMessage })
                // ...
            });
    }
}

// Sign out function

function SignOut() {

    firebaseApp.auth().signOut().then((user) => {
        console.log('successfull', user)

    })
        .then((error) => {
            console.log(error)
        })
}

function PostRequest(data) {
    console.log(data)
    return dispatch => {

        firebaseApp.firestore().collection(`Requests`).add({
            group: data.bloodgroup,
            units: data.noOfUnits,
            urgency: data.urgency,
            hospital: data.hospital,
            relation: data.relation,
            contact: data.contact,
            additionalIns: data.additionalIns,
            userId: data.currentUser.userId,
            name: data.currentUser.fistName

        })
            .then((res) => {
                dispatch({ type: "post" })
            })

    }
}


// Fetching Data from Firebase Stucture

function GetGroups() {
    return dispatch => {
        firebaseApp.firestore().collection(`BloodGroups`).get()
            .then((res) => {
                let BloodGroups = []
                res.forEach((v, i) => {
                    BloodGroups.push(v.data())
                    BloodGroups = BloodGroups
                    console.log(v.data())

                })
                dispatch({ type: "GetGroups", getGroups: BloodGroups })

            })
    }
}


function GetHospitals() {
    return dispatch => {
        firebaseApp.firestore().collection(`Hospitals`).get()
            .then((res) => {
                let Hospitals = []
                res.forEach((v, i) => {
                    Hospitals.push(v.data())
                    Hospitals = Hospitals
                    console.log(v.data())

                })
                dispatch({ type: "GetHospitals", getHospitals: Hospitals })

            })
    }
}

function GetRealation() {
    return dispatch => {
        firebaseApp.firestore().collection(`Relation`).get()
            .then((res) => {
                let relation = []
                res.forEach((v, i) => {
                    relation.push(v.data())
                    relation = relation
                    console.log(v.data())
                })
                console.log(relation)
                dispatch({ type: "GetRelation", getRelations: relation })

            })
    }
}



function GetUrgency() {
    return dispatch => {
        firebaseApp.firestore().collection(`Urgency`).get()
            .then((res) => {
                let urgenccy = []
           
                res.forEach((v, i) => {
                    urgenccy.push(v.data())
                    urgenccy = urgenccy
                    console.log(v.data())
                })
                console.log(urgenccy)
                dispatch({ type: "GetUrgency", getUrgency: urgenccy })

            })
    }
}


function GetRequests() {
    return dispatch => {
        firebaseApp.firestore().collection(`Requests`).get()
            .then((res) => {
                let currentuser = localStorage.getItem('currentUser')
                currentuser = JSON.parse(currentuser)
                let requests = []
                res.forEach((v, i) => {
                        if(currentuser.userId !== v.data().userId){
                            let data = v.data();
                            data.id = v.id
                            requests.push(data)
                        }
                    requests = requests
                    console.log(v.data())
                })
                console.log(requests)
                dispatch({ type: "GetRequests", getRequests: requests })

            })
    }
}

function AddVolunteer(data) {
    return dispatch => {
        console.log(data)
        alert('Comming Soon')
    }
}

function AddComment(data){
    return dispatch => {
        alert()
        console.log(data)
        firebaseApp.firestore().collection(`Requests`).doc(data.postId).set({Comments:data},{merge: true})
        .then((res)=>{
            console.log(res)
            dispatch({ type: "AddComment"})
        })
    }
}
function GetComment(data){

    return dispatch => {
        console.log(data)
        firebaseApp.firestore().collection('Requests').doc(data).get()
        .then((res)=>{
            console.log(res.data())
            console.log(res.data().Comments)
            dispatch({ type: "GetComments", getComments: res.data().Comments})

        })
    }
}

function GetMyRequests() {
    return dispatch => {
        firebaseApp.firestore().collection(`Requests`).get()
            .then((res) => {
                let currentuser = localStorage.getItem('currentUser')
                currentuser = JSON.parse(currentuser)
                let requests = []
                res.forEach((v, i) => {
                        if(currentuser.userId == v.data().userId){
                            let data = v.data();
                            data.id = v.id
                            requests.push(data)
                        }
                    requests = requests
                    console.log(v.data())
                })
                console.log(requests)
                dispatch({ type: "GetMyRequests", getMyRequests: requests })

            })
    }
}


export {
    Signup,
    LogIn,
    SignOut,
    PostRequest,
    GetGroups,
    GetHospitals,
    GetRealation,
    GetUrgency,
    GetRequests,
    AddVolunteer,
    AddComment,
    GetComment,
    GetMyRequests,
}