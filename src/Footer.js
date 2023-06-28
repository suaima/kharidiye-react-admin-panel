import React from "react";

function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="footer mt-auto">
                <div className="copyright bg-white">
                    <p>
                        Copyright © <span id="ec-year" />
                        <a
                            className="text-primary"
                            href="#"
                            target="_blank"
                        >
                            {" "}
                            Admin Admin Dashboard
                        </a>
                        . All Rights Reserved.
                    </p>
                </div>
            </footer>

        </>

    );
}

export default Footer;