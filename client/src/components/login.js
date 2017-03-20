import React from 'react';
import ReactPlayer from 'react-player';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
          loginstarted: false
       }
       this.onStart = this.onStart.bind(this)
    }

    onStart(){
        this.setState({loginstarted: true})

    }


    render() {
             return (
                <div className={`loginDiv ${this.state.loginstarted ? '': 'hidden'}`} >
                  <form className="main-input" onStart ={this.onStart} >
                    <input type="text" placeholder="username" className="username" ></input>
                    <br/>
                    <input type="text" placeholder="password" className="password" ></input>
                    <br/>
                    <button type="submit">Login </button>
                  </form>
                </div>

        );
    }
}
