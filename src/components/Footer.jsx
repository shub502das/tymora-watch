import { Link } from "react-router-dom";

const MainFooter = () => {

    let footerTopContent = [
        {
            topimg: "/images/footer_icon1.svg",
            toptext: "Worldwide Shipping",
        },
        {
            topimg: "/images/footer_icon2.svg",
            toptext: "72 Hours Shipment",
        },
        {
            topimg: "/images/footer_icon3.svg",
            toptext: "Free Return & Refund",
        },
        {
            topimg: "/images/footer_icon4.svg",
            toptext: "Certified Watches",
        },
    ];


    return <footer className="footer_sec sec_margin mb-0" id="footer">
        <div className="footer_top bg_blue text-white">
            <div className="container">
                <div className="row align-items-center">
                    {footerTopContent.map((footerTopItem, index) => (
                        <div className="col-md-3" key={index}>
                            <div className="each_item d-flex align-items-center">
                                <img src={footerTopItem.topimg} alt="Footer Top Icon" />
                                <p className="ms-3 mb-0">{footerTopItem.toptext}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="footer_main">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="each_col">
                            <Link to="/"><img src="/images/footer_logo.svg" alt="" /></Link>
                            <p className="cmn_para text_grey mt-3">Tymora Watches offers premium timepieces that blend
                                classNameic elegance with modern craftsmanship. Each watch is meticulously designed to
                                provide timeless style and reliable performance, making it a perfect accessory for any
                                occasion.</p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-start justify-content-md-center">
                        <div className="each_col">
                            <h6 className="cmn_head blue_bar fs-6 pb-2 mb-3">Customer Support</h6>
                            <ul>
                                <li><a href="javascript:void(0);">Help Center</a></li>
                                <li><a href="javascript:void(0);">Shipping</a></li>
                                <li><a href="javascript:void(0);">Returns</a></li>
                                <li><a href="javascript:void(0);">Order Status</a></li>
                                <li><a href="javascript:void(0);">Order Cancelation</a></li>
                                <li><a href="javascript:void(0);">Site Feedback</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-start justify-content-md-center">
                        <div className="each_col">
                            <h6 className="cmn_head blue_bar fs-6 pb-2 mb-3">Company</h6>
                            <ul>
                                <li><a href="javascript:void(0);">Our story</a></li>
                                <li><a href="javascript:void(0);">Our blogs</a></li>
                                <li><a href="javascript:void(0);">Affiliate Program</a></li>
                                <li><a href="javascript:void(0);">Become a Partner</a></li>
                                <li><a href="javascript:void(0);">100% Authorized Dealer</a></li>
                                <li><a href="javascript:void(0);">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex justify-content-start justify-content-md-center">
                        <div className="each_col last_col">
                            <h6 className="cmn_head blue_bar fs-6 pb-2 mb-3">Get in Touch</h6>
                            <p className="cmn_para text_grey mt-3">6B, Ground Floor, Jatindra Mohan Avenue, Girish Park,
                                Kolkata 700001</p>
                            <p><a href="tel:9874254125">+91 9874254125</a></p>
                            <p><a href="mailto:support@tymorawatches.co.in">support@tymorawatches.co.in</a></p>
                            <ul className="social_icons d-flex align-items-center">
                                <li className="d-flex justify-content-center align-items-center bg-white shadow rounded-2">
                                    <a href="javascript:void(0);" className="m-0"><img src="/images/fb_icon.svg" alt="" /></a>
                                </li>
                                <li className="d-flex justify-content-center align-items-center bg-white shadow rounded-2">
                                    <a href="javascript:void(0);" className="m-0"><img src="/images/insta_icon.svg" alt="" /></a>
                                </li>
                                <li className="d-flex justify-content-center align-items-center bg-white shadow rounded-2">
                                    <a href="javascript:void(0);" className="m-0"><img src="/images/twitter_icon.svg" alt="" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer_btm text-center bg_blue text-white py-3">
            <div className="container">
                <p className="m-0">Copyright {(new Date().getFullYear())} Tymora Watches. All Rights Reserved</p>
            </div>
        </div>
    </footer>
};
export default MainFooter;