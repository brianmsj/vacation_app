import React from 'react';
import ReactPlayer from 'react-player';
import Login from './login';
import Nav from './nav';
import Search from './search';
import Headings from './headings';
import Sound from './sound';
import AllVacations from './allvacations'
import {connect} from 'react-redux';
import {

} from '../actions/action';



class Home extends React.Component {

    render() {
      let loginPage;
      if (this.props.loggedIn === false) {
        loginPage=<Login/>;
      }
      let searchPage;
      if (this.props.loggedIn === true && this.props.vacationsModal === false) {
        searchPage=<Search/>;
      }
      let navPage;
      if (this.props.loggedIn === true && this.props.userType !== "guest"
          && this.props.vacationsModal === false) {
        navPage=<Nav/>
      }
      let headings;
      if (this.props.loggedIn === false) {
        headings=<Headings/>
      }
      let sound;
      if (this.props.soundShowing === true) {
        sound=<Sound/>
      }
      let vacationsModal;
      if(this.props.vacationsModal === true) {
        vacationsModal=<AllVacations />
      }

      return (
        <div className="home">
         {navPage}
         {headings}
          <div className="video-background">
            <div className="video-foreground">
              <ReactPlayer url={this.props.videoUrl} volume={0}
               playing loop={true} youtubeConfig={{playerVars: {end: 500 }}}/>
            </div>
          </div>
          {loginPage}
          {searchPage}
        <div className='vacations-modal'>
          {vacationsModal}
        </div>
        <footer>
         {sound}
        </footer>
       </div>
      )
    }
 }


const mapStateToProps = (state) => ({
 loggedIn: state.loggedIn,
 name: state.name,
 videoUrl: state.videoUrl,
 soundUrl: state.soundUrl,
 soundShowing: state.soundShowing,
 userType:state.loggedInUserType,
 vacationsModal: state.vacationsModal
});


export default connect(mapStateToProps)(Home);
