import React from 'react';
import ReactDOM from 'react-dom';
import "./App.sass";
import 'bulma/css/bulma.css'
import Card from "./components/Card";


const App = () => (

    <div>
    
     <Card />
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));

