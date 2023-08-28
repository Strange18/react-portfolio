

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
                            {item.github && (<a href={item.github} target="_blank" class="fa fa-github"></a>
                            )}
                            {item.website && (<a href={item.website} target="_blank" class="fa fa-globe"></a>
                            )}
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