import './TheFooter.scss';
const TheFooter = () => {
    return (
        <>
            <footer className="footer" role="contentinfo">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4 mb-md-0">
                            <h3>About SoftLand</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur,
                                numquam aperiam dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti
                                minus animi.
                            </p>
                            <p className="social">
                                <a href="#">
                                    <i className="fa-brands fa-twitter"></i>{' '}
                                </a>
                                <a href="#">
                                    <i className="fa-brands fa-facebook"></i>{' '}
                                </a>
                                <a href="#">
                                    <i className="fa-brands fa-instagram"></i>{' '}
                                </a>
                                <a href="#">
                                    <i className="fa-brands fa-linkedin"></i>{' '}
                                </a>
                            </p>
                        </div>
                        <div className="col-md-7 ms-auto">
                            <div className="row site-section pt-0">
                                <div className="col-md-4 mb-4 mb-md-0">
                                    <h3>Navigation</h3>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="#">Features</a>
                                        </li>
                                        <li>
                                            <a href="#">Blog</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4 mb-4 mb-md-0">
                                    <h3>Services</h3>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">Team</a>
                                        </li>
                                        <li>
                                            <a href="#">Collaboration</a>
                                        </li>
                                        <li>
                                            <a href="#">Todos</a>
                                        </li>
                                        <li>
                                            <a href="#">Events</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4 mb-4 mb-md-0">
                                    <h3>Downloads</h3>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">Get from the App Store</a>
                                        </li>
                                        <li>
                                            <a href="#">Get from the Play Store</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center text-center">
                        <div className="col-md-7">
                            <p className="copyright">© Copyright SoftLand. All Rights Reserved</p>
                            <div className="credits">
                                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default TheFooter;
