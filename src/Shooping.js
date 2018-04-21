import React, { Component } from 'react';
import './App.css';
import './bootstrap/css/bootstrap.min.css'

class Shooping extends Component {
        constructor(){
          super()
          this.state = {
            value:"1",
            values:[],
            name:[]
          }
        }
    submitShooping(){

        this.props.submitShooping()
    }
    render() {
        var values = this.props.values
        return (
            <div class="row">
            <hr/>
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <div  class="page-header">
                    <a name="tips"></a>
                        <h1>我的购物车<button  type="button" class=" btn  btn-success button_right" onClick={this.submitShooping.bind(this)} >
                        <span class="glyphicon glyphicon-log-in"></span> 提交订单</button>
                        </h1>
                    </div>
                    <div class="row">
                        {this.props.name.map(item => {
                            return (<div class="col-sm-6 col-md-4">
                                <div class="thumbnail">
                                    <img class='img' src={require('./img/'+values[item].key+'.jpg')} alt="..." />
                                    <div class="caption">
                                        <h4>名称：{values[item].key}</h4>
                                        <p>编号：{values[item].value}</p>
                                    </div>
                                </div>
                            </div>)
                        })}
                        
                    </div>
                </div>
                <div class="col-md-2"></div>
                
            </div>
        )
    }
}

export default Shooping;
