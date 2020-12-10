import React from 'react';

const joinSession = (props) => {
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
                <input type="text" placeholder="Room Code"></input>
                <button>Let's Play!</button>
            </div>
        </div>
    )
}

export default joinSession;