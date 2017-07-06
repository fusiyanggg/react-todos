import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
export default class App extends Component {
    render() {
        return (
//          .row>.col-sm-6.col-sm-offset-3>.panel.panel-default>.panel-heading+.panel-body+.panel-footer
            <div clssName="container">

                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading"></div>
                            <div className="panel-body"></div>
                            <div className="panel-footer"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}