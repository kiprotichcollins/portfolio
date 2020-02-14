import React from 'react'
import { MDBContainer, MDBRow, MDBCard, MDBCardHeader, MDBCardBody } from 'mdbreact';

class ProjectPage extends React.Component{
    render(){
        return(
            <MDBContainer className="pt-4">
                <MDBRow className="justify-content-center flex-center">
                   <h3>Projects Done and on Progress</h3>
                </MDBRow>
                <MDBCard>
                    <MDBCardHeader className="justify-content-center flex-center">
                        <h4>Projects Heading</h4>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <p>Projects description and the sample pic of it</p>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>         
            
        );
    }
}

export default ProjectPage