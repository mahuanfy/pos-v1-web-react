import React, { Component } from 'react';
import './App.css';
import './bootstrap/css/bootstrap.min.css'

class Content extends Component {
    render() {
        return (
            <div class="row">

                <div class="col-md-2"></div>

                <div class="col-md-8">
                    <div class="page-header">
                        <h1>欢迎观临线上特训营超市 <small>001分店</small></h1>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                            <div class="thumbnail">
                                <img src={require('./img/ITEM000001.jpg')} alt="..." />
                                <div class="caption">
                                    <h4>名称：雪碧</h4>
                                    <p>编号：ITEM000001</p>
                                    <p>3.00/瓶</p>
                                    <p>
                                        <a href="#" class="btn btn-primary" role="button">加入购物车</a>
                                            <div class="input-group">
                                                <div class="input-group-addon">个数：</div>
                                                <input type="number" class="form-control" id="exampleInputAmount" value='1' />
                                                <div class="input-group-addon">瓶</div>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2"></div>
            </div>
        )
    }
}

export default Content;
