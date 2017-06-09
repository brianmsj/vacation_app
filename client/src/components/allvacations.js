import React from 'react';
import {connect} from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {
    showVacationsModal,
    fetchinghistory,
    searchRequest
} from '../actions/action';

 class AllVacations extends React.Component {
    constructor(props) {
    super(props);
    this.reRenderHome = this.reRenderHome.bind(this)
    this.clickVacation= this.clickVacation.bind(this)
    }
    reRenderHome() {
     this.props.dispatch(showVacationsModal())
    }
    clickVacation(vacation){
     console.log('action fired')
     this.props.dispatch(searchRequest(vacation.country));
     this.props.dispatch(showVacationsModal());
    }
    render() {
        const vacations = this.props.history.map(function(vacation,index){
                    return (
                      <CSSTransitionGroup
                        transitionName="flip"
                        transitionAppear={true}
                        transitionAppearTimeout={700}
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={300}
                        onClick={(event) => {this.clickVacation(vacation)}}
                        >
                      <div className="container">
                      <div key={index} className="article-div">
                       <h6 className='destination'>DESTINATION</h6>
                       <h2 className='country-heading-card'> {vacation.country.toUpperCase()}</h2>
                       <h4 className='h4city'>{vacation.city}</h4>
                      </div>
                     </div>
                     </CSSTransitionGroup>
                   )}, this)
                    return (
                      <div>
                       <div className='all-vacations'>{vacations}</div>
                        <button className='vacation-link close' type='submit' onClick={this.reRenderHome}>Close</button>
                      </div>
                    )
            }
    }




const mapStateToProps = (state) => ({
 history: state.history,
 accessToken: state.accessToken,
 vacationsModal: state.vacationsModal


});

export default connect(mapStateToProps)(AllVacations)
