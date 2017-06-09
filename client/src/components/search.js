import React from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';

import {searchRequest, soundCloudIcon, noSearchData} from '../actions/action';



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
         }, 10000)
       });
     });
   }



    render() {
      let noSearchData;
      if (this.props.noSearchData === true) {
         noSearchData= <h5 className='no-search-data'>Country does not exist, please try another</h5>;
      }
              return (
                <div className='search-box' >
                  <h2 className='motto'>{`${this.props.hi} `}{this.props.name}, {this.props.whereMessage}</h2>
                  <form onSubmit={(event) => {
                      event.preventDefault();
                      const userInput = event.target.searchfield.value;
                      this.props.dispatch(searchRequest(userInput));
                      }}className='search-form' >
                    <input name='searchfield' type='text' placeholder='Enter Country Here'  className='search-bar WelcomeBtn' required></input>
                    <button type='submit' className='vacation-link'>Search</button>
                      console.log(userInput);
                       this.props.dispatch(searchRequest(userInput));
                       this.props.dispatch(soundCloudIcon());

                  }} className="search-form" >
                    <input name="searchfield" type="text" placeholder="i.e France, Australia"  className="search-bar" required></input>
                    <button type="submit" className="vacation-link">Search</button>
                  </form>
                  {noSearchData}
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
 name: state.name,
 videoUrl: state.videoUrl,
 hi: state.hiMessage,
 whereMessage: state.whereMessage,
 noSearchData: state.noSearchData

});
export default connect(mapStateToProps)(Search)

//NOTE
//  if you would like to reset the search input field once the user
//has typed something in and clicked search
// the code is
//event.target.searchfield.value = ''
