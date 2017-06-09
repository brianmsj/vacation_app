import React from 'react';
import {connect} from 'react-redux';
import {
    postVacationData,
    postVacationForm,
    exposePostForm
} from '../actions/action';



 class PostingANewVacay extends React.Component {

constructor(props) {
    super(props);


    }

    render() {
        return (
            <div className="form-style-6" >
	            <h1 className='form-head'> You can add your own virtual vacation here! </h1>
	            <form onSubmit={(event)=> {
	            	 event.preventDefault();
	            	const country = event.target.country.value;
	            	const city = event.target.city.value;
	            	const description= event.target.description.value;
	            	const videoUrl= event.target.videoUrl.value;
	            	const soundUrl= event.target.soundUrl.value;
	            	console.log(country,city,description,videoUrl,soundUrl);
	            	this.props.dispatch(postVacationData(country,city,description,videoUrl,soundUrl));

	            }}>
		            <input name="country" type="text" placeholder="Enter Country"  className=""></input>
		            <input name="city" type="text" placeholder="Enter City"  className=""></input>
		            <input name="description" type="text" placeholder="Vacation Description"  className=""></input>
		            <input name="videoUrl" type="url" placeholder="YouTube URL"  className=""></input>
		            <input name="soundUrl" type="url" placeholder="SoundCloud URL"  className=""></input>
		            <button type="submit" className="form-button">Add Vacay</button>
                <button type="submit" className="form-button">Go Back</button>
	              </form>
              </div>
       	);
    }
}

const mapStateToProps = (state) => ({
  cardShowing: state.cardShowing,
  postShowing: state.postShowing

});
export default connect(mapStateToProps)(PostingANewVacay)
