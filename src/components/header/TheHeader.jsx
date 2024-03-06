import './TheHeader.scss';
import logo from '../../assets/logo.png';

const TheHeader = () => {
    return (
        <>
            <header id="header">
                <div className="logo">
                    <a
                        href="https://bootstrapmade.com/"
                        rel="home"
                        title="Bootstrap Templates | Premium &amp; Free Download"
                    >
                        <img alt="" src={logo} />
                    </a>
                </div>
                <div className="preview-devices">
                    <ul>
                        <li
                            className="preview-test preview-devices-active"
                            id="preview-test-desktop"
                            title="Desktop preview of the  SoftLand template"
                        >
                            <a href="#">
                                <i className="fa-solid fa-display"></i>
                            </a>
                        </li>
                        <li
                            className="preview-test"
                            id="preview-test-tablet"
                            title="Tablet preview of the SoftLand template"
                        >
                            <a href="#">
                                <i className="fa-solid fa-tablet-screen-button"></i>
                            </a>
                        </li>
                        <li
                            className="preview-test"
                            id="preview-test-mobile"
                            title="Mobile preview of the SoftLand template"
                        >
                            <a href="#">
                                <i className="fa-solid fa-mobile-screen-button"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="current-template">
                    <a href="https://bootstrapmade.com/demo/Mamba/" title="Previous Template: Mamba" target="_top">
                        <i className="fa-solid fa-chevron-left"></i>
                    </a>
                    <a
                        className="template-home"
                        href="https://bootstrapmade.com/softland-bootstrap-app-landing-page-template/"
                        title="SoftLand Template Home Page"
                    >
                        SoftLand
                    </a>
                    <a href="https://bootstrapmade.com/demo/Appland/" title="Next Template: Appland" target="_top">
                        <i className="fa-solid fa-chevron-right"></i>
                    </a>
                </div>

                <div className="navigate">
                    <a
                        href="https://bootstrapmade.com/demo/templates/SoftLand/"
                        target="_top"
                        title="Hide the demo bar"
                    >
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    <a
                        className="download"
                        href="https://bootstrapmade.com/softland-bootstrap-app-landing-page-template/#download"
                        title="Download the SoftLand Template"
                    >
                        <i className="fa-solid fa-arrow-down"></i>
                        <span>Free Download</span>
                    </a>
                </div>
            </header>
        </>
    );
};

export default TheHeader;
