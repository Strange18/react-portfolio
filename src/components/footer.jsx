

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
                    <a href={props.linkedin} target="_blank" rel="noopener noreferrer" class="fa fa-linkedin"></a>
                    <a href={props.github} target="_blank" rel="noopener noreferrer" class="fa fa-github"></a>
                </div>

            </section >
        </>
    )
}

export default Footer