import React from 'react'
import BackPhoto from '../../Assets/images/backgroundkali.png'


class AboutMe extends React.Component{
    render(){
        return (
            <div class="container">
                
                <div class="row p-4 justify-content-center">
                   <h3 text-align="center" font-size="10rem">About Myself</h3>
                </div>
                <div class="row m-3 p-4">
                    <div class="col-md-4 col-sm-8 col-xs-10">
                        <img src={BackPhoto} alt="my pic"  class="img-fluid rounded"/>
                    </div>
                    <div class="col-md-6 col-sm-8 col-xs-10 flex-center">
                       <p class="justify-content-center">
                           I am Kiprotich Collins from Kericho County,Rift Valley Province ,Kenya. I graduated from University of
                           embu with a bachelors degree in Computer Science.I am a proffesional 
                           software developer, data scientist and cyber security expert.I have 3 years experience in programming 
                           with PHP language and Javascript, since my university education,1 year using java and pyhton.
                       </p>
                    </div>
                </div>
                <hr/>
            </div>
            
        )
    }
}

export default AboutMe