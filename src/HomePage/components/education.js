import React from 'react'

class MyEducation extends React.Component{
    render(){
        return (
            <div class="container ">
                    <div class="row m-3 p-3 justify-content-center">
                        <h3 >Education and Certifications</h3>
                    </div>
                    <div class="row flex-center justify-content-center py-3">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center px-3">
                            Institute of Software Technologies
                               
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                            University of Embu
                                <span class="badge badge-primary badge-pill">4 years</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                            Moringa School
                                <span class="badge badge-primary badge-pill">1 month</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                            Longisa High School
                                <span class="badge badge-primary badge-pill">4 years</span>
                            </li>
                        </ul>
                    </div>
                
            </div>
        )
    }
}

export default MyEducation