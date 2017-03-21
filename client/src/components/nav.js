import React from 'react';
import {connect} from 'react-redux';
import {loginUserPage} from '../actions/action';



 class Nav extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
             return (
                <div className="nav-bar" >
                    <div>
                        <img className="profile-pic" src={this.props.profilePicURL}/>
                    </div>
                    <button type="submit" className="vacations-button">Vacations</button>
                    <button type="submit" className="logout-button">Logout</button>
                    <div>
                        <h3>Logged in as {this.props.name}</h3>
                    </div>

               </div>
        );
    }
}

const mapStateToProps = (state) => ({
 profilePicURL: state.profilePicURL,
 name: state.name
});
export default connect(mapStateToProps)(Nav)