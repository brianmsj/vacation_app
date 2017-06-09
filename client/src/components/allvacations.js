import React from 'react';
import {connect} from 'react-redux';
import {
    fetchinghistory
} from '../actions/action';

 class AllVacations extends React.Component {
    constructor(props) {
    super(props);
    }
    render() {
        const vacations = this.props.history.map(function(vacation,index){
                    return (
                        <div className="container">
                            <div key={index} className="article-div">
                                <h6>DESTINATION</h6>
                                <h2 className='country-heading-card'> {vacation.country.toUpperCase()}</h2>
                                <h4 className='h4city'>{vacation.city}</h4>
                            </div>
                        </div>
                      )})
                    return (
                      <div className='all-vacations'>
                        {vacations}
                      </div>
                    )
            }
    }




const mapStateToProps = (state) => ({
 history: state.history,
 accessToken: state.accessToken,


});

export default connect(mapStateToProps)(AllVacations)
