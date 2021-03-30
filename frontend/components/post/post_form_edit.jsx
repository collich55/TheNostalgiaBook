import React from 'react';

class EditPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.post.body,
            author_id: this.props.currentUserId,
            id: this.props.post.id

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
        
        this.props.closeModal();
        this.props.processForm(post);
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
                    <div className="post-text-area">
                        <p className="post-form-header-text" >Edit Post</p>
                        
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

                        

                        
                        <div className="signup-button">
                            <input className="session-submit" type="submit" value="Edit Post" />  
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditPostForm;