import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import { bool } from "prop-types";

// export default function Login(props) {
//   const [username, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [authenticated, setAuth] = useState(false)
//   function validateForm() {
//     return username.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     if(username == 'admin@gmail.com' && password == 'chatpassword'){
//         setAuth(true)
        
//     }

//   }

//   return (
//     <div className="Login">
//       <form onSubmit={handleSubmit}>
//         <FormGroup controlId="email" bsSize="large">
//           <FormLabel>Email</FormLabel>
//           <FormControl
//             autoFocus
//             type="email"
//             value={username}
//             onChange={e => setEmail(e.target.value)}
//           />
//         </FormGroup>
//         <FormGroup controlId="password" bsSize="large">
//           <FormLabel>Password</FormLabel>
//           <FormControl
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             type="password"
//           />
//         </FormGroup>
//         <Button block bsSize="large" disabled={!validateForm()} type="submit">
//           Login
//         </Button>
//       </form>
//     </div>
//   );
// }

export default class Login extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onChangeAuth = this.onChangeAuth.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
        username: "",
        password: "",
        authenticated: bool,
      };
    }

    validateForm() {
            return this.username.length > 0 && this.password.length > 0;
          }
    onChangeUsername(e) {
      this.setState({
        username: e.target.value
      });
    }
    onChangePassword(e) {
      this.setState({
        password: e.target.value
      });
    }
    onChangeAuth(e) {
        this.setState({
          authenticated: e.target.value
        });
      }
    
    handleSubmit(e) {
        e.preventDefault();
        
      const admin = {
        username: this.state.username,
        password: this.state.password
      };
  
      if(admin.username === "admin@gmail.com" && admin.password === "pwd"){
          this.setState({
              authenticated: true,
          }, () => this.props.authenticated(this.state.authenticated))
          
          
          
      }else{
          console.log("something went wrong")
      }
      this.props.authenticated(this.state.authenticated)
      
    }
  
    render() {
        return (
                <div className="Login">
                  <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                      <FormLabel>Email</FormLabel>
                      <FormControl
                        autoFocus
                        type="email"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                      />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                      <FormLabel>Password</FormLabel>
                      <FormControl
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        type="password"
                      />
                    </FormGroup>
                    <Button block bsSize="large" disabled={!this.validateForm} type="submit">
                      Login
                    </Button>
                  </form>
                </div>
              );
    }
  }