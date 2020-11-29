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
        this.checkErrors = this.checkErrors.bind(this);
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

    checkErrors() {
        if (this.props.errors.base) {
            return (this.props.errors.base.map(error => {
                return { error }
            }))
        }
    }

    renderErrors() {
        return (
            
            <div>
                {
                    this.checkErrors()
                }
            </div>
            
        );
    }

    componentDidMount() {
        this.props.fetchUsers();
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
          {this.props.otherForm}
            </div>
        );
    }
}

export default SessionForm;