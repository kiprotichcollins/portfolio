import React from 'react'
import 'jquery/dist/jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import AboutMe from './briefabout'
import MyEducation from './education'
import Projects from './projects'
import MySkills from './Skills'
import Contact from './contact'
import Subscribtion from './subscribtion'
import './style.css'


class HomePage extends React.Component{
    render(){
        return (
            <div id="mainbody">
                <div id="contentbody">
                    <div><AboutMe></AboutMe></div>
                    <div><MyEducation></MyEducation></div>
                    <div><Projects></Projects></div>
                    <hr px-3></hr>
                    <div><MySkills></MySkills></div>
                    <hr px-3></hr>
                    <div><Subscribtion></Subscribtion></div>
                    <hr px-3></hr>
                    <div><Contact></Contact></div>
                </div>
            </div>
            
        );
    }
}

export default HomePage