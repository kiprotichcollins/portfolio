import React from 'react'
import {MDBCol,MDBContainer,MDBFooter, MDBRow} from 'mdbreact'

class Footer extends React.Component{
    render(){
        return (
           <MDBFooter color="unique-color-dark" className="font-small pt-4 mt-4">
               <MDBContainer fluid className="text-center text-md-left">
                   <MDBRow>
                       <MDBCol md="6">
                           <h5 className="title">KIPTECH</h5>
                           <p>
                               This is my portfolio ellaborating more about me ,
                               this includes my education, proffessional skills and projects done
                           </p>
                       </MDBCol>
                       <MDBCol md="6">
                           <h5 className="title">Links</h5>
                           <ul>
                               <li className="list-unstyled">
                                   <a href="/">Home</a>
                               </li>
                               <li className="list-unstyled">
                                   <a href="/projects">Projects</a>
                               </li>
                               <li className="list-unstyled">
                                   <a href="/">Blog</a>
                               </li>
                           </ul>
                       </MDBCol>
                   </MDBRow>
               </MDBContainer>
               <div className="footer-copyright text-center py-3">
                   <MDBContainer fluid>
                       &copy;{new Date().getFullYear} Copyright:<a href="#!">Kiptech.com</a>
                   </MDBContainer>
               </div>
           </MDBFooter>
        );
    }
}

export default Footer