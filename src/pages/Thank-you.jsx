import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const Thankyoupage = () => {
    const [fullName, setFullName] = useState("");
    const [orderId, setOrderId] = useState("");
    const { clearCart } = useCart();

    useEffect(() => {
        const saved = localStorage.getItem("checkoutData");
        const savedId = localStorage.getItem("orderId");

        if (saved && savedId) {
            const data = JSON.parse(saved);
            setFullName(`${data.fname} ${data.lname}`);
            setOrderId(savedId);
            
            localStorage.removeItem("checkoutData");
            localStorage.removeItem("orderId");
            
            clearCart();
        }
    }, []);


    return (
        <div className="thanks_sec text-center d-flex justify-content-center align-items-center min-vh-100">
            <div className="container">
                <div className="content_sec p-4 mx-auto">
                    <img src="/images/thanks_img.png" alt="" className="mx-auto mb-4" />
                    <p className="mb-0 fs-6 text_grey">
                        Thank You <span className="customer_name fw-bold text_blue">{fullName} ({orderId})</span> for purchasing from our Store. You will soon receive a confirmation email in your provided email ID. Additionally, we’re currently preparing your order and will let you know as soon as it ships.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Thankyoupage;
