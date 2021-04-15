import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

const Index = () => (
    <Layout>
        <div>
            <Banner />
            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/about.jpg')`}}>
                        <header className="major">
                            <h3>About</h3>
                            <p>Learn More about me</p>
                        </header>
                        <Link href="/about"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/projects.jpg')`}}>
                        <header className="major">
                            <h3>Projects</h3>
                            <p>Check some of my Awesome Projects</p>
                        </header>
                        <Link href="/projects"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/blog.jpg')`}}>
                        <header className="major">
                            <h3>Blog</h3>
                            <p>Take a look at my Articles</p>
                        </header>
                        <Link href="/blog"><a className="link primary"></a></Link>
                    </article>
                    <article className="scrollButton" style={{backgroundImage: `url('/static/images/contact.jpg')`}}>
                        <header className="major">
                            <h3>Contact</h3>
                            <p>Get in Touch</p>
                        </header>
                        <Link href="#contact"><a className="link primary scrollButton"></a></Link>
                    </article>
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>About Me</h2>
                        </header>
                        <p>I'm currently a Computer Science student at IIIT Nagpur learning MERN development and constantly competing at various programming contests with my Data Structures and Algorithm skills. I'm also quite interested in Open Source Software and always trying to contribute my part to the Open Source World. Learn more about me or Download my Resume :)</p>
                        <ul className="actions scrollButton">
                            <li><Link href="/about"><a className="button next">About Me</a></Link></li>
                            <li><a className="button" href="#" download>Resume</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    </Layout>
    
)
export default Index