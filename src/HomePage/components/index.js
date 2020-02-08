import React from 'react'
import 'jquery/dist/jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import TopNav from './topnav'
import AboutMe from './briefabout'
import MyEducation from './education'
import Projects from './projects'

class HomePage extends React.Component{
    render(){
        return (
            <div>
                <TopNav></TopNav>
                <div><AboutMe></AboutMe></div>
                <div><MyEducation></MyEducation></div>
                <div><Projects></Projects></div>
            </div>
            
        );
    }
}

export default HomePage