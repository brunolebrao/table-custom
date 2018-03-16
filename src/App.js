import React, {Component} from 'react';
import './App.css';
import {theadData, tbodyData} from "./data";

class App extends Component {

    handleScroll = () => {

        if (this.scroller && this.scroller.scrollTop + window.innerHeight >= this.scroller.scrollHeight) {
            console.log(
                'chama varias vezes depois da condição como posso parar assim que chamar a prim' +
                'eira vez?'
            );
        }

    };

    render() {

        return (
            <div>
                <div
                    id='containerDiv'
                    onScroll={this.handleScroll}
                    ref={(scroller) => {
                        this.scroller = scroller
                    }}
                    style={{
                        width: 300,
                        height: 200,
                        overflow: 'auto'
                    }}>
                    <table>
                        <thead>
                            <tr>
                                <th>Teste</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                            <tr>
                                <td>Scroll</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;
