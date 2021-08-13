import React from 'react';
import './style.css';

class ComponentII extends React.Component {
   constructor() {
       super();

       this.state = {
           name: "Pepe",
           age: "18"
       };
   }


    render() {
        return (
            <div className='App'>
                <h1>Hello Word</h1>
                <p>{this.state.name}</p>
            </div>
        );
    }
}
export default ComponentII;