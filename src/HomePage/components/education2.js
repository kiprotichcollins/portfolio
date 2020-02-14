import React from 'react'
import {MDBContainer, MDBRow} from 'mdbreact'
import UoemImage from '../../Assets/images/education/uoem.jpeg'
import LongisaImage from '../../Assets/images/education/longisahighschool.jpeg'
import moringaImage from '../../Assets/images/education/moringa.png'
import IstImage from '../../Assets/images/education/ist.png'

class Education3 extends React.Component{
    render(){
        const mediumprogress = {
            width:'25%'
        }

        const fullprogress = {
            width:'100%'
        }
        return(
            <MDBContainer className="py-4">
                <MDBRow className="flex-center justify-content-center pb-3">
                    <h3>Education</h3>
                </MDBRow>
                        <div class="accordion md-accordion accordion-1" id="accordionEx23" role="tablist">
                            <div class="card">
                                <div class="card-header black lighten-3 z-depth-1" role="tab" id="heading96">
                                <h5 class="text-uppercase mb-0 py-1">
                                    <a class="white-text font-weight-bold" data-toggle="collapse" href="#collapse96" aria-expanded="true"
                                    aria-controls="collapse96">
                                    Institute of Software Technologies
                                    </a>
                                </h5>
                                </div>
                                <div id="collapse96" class="collapse show" role="tabpanel" aria-labelledby="heading96"
                                data-parent="#accordionEx23">
                                <div class="card-body">
                                    <div class="row my-4">
                                    <div class="col-md-8">
                                        <h2 class="font-weight-bold mb-3 black-text">January 2019 - July 2019</h2>
                                        <p>Location : <i>ParkLands,Nairobi,Kenya</i></p>
                                        <p class="">Course : <i>Diploma in Information Systems and Ethical Hacking</i></p>
                                        <p class="mb-0">Progress : Ongoing <b>25%</b></p>
                                        <div class="progress">
                                          <div class="progress-bar" role="progressbar" style={mediumprogress} aria-valuenow="25"
                                           aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mt-3 pt-2">
                                        <div class="view z-depth-1">
                                        <img src={IstImage} alt="" class="img-fluid"/>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header black lighten-3 z-depth-1" role="tab" id="heading97">
                                <h5 class="text-uppercase mb-0 py-1">
                                    <a class="collapsed font-weight-bold white-text" data-toggle="collapse" href="#collapse97"
                                    aria-expanded="false" aria-controls="collapse97">
                                    University Of Embu
                                    </a>
                                </h5>
                                </div>
                                <div id="collapse97" class="collapse" role="tabpanel" aria-labelledby="heading97"
                                data-parent="#accordionEx23">
                                <div class="card-body">
                                    <div class="row my-4">
                                    <div class="col-md-8">
                                        <h2 class="font-weight-200 mb-3 black-text">August 2014 - April 2019</h2>
                                        <p>Location : <i>Along Embu-Meru Highway,Embu,Kenya</i></p>
                                        <p class="">Course : <i>Bachelor of Science in Computer Science</i></p>
                                        <p class="mb-0">Progress:Successfully Completed <b>100%</b></p>
                                        <div class="progress">
                                          <div class="progress-bar" role="progressbar" style={fullprogress} aria-valuenow="100"
                                           aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mt-3 pt-2">
                                        <div class="view z-depth-1">
                                        <img src={UoemImage} alt="" class="img-fluid"/>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header black lighten-3 z-depth-1" role="tab" id="heading98">
                                <h5 class="text-uppercase mb-0 py-1">
                                    <a class="collapsed font-weight-bold white-text" data-toggle="collapse" href="#collapse98"
                                    aria-expanded="false" aria-controls="collapse98">
                                    Moringa code school
                                    </a>
                                </h5>
                                </div>
                                <div id="collapse98" class="collapse" role="tabpanel" aria-labelledby="heading98"
                                data-parent="#accordionEx23">
                                <div class="card-body">
                                    <div class="row my-4">
                                    <div class="col-md-8">
                                        <h2 class="font-weight-bold mb-3 black-text">May 2017</h2>
                                        <p>Location : <i>Ngong road,Ngong plaza,Nairobi,Kenya</i></p>
                                        <p class="">Course:<i>Introduction to computer programming </i></p>
                                        <p class="mb-0">Progress : Successfully Completed <b>100%</b></p>
                                        <div class="progress">
                                          <div class="progress-bar" role="progressbar" style={fullprogress} aria-valuenow="100"
                                           aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mt-3 pt-2">
                                        <div class="view z-depth-1">
                                        <img src={moringaImage} alt="" class="img-fluid"/>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header black lighten-3 z-depth-1" role="tab" id="heading98">
                                <h5 class="text-uppercase mb-0 py-1">
                                    <a class="collapsed font-weight-bold white-text" data-toggle="collapse" href="#collapse98"
                                    aria-expanded="false" aria-controls="collapse98">
                                    Longisa High School
                                    </a>
                                </h5>
                                </div>
                                <div id="collapse98" class="collapse" role="tabpanel" aria-labelledby="heading98"
                                data-parent="#accordionEx23">
                                <div class="card-body">
                                    <div class="row my-4">
                                    <div class="col-md-8">
                                        <h2 class="font-weight-bold mb-3 black-text">May 2017</h2>
                                        <p>Location : <i>Bomet-Narok Highway,Bomet,Kenya</i></p>
                                        <p class=""><i>Secondary School Education </i></p>
                                        <p class="mb-0">Progress : Successfully Completed <b>100%</b></p>
                                        <div class="progress">
                                          <div class="progress-bar" role="progressbar" style={fullprogress} aria-valuenow="100"
                                           aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mt-3 pt-2">
                                        <div class="view z-depth-1">
                                        <img src={LongisaImage} alt="" class="img-fluid"/>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
            </MDBContainer>
           )
    }
}

export default Education3