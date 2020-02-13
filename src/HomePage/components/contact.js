import React from 'react'

class Contact extends React.Component{
    render(){
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-sm-8 col-xs-10">
                        <div class="row justify-content-center">
                            <h3>Contact Me</h3>
                        </div>
                        <form>
                            <div class="form-group">
                                <label>Name</label>
                                <input class="form-control" name="name" placeholder="Enter your name Here" />
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input class="form-control" name="email" placeholder="Enter your name Here" />
                            </div>
                            <div class="form-group">
                                <label>Message</label>
                                <textarea class="form-control" name="comment" placeholder="Your Message"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact