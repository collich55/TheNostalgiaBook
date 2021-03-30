import React from 'react';

class EditCommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.comment.body,
            commenter_id: this.props.currentUserId,
            post_id: this.props.postId,
            id: this.props.comment.id


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


  

    handleSubmitButton() {



        if (this.state.body.length !== 0) {
            return <div className="signup-button">
                <input className="post-submit" type="submit" value="Edit Comment" />
            </div>
        } else {
            return <div className="signup-button">
                <input className="intangible-post-submit" type="submit" value="Edit Comment" disabled="disabled" />
            </div>
        }

    }
   

    




    handleSubmit(e) {
        e.preventDefault();
        
        const comment = Object.assign({}, this.state, this.props.currentUserId);
        
        this.props.closeModal();
        this.props.processForm(comment);
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


    render() {
        let that = this;
        return (
            <div className="signup-form-container">
                <div className="close-x">
                    <img onClick={this.handleXButton} className="close-x-item" src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png" alt="" width="24" height="24"></img>
                </div>
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <div className="sign-up-text-area">
                        <p className="sign-up-text" >Edit Comment</p>
                        
                    </div>
                    {this.renderErrors()}
                    <div className="login-form">

                        

                         

                        <textarea type="text"
                            value={this.state.body}
                            onChange={this.update('body')}
                            className="login-input"
                            id="new_comment_body"
                            placeholder="Write something here"
                        />

                        

                        
                        {this.handleSubmitButton()}
                    </div>
                </form>
            </div>
        );
    }
}

export default EditCommentForm;