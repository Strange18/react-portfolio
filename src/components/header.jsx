

function Header(props) {
    return (
        <>
            <section class="navbar-section">
                <div class="navbar-logo">
                    <p>{props.logo}</p>
                </div>
                <div class="navbar">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Project</a>
                    <a href="#footer">Contact</a>
                    <a href="#">Resume</a>

                </div>
            </section>
            <section class="home" id="home">
                <p class="home-content">{props.intro.split('\n').map((line) => (
                    <>
                        {line}
                        < br />
                    </>
                ))}</p>
            </section>
            <hr></hr>
        </>
    )
}

export default Header