import './Services.css';



function Services() {

    return (

        <div>
            <div className="container">
                <div className="row">

                    <div className="col-lg-6">
                        <div className="title">
                            <h4>Experience</h4>
                        </div>
                        <div className="edu">
                            <ul>
                                <li>
                                    <img src="titleicon.png" alt='' />
                                </li>
                                <li>
                                    <h5>Worked as System Engineer on ICICI project,</h5>
                                    <h6>Infosys Limited.</h6>
                                    <h6>2022-2024(2 yrs)</h6>
                                </li>
                            </ul>
                        </div>

                        <div className='roles'>
                            <h5>Roles and Responsibility:</h5>
                            <ul>
                                <li><h6>Converted the UI layout to complete HTML webpage. </h6></li>
                                <li> <h6>Ensuring web pages is compatible to Laptops,Tablet and Mobile device responsive.</h6></li>
                                <li> <h6>API integration in the front-end Modules.</h6></li>
                                <li><h6>Integration of Thrid party Libraries like Chartjs.</h6></li>
                                <li>  <h6>Build Resuable code for future use.</h6></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6" >
                        <div className="title">
                            <h4>Education</h4>
                        </div>
                        <div className='edu'>
                            <ul>
                                <li><img src="titleicon.png" alt='' /></li>
                                <li>
                                    <h6>Appa Institue of Engineering and Technology</h6>
                                    <h6>2017-2021</h6>
                                    <h4>75%</h4>
                                </li>
                            </ul>

                            <ul>
                                <li><img src="titleicon.png" alt='' /></li>
                                <li>
                                    <h6>Chandrakant Patil memorial College.</h6>
                                    <h6>2015-2017</h6>
                                    <h4>79%</h4>
                                </li>
                            </ul>

                            <ul>
                                <li><img src="titleicon.png" alt='' /></li>
                                <li>
                                    <h6>Tiny Pearls School</h6>
                                    <h6>2014-2015</h6>
                                    <h4>79%</h4>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services;