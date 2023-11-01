import './scss/GithubLogo.scss'
import githubLogo from '../assets/githubLogo.svg'

function GithubLogo() {

    return (
        <section className="github-logo">
            <div className="image-background">
                <img src={githubLogo} alt="picture of github logo" className="photo-of-logo" />
            </div>
        </section>
    )
}

export default GithubLogo