import './Home.scss';
import phone_1 from '../../assets/phone_1.png';
import phone_2 from '../../assets/phone_2.png';
import TheBanner from '../banner/TheBanner';

const Home = () => {
    return (
        <>
            <section className="hero-section" id="hero">
                <div className="container">
                    <TheBanner />
                    <div className="row align-items-center">
                        <div className="col-12 hero-text-image">
                            <div className="row">
                                <div className="col-lg-8 text-center text-lg-start">
                                    <h1 data-aos="fade-right" className="aos-init aos-animate">
                                        Promote Your App with SoftLand
                                    </h1>
                                    <p className="mb-5 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                    <p
                                        data-aos="fade-right"
                                        data-aos-delay="200"
                                        data-aos-offset="-500"
                                        className="aos-init aos-animate"
                                    >
                                        <a href="#" className="btn btn-outline-white">
                                            Get started
                                        </a>
                                    </p>
                                </div>
                                <div className="col-lg-4 iphone-wrap">
                                    <img
                                        src={phone_1}
                                        alt="Image"
                                        className="phone-1 aos-init aos-animate"
                                        data-aos="fade-right"
                                    />
                                    <img
                                        src={phone_2}
                                        alt="Image"
                                        className="phone-2 aos-init aos-animate"
                                        data-aos="fade-right"
                                        data-aos-delay="200"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-md-5 aos-init aos-animate" data-aos="fade-up">
                            <h2 className="section-heading">Save your time to using SoftLand</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
                            <div className="feature-1 text-center">
                                <div className="wrap-icon icon-1">
                                    <i className="fa-solid fa-user-group"></i>{' '}
                                </div>
                                <h3 className="mb-3">Explore Your Team</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
                            </div>
                        </div>
                        <div className="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            <div className="feature-1 text-center">
                                <div className="wrap-icon icon-1">
                                    <i className="fa-regular fa-sun"></i>{' '}
                                </div>
                                <h3 className="mb-3">Digital Whiteboard</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
                            </div>
                        </div>
                        <div className="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <div className="feature-1 text-center">
                                <div className="wrap-icon icon-1">
                                    <i className="fa-solid fa-chart-simple"></i>{' '}
                                </div>
                                <h3 className="mb-3">Design To Development</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
