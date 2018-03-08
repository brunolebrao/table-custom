import React, {Component} from 'react';
import './App.css';
import {theadData, tbodyData} from "./data";

class App extends Component {
    render() {

        console.log(tbodyData);

        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        {theadData.map((item, key) => <th key={key} style={{padding: 10}}>{item.translated_name}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td> Aqui o tbodyData um array que chama custom_fields</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
