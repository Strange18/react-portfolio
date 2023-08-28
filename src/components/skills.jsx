import './skill.css'

function Skill(props) {
    const { data } = props;
    return (<>
        <section class='skills' id='skill'>

            <div className="skill">
                <h3 class='skill-heading'>Skills</h3>
                {data.map(element => (
                    <p>{element}</p>
                ))}

            </div>

        </section >
        <hr />

    </>

    )
}

export default Skill;