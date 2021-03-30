import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            author_id: this.props.currentUserId,

        };
        this.handleSubmit = this.handleSubmit.bind(this);
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
        
        
             
        const post = Object.assign({}, this.state);
        
        
        this.props.processForm(post);

        // if (this.state.body.length !== 0) {
        this.props.closeModal();
        // }

    }

    handleXButton(e) {
        e.preventDefault();
        this.props.closeModal();
    }

    handleSubmitButton() {



        if (this.state.body.length !== 0) {
            return <div className="signup-button">
                <input className="post-submit" type="submit" value="Post" />
            </div>
        } else {
            return <div className="signup-button">
                <input className="intangible-post-submit" type="submit" value="Post" disabled="disabled"/>
            </div>
        }

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


    render() {
        let that = this;
        return (
            <div className="signup-form-container">
                <div className="close-x">
                    <img onClick={this.handleXButton} className="close-x-item" src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png" alt="" width="24" height="24"></img>
                </div>
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <div className="sign-up-text-area">
                        <p className="sign-up-text" >Create Post</p>
                        
                    </div>
                    {this.renderErrors()}
                    <div className="login-form">

                        

                         

                        <textarea type="text"
                            value={this.state.body}
                            onChange={this.update('body')}
                            className="login-input"
                            id="new_post_body"
                            placeholder="Write something here"
                        />

                        

                        
                        {this.handleSubmitButton()}
                    </div>
                </form>
            </div>
        );
    }
}

export default PostForm;