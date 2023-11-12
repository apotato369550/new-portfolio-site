import './scss/MyProjects.scss'
import githubLogo from '../assets/githubLogo.svg'
function MyProjects() {
    return (
        <section className="my-projects">
            <h1>Check out my projects on Github! </h1>

            
            <img src={githubLogo} alt="github logo" className="github-logo"/>

            <ul>
                <li><a href="https://github.com/yourusername/project1">Project 1</a></li>
                <li><a href="https://github.com/yourusername/project2">Project 2</a></li>
                <li><a href="https://github.com/yourusername/project3">Project 3</a></li>
            </ul>
        </section>
    )
}

export default MyProjects