import React from 'react';
import {connect} from 'react-redux';
import HistorySideBar from './historysidebar';
import PostingANewVacay from './historyvacaypost';

 class HistoryHome extends React.Component {




   render() {

     let postPage;
     if (this.props.cardShowing === false) {
       postPage=<PostingANewVacay/>
     }

     return (
       <div className="mainPageVacations" >
       <HistorySideBar/>
       {postPage}
       </div>
     );
   }
 }

const mapStateToProps = (state) => ({
    cardShowing: state.cardShowing,
    postShowing: state.postShowing

});
export default connect(mapStateToProps)(HistoryHome)
