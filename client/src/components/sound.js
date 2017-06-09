import React from 'react';
import {connect} from 'react-redux';

 class Sound extends React.Component {

    render() {
       return (
          <div className='player-div' >
            <iframe className='player'
                    allowTransparency='true'
                    scrolling='no'
                    frameBorder='no'
                    src={`${this.props.soundUrl}&auto_play=true`}>
            </iframe>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
  soundUrl: state.soundUrl
});

export default connect(mapStateToProps)(Sound)
