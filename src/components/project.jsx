

function Project(props) {
    const { projects } = props;
    return (<>
        <section class="projects" id="projects">
            <h2 class="project-heading">Projects</h2>
            <div class="card-box">
                {projects.map(item => (
                    <div class="card">
                        <img class="card-image" src="background.avif" alt="" />


                        <h1>{item.title}</h1>
                        <p>{item.description}</p>


                        <div class="links">
                            <a href="#" target="_blank" class="fa fa-github"></a>
                            <a href="#" target="_blank" class="fa fa-globe"></a>
                        </div>

                    </div>
                ))}
            </div>
        </section>
        <hr></hr>
    </>

    )
}

export default Project