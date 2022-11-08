import React from 'react'

function Footer() {
  return (
<footer className="text-center text-lg-start bg-light text-muted">
    {/* <!-- Section: Social media --> */}
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* <!-- Left --> */}
        <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
        </div>
        <div className="social-media-logo">
            <a href="" className="me-4 text-reset">
                <i><img src="./images/icons/facebook-logo.png" width="40px" height="40px"></img></i>
            </a>
            <a href="" className="me-4 text-reset">
                <i><img src="./images/icons/twitter-logo.png" width="40px" height="40px"></img></i>
            </a>
            <a href="" className="me-4 text-reset">
                <i><img src="./images/icons/instagram-logo.png" width="40px" height="40px"></img></i>
            </a>
            <a href="" className="me-4 text-reset">
                <i><img src="./images/icons/linkedin-logo.png" width="40px" height="40px"></img></i>
            </a>
        </div>
    </section>
    <section>
        <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">

                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4 tw">
                    <img src='./images/icons/logo941x1147transparent.png' alt="logo50x60.jpg" height={'30px'}/>
                        <i className="fas fa-gem me-3"></i>TWEMMAN
                    </h6>
                    <p>
                        Just BELIEVE that ...
                    </p>
                    <p>
                        WE CAN MAKE IT ...
                    </p>
                    <p>
                        STEEL ...
                    </p>
                </div>


                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        Quick links
                    </h6>
                    <p>
                        <a href="#!" className="text-reset">Boutique sport</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Boutique déco</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Contact us</a>
                    </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        Contact
                    </h6>
                    <p><i className="fas fa-home me-3"></i>Zone industrielle, ZAGHOUAN</p>
                    <p>
                        <i className="fas fa-envelope me-3"></i>
                        twemman@hotmail.com
                    </p>
                    <p><i className="fas fa-phone me-3"></i> +216 28 550 047</p>
                    <p><i className="fas fa-print me-3"></i> +216 72 680 892</p>
                </div>
            </div>
        </div>
    </section>

    <div className="text-center p-4" style={{backgroundColor: 'lightblue'}}>
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="#">twemman.com</a>
    </div>
</footer>
  )
}

export default Footer