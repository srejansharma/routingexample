import React from 'react';
import $ from 'jquery';
class App extends React.Component {
    componentDidMount() {
        $('.loaderContainer').hide();
    }
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            email1:"srejan.sharma@vvdntech.in",

            password1: "12345678"
        }
    }
    changeInput(e)
    {
        const temp=e.target.name;
        const value=e.target.value;

        this.setState({[temp]: value});
    }

    welcome(e)
    {   e.preventDefault();
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(emailRegex.test(this.state.email)){
            if(this.state.email===this.state.email1 && this.state.password===this.state.password1){
                alert(this.state.email + " Your Welcome");
                }
                else
                {
                    alert(" Pass is Incorrect or\n Reagarding to this email ID:"+ this.state.email + " \n No Data found");;
                }
        }else{
            alert("please enter a vaid email address");
        }
    }

render() {
    return(
        <div>
            <h2>VVDN Technologies</h2>
            <div class="form">
                <div id="signup">
                <h1>Login</h1>
                <form id="f1">
                        <div class="field-wrap">
                            <label>
                                Email<span class="req">*</span>
                            </label>
                            <input type="text" id="email" name="email" required autocomplete="off" title="Enter valid email"
                            onChange={(e) => this.changeInput(e)}
                            value={this.state.email} />
                        </div>
                        <div class="field-wrap">
                            <label>
                                Password<span class="req">*</span>
                            </label>
                            <input type="password" name="password" required autocomplete="off" id="pass"
                            onChange={(e) => this.changeInput(e)}
                            value={this.state.password} />
                        </div>
                        <button type="button" class="button button-block" onClick={(e) => this.welcome(e)}>SUBMIT</button>

                </form>
                </div>

            </div>

        </div>
    )
}
}
export default App;