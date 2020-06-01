import React from 'react'
import {Link } from 'react-router-dom'
import antd, { Button } from 'antd'
import './app.scss'

// export default function App(){
//     return <div class='container'>
//       <h1>Welcome here!</h1>
//         <Link to='/home'>Home</Link><br/>
//         <Link to='/Login'>Login</Link>
//     </div>

// }


class App extends React.Component {

    handleJump = () => {    
        this.props.history.push('/home');


    }
    render() {
        return <div class='container'>
            <h1>Welcome here!</h1>
            <Link to='/home'>Home</Link><br />
            <Link to='/Login'>Login</Link> <br/>
            <Button onClick={this.handleJump}>Home</Button>
        </div>

    }
}

export default App;