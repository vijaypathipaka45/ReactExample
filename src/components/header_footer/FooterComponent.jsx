import React,{ Component } from 'react';


class Footer extends Component{
    
render(){


    return(
        <div className="footer">
            <div className="container">
                <div className="row jsutify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled"></ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="contactus.html">ContactUs</a></li>
                    </div>
                    <div className="col-7 col-sm-5">
                        <address>
                            Bangalore electronic city<br/>
                            Konappa Agraharaha infycity<br/>
                            Infosys ECC level-1 #58<br/>
                            <i className="fa fa-phone fa-lg"></i>:90008888098
                            <i className="fa fa-fax fa-lg"></i>:9000888098
                            <i className="fa fa-envelope fa-lg"></i>:<a hreff="mailto:">
                                user@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-sel">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google"></a>
                            <a className="btn btn-social-icon btn-facebook"></a>
                            <a className="btn btn-social-icon btn-twiter"></a>
                            <a className="btn btn-social-icon btn-linkedin"></a>
                            <a className="btn btn-social-icon btn-google"></a>
                            <a className="btn btn-social-icon" hreff="mailto:"></a>
                         </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>@ copyriht from vijay kumar</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


}



export default  Footer;

// function Footer(props){

//     return(
//         <div>footer function</div>
//     );
// }