import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            gender: "",
            birth_date: "",
            full_name: ""
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
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <p>Sign Up</p>
                    {this.renderErrors()}
                    <br/>
                    <div className="login-form">

                        <input type="text"
                            value={this.state.full_name}
                            onChange={this.update('full_name')}
                            className="login-input"
                            id="fullname"
                            placeholder="Full Name"
                        />

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
                        
                        <input type="text"
                            value={this.state.gender}
                            onChange={this.update('gender')}
                            className="login-input"
                            id="gender"
                            placeholder="Gender"
                        />
                        
                        <br/>
                        
                        <input type="text"
                                value={this.state.birth_date}
                                onChange={this.update('birth_date')}
                                className="login-input"
                                id="birthdate"
                                placeholder="Birth Date"
                            />
                        
                        
                        
                       
                    <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;