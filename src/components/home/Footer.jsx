import React from "react";

  const Footer = () => {
  return (
    <div id="contact" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'#fff'}}>
    <div className="container container-fluid">
          <div className="d-inline align-self-center">    
    <footer style={{backgroundColor:'#fff'}} className="mt-auto py-3 text-center">
      {<strong> &copy; 2021 </strong>}
      <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by{" "}
      <a
        className="badge badge-dark"
        rel="noopener"
        href="https://github.com/clauprudente"
        aria-label="My GitHub"
      >
       Cláudia Prudente
      </a>{" "}
      using <i className="fab fa-react"></i>
    </footer>
    </div>
      </div>
      </div>
  );
};

export default Footer;
