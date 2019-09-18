import React from 'react';
import ReactDOM from 'react-dom'

//return
const Main = () => {
    return(
        <div>
            <h1>This is My React app</h1>
            <img src="https://image.ibb.co/f0hhZc/bp.jpg"/>
            <div>
                <h2>My Component</h2>
            </div>
        </div>
    )
}

ReactDOM.render(<Main/>,document.getElementById('root'))

