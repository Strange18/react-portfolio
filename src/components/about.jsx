

function About(props) {
    return (<>
        <section class="about" id="about">

            <div class="about-me-description">
                <h2>A little bit about Me</h2><br />
                <p> {props.about.split("\n").map((line) => (
                    <>
                        {line}
                        <br />
                    </>
                ))} </p>
            </div>
        </section>
        <hr></hr>
    </>
    )
}

export default About