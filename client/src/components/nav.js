import React from 'react';
import {connect} from 'react-redux';
import {logoutSuccess,soundCloudIcon, soundCloudIconOff,resetState,fetchinghistory,showVacationsModal} from '../actions/action';
import {Link} from 'react-router';
import $ from 'jquery';
import Search from './search'




 class Nav extends React.Component {

     constructor(props) {
         super(props);
         this.renderInitialState = this.renderInitialState.bind(this)
         this.fetchHistory = this.fetchHistory.bind(this)
}

      componentDidMount() {
      // $(function () {
      //   let timer;
      //
      //   $(document).mousemove(function () {
      //     if (timer) {
      //       clearTimeout(timer);
      //       timer = 0;
      //      $('.nav-bar').fadeIn();
      //     }
      //
      //     timer = setTimeout(function () {
      //       $('.nav-bar').fadeOut()
      //     }, 10000)
      //   });
      // });
      }

   renderInitialState() {
     this.props.dispatch(logoutSuccess())
     this.props.dispatch(resetState())

   }
   fetchHistory() {
    this.props.dispatch(fetchinghistory(this.props.accessToken))
    this.props.dispatch(showVacationsModal())

   }

    render() {
             return (
                <div className="nav-bar" >
                 <div className="log-in-container">
                    <h3 className='logged-in-name'>{this.props.name}</h3>
                    <div className='goog-img'>
                      <img role="presentation" className="profile-pic" src={this.props.profilePicURL}/>
                    </div>
                 </div>
                 <div className='nav-button'>
                    <div className='inline1'>
                     <button className='vacation-link' onClick={this.fetchHistory}>All Vacations</button>
                    </div>
                    <div className='inline1'>
                     <button type="submit" onClick={this.renderInitialState} className='vacation-link'>Logout</button>
                    </div>
                  </div>
               </div>
        );
    }
}

const mapStateToProps = (state) => ({
 profilePicURL: state.profilePicURL,
 name: state.name,
 soundShowing: state.soundShowing,
 history: state.history,
 accessToken: state.accessToken,
 vacationsModal: state.vacationsModal

});
export default connect(mapStateToProps)(Nav)
