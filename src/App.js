import React, { Component } from 'react';
import './App.css';
import Content from './Content'
import Shooping from './Shooping';

class App extends Component {
    constructor() {
        super()
        this.state = {
            values: [],
            name: [],
            datbase: [
                {
                    barcode: 'ITEM000000',
                    name: '可口可乐',
                    unit: '瓶',
                    price: 3.00
                },
                {
                    barcode: 'ITEM000001',
                    name: '雪碧',
                    unit: '瓶',
                    price: 3.00
                },
                {
                    barcode: 'ITEM000002',
                    name: '苹果',
                    unit: '斤',
                    price: 5.50
                },
                {
                    barcode: 'ITEM000003',
                    name: '荔枝',
                    unit: '斤',
                    price: 15.00
                },
                {
                    barcode: 'ITEM000004',
                    name: '电池',
                    unit: '个',
                    price: 2.00
                },
                {
                    barcode: 'ITEM000005',
                    name: '方便面',
                    unit: '袋',
                    price: 4.50
                }
            ]
        }
    }

    submit(value, name) {
        var input = this.state.values;
        name.map(item => {
            input[item] = {}
            input[item].key = value[item].key
            input[item].value = value[item].value
        })
        this.setState({ values: input })
        this.setState({ name: name })
    }
    submitShooping() {
        var input = this.state.values;
        var name = this.state.name;
        var data = [];
        name.map(item => {
            if (input[item].value == 1)
                data.push(input[item].key )
            else
                data.push(input[item].key + "-" + input[item].value)
        })
        console.log(data)
        alert(data)
    }
    render() {
        return (
            <div>
                <Content datbase={this.state.datbase} submit={this.submit.bind(this)} />
                <Shooping name={this.state.name} values={this.state.values} submitShooping={this.submitShooping.bind(this)} />
            </div>
        )
    }
}

export default App;
