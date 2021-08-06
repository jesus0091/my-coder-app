import React, { Component } from 'react'
import Card from './components/Card/Card'
import NavBar from './components/NavBar/NavBar'


export default class App extends Component {
    render() {
        return (
            <div>
                <Card />
                <NavBar />
            </div>
        )
    }
}
