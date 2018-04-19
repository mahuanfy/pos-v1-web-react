import React, { Component } from 'react';
import './App.css';
import './bootstrap/css/bootstrap.min.css'

class Content extends Component {
    shopping(barcode){
        alert(barcode+"加入购物车成功");
        
    }
    render() {
        var count = this.props.datbase.length
        return (
            <div class="row">

                <div class="col-md-2"></div>

                <div class="col-md-8">
                    <div class="page-header">
                        <h1>欢迎观临线上特训营超市 <small>001分店</small></h1>
                    </div>
                    <div class="row">
                        {this.props.datbase.map(item => {
                            return (<div class="col-sm-6 col-md-4">
                                <div class="thumbnail">
                                    <img class='img' src={require('./img/'+item.barcode+'.jpg')} alt="..." />
                                    <div class="caption">
                                        <h4>名称：{item.name}</h4>
                                        <p>编号：{item.barcode}</p>
                                        <p>单价：{item.price}元/{item.unit}</p>
                                        <p>
                                        <button type="button" class="btn btn-primary" onClick={this.shopping.bind(this,item.barcode)}>加入购物车</button>
                                            <div class="input-group unit">
                                                <div class="input-group-addon">个数：</div>
                                                <input type="number" class="form-control" id="exampleInputAmount" placeholder='1' />
                                                <div class="input-group-addon">{item.unit}</div>
                                            </div>
                                        </p>
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

export default Content;
