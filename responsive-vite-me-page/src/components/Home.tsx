import './css/Home.css'

function Home() {
    return (
        <section className="home">
            <h1>Hi! I'm</h1>
            <div className="name-container">
                <span className="name-item"><h1>J</h1>ohn <h1>A</h1>ndre <h1>Y</h1>Yap</span>
            </div>
            <h3>Software Engineer</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quasi ipsam exercitationem iure incidunt architecto, et hic quam nesciunt perspiciatis, quidem dolores molestiae. Iste ratione magni necessitatibus. Ab, rem rerum.</p>
            
            <div className="button-container">
                <button><a href="#">About Me</a></button>
                <button><a href="#">Projects</a></button>
            </div>

            <div className="icon-container">
                <a href="#"><i className='bx bxl-github'></i></a>
                <a href="#"><i className='bx bxl-facebook-circle'></i></a>
                <a href="#"><i className='bx bxl-linkedin'></i></a>
            </div>
        </section>
    )
}

export default Home