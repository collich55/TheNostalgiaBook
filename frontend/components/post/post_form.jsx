import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.handleXButton = this.handleXButton.bind(this);
        this.update = this.update.bind(this);
    }


    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value,
            })
        }
    }


  

   
   

    




    handleSubmit(e) {
        e.preventDefault();
        const post = Object.assign({}, this.state, this.props.currentUserId);
        this.props.closeModal();
        this.props.processForm(post).then(this.props.closeModal());;
    }

    handleXButton(e) {
        e.preventDefault();
        this.props.closeModal();
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
        let that = this;
        return (
            <div className="signup-form-container">
                <div className="close-x">
                    <img onClick={this.handleXButton} className="close-x-item" src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png" alt="" width="24" height="24"></img>
                </div>
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <div className="sign-up-text-area">
                        <p className="sign-up-text" >Sign Up</p>
                        <p className="quick-and-easy-text" >It's quick and easy.</p>
                    </div>
                    {this.renderErrors()}
                    <div className="login-form">

                        

                         

                        <input type="text"
                            value={this.state.body}
                            onChange={this.update('body')}
                            className="login-input"
                            id="new_post_body"
                            placeholder="Write something here"
                        />

                        

                        
                        <div className="signup-button">
                            <input className="session-submit" type="submit" value={this.props.formType} />  
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default PostForm;