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
                    Create Your TheNostalgiaBook
          <br />
          Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <label>Email:
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
              <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Gender:
                        <input type="text"
                            value={this.state.gender}
                            onChange={this.update('gender')}
                            className="login-input"
                        />
                        </label>
                        <label>Birth Date:
                        <input type="text"
                                value={this.state.birth_date}
                                onChange={this.update('birth_date')}
                                className="login-input"
                            />
                        </label>
                        <label>Full Name:
                        <input type="text"
                                value={this.state.full_name}
                                onChange={this.update('full_name')}
                                className="login-input"
                            />
                        </label>
                    <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;