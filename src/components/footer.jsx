

function Footer(props) {
    return (
        <>
            <section id="footer" class="footer">
                <div class="footer-info">
                    <p class="footer-logo">{props.logo}</p>
                    <span class="footer-email">{props.email}</span>
                    <br />
                    <span class="footer-phone">{props.phone}</span>
                </div>

                <div class="copyright">
                    All Right Reserved &copy; 2023
                </div>
                <div class="social-media">
                    <a href="#" target="_blank" class="fa fa-linkedin"></a>
                    <a href="mailto: {props.email}" target="_blank" class="fa fa-envelope"></a>
                    <a href="#" target="_blank" class="fa fa-github"></a>
                    <a href="tel: {props.phone}" target="_blank" class="fa fa-phone"></a>
                </div>

            </section>
        </>
    )
}

export default Footer