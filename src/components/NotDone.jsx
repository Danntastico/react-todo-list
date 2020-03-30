import React from 'react';

const NotDone = () => (
    <div className="container">
        <div className="row d-flex align-items-center flex-column">
            <div className="col-md-6 p-3 shadow-sm mt-2 bg-white">
                <div className="todolist not-done">
                    <h2>Todos</h2>
                    <input type="text" className="form-control add-todo" placeholder="Add todo" />
                    <hr/>
                    <ul id="sortable" className="list-unstyled">
                        <li className="ui-state-default">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" value=""/> Take Out the trash
                                </label>
                            </div>
                        </li>
                    </ul>

                    <hr/>
                    <button id="checkAll" className="btn btn-success m-1 float-right">Mark all</button>
                </div>
            </div>
            <div className="col-md-6 p-3 shadow-sm mt-2 bg-white">
                <div className="todolist">
                    <h2>Done</h2>
                    <hr/>
                    <ul id="done-items" className="list-unstyled">
                        <li>Some item <button className="remove-item btn btn-default btn-xs pull-right"><span className="glyphicon pyphicon-remove"></span></button></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default NotDone;