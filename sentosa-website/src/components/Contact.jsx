import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div id="Contact" className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-info">
                <div className="contact-block">
                    <h3>Kantor - PT Sentosa Eka Perdana Prima</h3>
                    <p>Jl. Gunung Sahari Raya No 2i,<br />Jakarta Pusat 10720</p>
                    <p>Telp. 021-6292990</p>
                </div>

                <div className="contact-block">
                    <h3>Gudang - PT Sentosa Eka Perdana Prima</h3>
                    <p>Cikarang, Jawa Barat</p>
                </div>

                <div className="contact-block">
                    <h3>Gudang - PT Sentosa Eka Perdana Prima</h3>
                    <p>Surabaya, Jawa Timur</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
