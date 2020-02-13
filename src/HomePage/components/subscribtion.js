import React from 'react'

class Subscribtion extends React.Component{

    checkIfEmpty(e){
      const val = e.target.value;

      if (val.length > 6 ) {
        alert("email filled");    
      } 
      else {
          alert("Email not filled");
      }
      
    }
    render(){
        return (
            <div class="container">
                <div class="row p-4">
                    <div class="col-md-11 col-xs-11 col-sm-11 justify-content-center flex-center">
                        <form>
                            <div class="form-row">
                                <div class="col-md-9 col-xs-9 col-sm-9">
                                    <input type="email" class="form-control" placeholder="Enter your Email .." onChange={this.checkIfEmpty}/>                           
                                </div>
                                <div class="col-md-1 col-xs-2 col-sm-2">
                                    <button class="btn btn-danger btn-sm" type="submit" >Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Subscribtion