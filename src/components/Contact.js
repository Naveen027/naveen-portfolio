import './Contact.css';

function Contact() {
    return (
        <div>
            <div class="container" id='contactid'>
                <div class="row">

                    <div class="col-lg-12">
                        <div class="heading">
                            <h4>Contact</h4>
                        </div>

                    </div>



                    <div class="col-lg-3">
                        <div class="box1">
                            <i class="fa fa-envelope"></i>
                            <div class="text">
                                <h5>EMAIL</h5>
                                <h6>belladnaveen027@gmail.com</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3">
                        <div class="box1">
                            <i class="fa fa-mobile"></i>
                            <div class="text">
                                <h5>PHONE</h5>
                                <h6>+91 9019040426</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3">
                        <div class="box1">
                            <a href="https://www.linkedin.com/in/naveen-bellad-b0a5521b1/">
                                <i class="fa fa-linkedin"></i>
                            </a>
                            <div class="text">
                                <h5>LINKEDIN</h5>
                                <a href="https://www.linkedin.com/in/naveen-bellad-b0a5521b1/">
                                    <h6>CONNECT</h6>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3">
                        <div class="box1">
                            <a href="https://wa.me/+919019040426">
                                <i class="fa fa-whatsapp"></i>
                            </a>
                            <div class="text">
                                <h5>WHATSAPP</h5>
                                <a href="https://wa.me/+919019040426">
                                    <h6>CHAT</h6>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;