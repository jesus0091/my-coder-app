import React, { Component } from 'react'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponentII from './components/ComponentII/ComponentII';
import CardComponent from './components/Card/Card';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Categories from './components/Categories/Categories';
import './App.css'



export default class App extends Component {
    render() {
        return (
            <div className='body'>
                <Header />
                <ItemListContainer 
                    greeting='Hola'
                />
                <Categories/>
                <CardComponent 
                    cardImage=''
                    cardTitle='Producto 1'
                    cardDescription='Descrpcion de producto 1'
                    buttonName='Add to cart'
                />
                <CardComponent 
                    cardImage=''
                    cardTitle='Producto 2'
                    cardDescription='Descrpcion de producto 2'
                    buttonName='Add to cart'
                />
                <CardComponent 
                    cardImage=''
                    cardTitle='Producto 1'
                    cardDescription='Descrpcion de producto 1'
                    buttonName='Add to cart'
                />
                <CardComponent 
                    cardImage=''
                    cardTitle='Producto 1'
                    cardDescription='Descrpcion de producto 1'
                    buttonName='Add to cart'
                />
                <CardComponent 
                    cardImage=''
                    cardTitle='Producto 1'
                    cardDescription='Descrpcion de producto 1'
                    buttonName='Add to cart'
                />
                <CardComponent 
                    cardImage=''
                    cardTitle='Producto 1'
                    cardDescription='Descrpcion de producto 1'
                    buttonName='Add to cart'
                />
                <ComponentII/>
                <NavBar />
            </div>
        )
    }
}
