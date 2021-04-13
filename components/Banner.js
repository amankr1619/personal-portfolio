import { Link } from 'react-scroll';

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Hi, I'm Aman</h1>
            </header>
            <div className="content">
                <p>A responsive site template designed by HTML5 UP<br />
                and released under the Creative Commons.</p>
                <ul className="actions">
                    <li><Link activeClass="active" to="one" spy={true} smooth={true} duration={1000} className="button next scrolly">Get Started</Link></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
