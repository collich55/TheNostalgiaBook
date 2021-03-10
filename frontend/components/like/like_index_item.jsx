import React from 'react';
import { showUser } from '../../actions/user_actions';
import usersReducer from '../../reducers/users_reducer';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';




class LikeItem extends React.Component {


    constructor(props) {
        super(props)
        // this.state = {
        //     email: ""
        // }

    }

    


    

    likeDate() {
        let date = this.props.like.created_at;
        date = new Date(date);
        date = date.toDateString();
        return date
    }




    render() {
        
        let friend = this.props.users[this.props.authorId]

        
        return (
            <div className={"like-item-box"}>
                <div className="name-and-pic">
                    {profile_pic}
                    <div className="name-and-date" >
                        <a className="like-name-text" href={`#/users/${friend.id}`} replace >{friend.full_name + " " + friend.last_name}</a>
                        <p className="date-text" >{this.likeDate()}</p>
                    </div>
                </div>
                <div className="like-body">
                    {this.props.body}
                </div>                
            </div>
        )
    }
}

export default LikeItem;