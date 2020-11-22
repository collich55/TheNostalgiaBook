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
        this.props.processForm(user);
    }

    handleDemo(e) {
        e.preventDefault();
        const demoUser = Object.assign({}, {email: 'random@gmail.com', password: 'random'})
        this.props.processForm(demoUser)
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

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    
                    {this.renderErrors()}
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
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        
                    </div>
                </form>
                
                    
                <br />
                <br />
                <br />
           
                
                <div id="signB">
                    <button onClick={this.handleDemo} id="Demo-b"  >Demo User</button>
                </div>
                
               
                
                <br />
          {this.props.navLink}
            </div>
        );
    }
}

export default SessionForm;