import React from 'react';
import ReactPlayer from 'react-player';
import Login from './login';
import {connect} from 'react-redux';



 class Home extends React.Component {
    // constructor(props) {
    //     super(props);





    render() {
      let loginPage;
      if (this.props.loggedIn === false) {
        loginPage=<Login/>;
      }
      return (
        <div className="home">
          <div className="main-headings">
            <h1 className='title'>Virtual Vacay</h1>
            <h1 className='title'>{this.props.name}</h1>
            <h4 className='motto'> For when you need a virtual vacation</h4>
          </div>
          <div className="video-background">
            <div className="video-foreground">
              <ReactPlayer url='https://www.youtube.com/embed/jEnd8JIMii4?start=16m12s' volume={0}
               playing loop={true} />
            </div>
          </div>
          {loginPage}
        </div>
      )
    }
 }



const mapStateToProps = (state) => ({
 loggedIn: state.loggedIn,
 name: state.name
});


export default connect(mapStateToProps)(Home);
