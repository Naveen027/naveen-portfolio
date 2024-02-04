import './Home.css';

function Home() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6" id="avatarbg">
                        <div className="mine">
                            <img src='mine.png' alt='avatar'/>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="info">
                            <div className="text">
                                <h4 style={{marginLeft:'16%'}}>Hii,I Am <strong >Naveen Bellad</strong> </h4>
                                <h5 className="frontend">I'm Front End Developer/Web Developer.</h5>
                                <h5 className="imagination">"Where imagination meets creativity"</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;