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
                        {Object.keys(tbodyData.results[1].custom_fields).map((_,index) => <th key={index} style={{padding: 10}}>{tbodyData.results[1].custom_fields[_].name}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {tbodyData.results.map((_, index) => <tr key={index}>{_.custom_fields.map((t, index) => <td key={index}>{t.translated_value}</td>)}</tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
