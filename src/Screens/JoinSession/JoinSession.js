import React, {Component} from 'react';
import axios from 'axios';

class JoinSession extends Component {
    state = {
        playerName: '',
        giftTitle: '',
        giftLink: '',
        giftImg: 'images/BlankGiftImg.png',
        roomCode: null
    }


    updateDisplayGiftImgHandler = event => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState == 2) {
                this.setState({
                    giftImg: reader.result
                });
            }
        }
        reader.readAsDataURL(event.target.files[0])
    }

    render() {
        return (
            <div className="JoinSession">
                <h1>Join Session</h1>
                <div>
                    <input type="text" placeholder="Name"></input>
                </div>
                <div>
                    <input type="text" placeholder="Gift Title"></input>
                </div>
                <div>
                    <input type="text" placeholder="Gift Link"></input>
                </div>
                <div>
                    <input type="file" onChange={this.updateDisplayGiftImgHandler}></input>
                </div>
                <div>
                    <img src={this.state.giftImg}></img>
                </div>
                <div>
                    <input type="text" placeholder="Room Code"></input>
                </div>
                <div>
                    <button>Let's Play!</button>
                </div>
            </div>
        )
    }
}

export default JoinSession;