import React from 'react';

class App extends React.Component {

welcome(e)
{   e.preventDefault(e);
      var x=document.getElementById("name").value;
        var y=document.getElementById("email").value;
            alert("Welcome"+ x + "\n and your Email_Id is : " + y );
}



render() {
    return(
        <div>
            
            <h2>VVDN Technologies</h2>
            <div class="form">
                <div id="signup">
                <h1>Sign up For Free</h1>
                <form id="f1">
                        <div class="field-wrap">
                            <label>
                                Full Name<span class="req">*</span>
                            </label>
                            <input type="text" id="name" name="fullname" pattern="[A-Za-z.\s]{1,}" required autocomplete="off" title="Fullname should only contain letters. e.g. john" />
                        </div>
                        <div class="field-wrap">
                            <label>
                                Adhaar no<span class="req">*</span>
                            </label>
                            <input type="text" name="ArtistId" pattern="[0-9]{12}" required autocomplete="off" title="ID pattern =  Adhaar no(12 digit)" id="adh" />
                        </div>
                        <div class="field-wrap">
                            <label>
                                State<span class="req">*</span>
                            </label>
                            <input type="text" name="state" pattern="[A-Za-z]{1,}" required autocomplete="off" />
                        </div>
                        <div class="field-wrap">
                            <label>
                                City<span class="req">*</span>
                            </label>
                            <input type="text" name="city" pattern="[A-Za-z]{1,}" required autocomplete="off" />
                        </div>
                        <div class="field-wrap">
                            <label>
                                Pincode<span class="req">*</span>
                            </label>
                            <input type="text" id="pin" name="pincode" Pattern="[0-9]{6}" required autocomplete="off" title="pincode should contain 6 digit " />
                        </div>
                        <div class="field-wrap">
                            <label>
                                Mobile No:<span class="req">*</span>
                            </label>
                            <input type="text" id="mob" name="mobileno" Pattern="[789][0-9]{9}" required autocomplete="off" title="enter valid mobile no." />
                        </div>
                        <div class="field-wrap">
                            <label>
                                Email<span class="req">*</span>
                            </label>
                            <input type="text" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required autocomplete="off" title="Enter valid email" />
                        </div>
                        <div class="field-wrap">
                            <label>
                                Set A Password<span class="req">*</span>
                            </label>
                            <input type="password" name="password" required autocomplete="off" id="pass" />
                        </div>
                        <button type="button" class="button button-block" onClick={(e) => this.welcome(e)}>SUBMIT</button>

                </form>
                </div>

            </div>
            <form align="center">
                <div class="wrapper">
                    <button type="button" class="bu b2" onClick="res()">RESET</button>
                    <button type="button" class="bu b3"><a href="/">Home</a></button>
                    <button type="button" class="bu b4" onClick="myfun()">DISABLE</button>
                </div>
            </form>
        </div>
    )
}
}
export default App;