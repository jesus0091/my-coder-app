import React, { Component } from 'react'
import Card from './components/Card/Card'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Card />
                <NavBar />
            </div>
        )
    }
}
