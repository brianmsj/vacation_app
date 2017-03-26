import React from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';

import {
    searchRequest,
    soundCloudIcon
} from '../actions/action';



 class Search extends React.Component {

   componentDidMount() {
   $(function () {
     let timer;

     $(document).mousemove(function () {
       if (timer) {
         clearTimeout(timer);
         timer = 0;
         $('.search-box').fadeIn();
       }

       timer = setTimeout(function () {
         $('.search-box').fadeOut()
       }, 4000)
     });
   });
 }


    render() {
             return (
                <div className="search-box" >
                  <h2 className='motto'>{`${this.props.hi} `}{this.props.name}, {this.props.whereMessage}</h2>
                  <form onSubmit={(event) => {
                      event.preventDefault();
                      const userInput = event.target.searchfield.value;
                      console.log(userInput);
                       this.props.dispatch(searchRequest(userInput));
                       this.props.dispatch(soundCloudIcon());

                  }} className="search-form" >
                    <input name="searchfield" type="text" placeholder="Enter Country Here"  className="search-bar" required></input>
                    <button type="submit" className="vacation-link">Search</button>
                  </form>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
 name: state.name,
 videoUrl: state.videoUrl,
 hi: state.hiMessage,
 whereMessage: state.whereMessage

});
export default connect(mapStateToProps)(Search)

//NOTE
//  if you would like to reset the search input field once the user
//has typed something in and clicked search
// the code is
//event.target.searchfield.value = ''
