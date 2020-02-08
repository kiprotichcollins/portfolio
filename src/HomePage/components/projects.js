import React from 'react'
import 'mdbreact/dist/css/mdb.css'
class Projects extends React.Component{
    render(){
        return (
            <div class="container">
                <hr class="mx-4 px-4"/>
                <div class="row m-3 p-3 flex-center justify-content-center">
                    <h3 class="justify-content-center">Projects</h3>
                </div>
                <div class="row flex-center justify-content-center">
                    <ul class="list-group">
                        <li class="list-group-item">Machinery Inventory System</li>
                        <li class="list-group-item">Trip Analysis Checker System</li>
                        <li class="list-group-item">Human Resource System</li>
                    </ul>          
                </div>
            </div>          
        );
    }
}

export default Projects