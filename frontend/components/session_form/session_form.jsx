import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
        this.props.processForm(user).then(this.props.closeModal);
    }

    handleDemo(e) {
        e.preventDefault();
        const demoUser = Object.assign({}, {email: 'random@gmail.com', password: 'random'})
        this.props.processForm(demoUser).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    
                    
                    <div className="login-form">
                        <br />
                        
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                                id="log_username"
                                placeholder="Email"
                            />
                        
                        <br />
                        
              <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                id="log_password"
                                placeholder="Password"
                            />
                        <br />
                        <div className="error-session-text">
                            {this.renderErrors()}
                        </div>
                        <br/>
                        <input className="session-submit" type="submit" value="Log In" />
                        
                    </div>
                    
            
                </form>

                

                
                
                    
                <br />
                <br />
                <div className="just_line">

                </div>
                <br />
           
                
                <div id="signB">
                    <button onClick={this.handleDemo} id="Demo-b"  >Demo User</button>
                </div>
                
               
                
                <br />
                <div className="signup_button_div">
                    {this.props.otherForm}
                </div>
            </div>
        );
    }
}

export default SessionForm;