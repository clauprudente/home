import React from "react";

  const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Interests = () => {
  return (
    <div id="interests" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 pb-4 text-center">Interests</h1>
            {<p className="lead text-center">
              Outside of web development, I love to do pilates and read!
            </p>}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                  <p className="lead text-center" style={{fontSize:'28px'}}>Pilates</p>
                  <img alt="Pilates icon" src="https://img.icons8.com/ultraviolet/128/000000/pilates.png"/>
                </div>
                <div className="col text-center">
                  <p className="lead text-center" style={{fontSize:'28px'}}>Reading</p>
                  <img alt="Book icon" src="https://img.icons8.com/ultraviolet/128/000000/read.png"/>    
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Interests;
