import React from 'react'
import {Link} from 'react-router'

let MainLayout = function (props){
    return (
        <div>
            <header><h1>Welcome to Star Wars Page</h1>
            <hr/>
        </header>
        <main>{props.children}</main>
        </div>
    )
}