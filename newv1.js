import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
constructor() {
    super();

    this.state = {person: []};
}

componentDidMount() {
    fetch('https://randomuser.me/api/?results=500', {mode: 'no-cors'})
            .then(results => {
                return results.json();
            })
            .then(data => {
                let person = (data.results || []).map((pic) => {
                    return(
                            <div key={pic.results}></div>
                            )
                })

                this.setState({person: person});
                console.log("state", this.state.person);
            })
}

render() {

    return (
            <div>
                {this.state.person}
            </div>
    );
}