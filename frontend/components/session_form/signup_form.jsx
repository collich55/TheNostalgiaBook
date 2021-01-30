import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            gender: "",
            birth_date: "",
            full_name: "",
            last_name: "",
            school: "",
            location: "",
            written_bio: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }
    

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.closeModal();
        this.props.processForm(user).then(this.props.closeModal());;
    }

    renderErrors() {
        return (

            <div>
                {this.props.errors.map((error) => (
                    { error }
                ))}
            </div>

        );
    }


    handleDemo(e) {
        e.preventDefault();
        const demoUser = Object.assign({}, { email: 'random@gmail.com', password: 'random' })
        this.props.processDemo(demoUser).then(this.props.closeModal);
    }

    render() {
        return (
            <div className="signup-form-container">
                <div className="close-x">
                    <img onClick={this.props.closeModal} className="close-x-item" src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png" alt="" width="24" height="24"></img>
                </div>
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <div className="sign-up-text-area">
                        <p className="sign-up-text" >Sign Up</p>
                        <p className="quick-and-easy-text" >It's quick and easy.</p>
                    </div>
                    {this.renderErrors()}
                    <br/>
                    <div className="login-form">

                        <div className="names" >

                        <input type="text"
                            value={this.state.full_name}
                            onChange={this.update('full_name')}
                            className="login-input"
                            id="fullname"
                            placeholder="First Name"
                        />

                            <input type="text"
                                value={this.state.last_name}
                                onChange={this.update('last_name')}
                                className="login-input"
                                id="fullname"
                                placeholder="Last Name"
                            />

                        </div>

                        <br />
                        
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                                id="sign_email"
                                placeholder="Email"
                            />
                        
                        <br />
                        
              <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                id="sign_password"
                                placeholder="Password"
                            />
                        
                        <br />
                        
                        <div className="login-input" id="gender-select" >
                        <input type="radio"
                            value={"Male"}
                            onChange={this.update('gender')}
                            name="gender"
                            id="male"
                        />

                        <label for="male">Male</label><br></br>

                        <input type="radio"
                            value={"Female"}
                            onChange={this.update('gender')}
                            name="gender"
                            id="female"
                        />

                        <label for="female">Female</label><br></br>

                        <input type="radio"
                            value={"Female"}
                            onChange={this.update('gender')}
                            name="gender"
                            id="other"
                        />

                        <label for="other">Other</label><br></br>
                        
                        <br/>
                        </div>
                        
                        <input type="text"
                                value={this.state.birth_date}
                                onChange={this.update('birth_date')}
                                className="login-input"
                                id="birthdate"
                                placeholder="Birth Date"
                            />
                        
                        
                        
                       
                    <br />


                        <input type="text"
                            value={this.state.school}
                            onChange={this.update('school')}
                            className="login-input"
                            id="school"
                            placeholder="School (optional)"
                        />

                        <br />


                        <input type="text"
                            value={this.state.location}
                            onChange={this.update('location')}
                            className="login-input"
                            id="location"
                            placeholder="Location (optional)"
                        />

                        <br />


                        <input type="text"
                            value={this.state.written_bio}
                            onChange={this.update('written_bio')}
                            className="login-input"
                            id="written_bio"
                            placeholder="Image Url (optional)"
                        />

                        <br/>
                        <br/>

                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;