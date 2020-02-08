import React from 'react'
class TopNav extends React.Component{
    render (){
        
        return(
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" href=" " text-color="white">
                    KipTech
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/home">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/home">Pricing</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }   
}

export default TopNav
