import React from 'react';
import ReactPlayer from 'react-player';
import Login from './login';



export default class Home extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        videostarted: false
      }
      this.onStart = this.onStart.bind(this)
  }

  onStart(){
      this.setState({videostarted: true})

  }


  render() {
    return (

      <div className="home">
        <h1 className='title'> Instant Vacation</h1>
        <h4 className='motto'> For when you need a instant vacation</h4>
        <div className= {`video-background ${this.state.videostarted ? '': 'hidden'}`}>
            <div className="video-foreground">
              <ReactPlayer url='https://www.youtube.com/embed/jEnd8JIMii4?start=6m12s' onStart={this.onStart} volume='0'
              playing loop='true' />
            </div>
       </div>
        <Login/>
      </div>
    );
  }
}
