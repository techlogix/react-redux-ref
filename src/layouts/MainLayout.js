import React from 'react'
import {Link} from 'react-router'
import Reactive from '.././components/Reactive'
const MainLayout = function (props){
    return (
        <div>
            {Reactive}
            <header><h1>Welcome to Star Wars Page</h1>

                <Link to="/">Home</Link> |  
                <Link to="/profile">Profile</Link>
                
                <hr/>
            </header>
            <main>
                {props.children}
            </main>
            <footer>Data from <a href="http://swapi.co">swapi</a></footer>
        </div>
    )
}

export default MainLayout