import React from 'react';
import {connect} from 'react-redux';
import {loginUserPage} from '../actions/action';



 class Search extends React.Component {
    constructor(props) {
        super(props);
        this.grabVal = this.grabVal.bind(this);
    }

    // grabVal(event) {
    //     this.props.dispatch(fetchvacationdata())
    // }

    render() {
             return (
                <div className="search-box" >

                  <h2>Hi {this.props.name}, where would you like to go today?</h2>
                  <form className="search-input" >
                    <input type="text" placeholder="Enter Country Here" className="search-bar"></input>
                    <button type="submit" className="search-button">Search</button>
                  </form>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
 name: state.name,
 videoUrl: state.videoUrl
});
export default connect(mapStateToProps)(Search)