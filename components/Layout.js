import Head from "next/head"
import stylesheet from 'styles/main.scss'
import Contact from './Contact'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading'
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: '' });
        }, 100);
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    render() {
        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <Head>
                    <title>Aman Kumar</title>
                    <meta name="title" content="Aman Kumar" />
                    <meta name="description" content="I'm a Full-Stack Web Developer building web applications and websites with MERN Stack based in Nagpur, India" />
                    <meta name="keywords" content="Aman, Amankr, portfolio" />
                    <meta name="robots" content="index, follow" />
                    <meta name="language" content="English" />
                    <meta name="author" content="Aman Kumar" />

                    <link href="/static/css/skel.css" rel="stylesheet" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                    <link rel="text" href="../.well-known/pki-validation/" />
                    <link rel = "icon" type = "image/png" href =  "../static/images/AmanLogo.png" />
                </Head>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />
                    {this.props.children}
                    <Contact />
                    <Footer />
                </div>
                <Menu onToggleMenu={this.handleToggleMenu} />
                <div>
                    <ScrollUpButton
                    EasingType="easeOutBounce"
                    ContainerClassName = "scrollContainer"
                    ShowAtPosition={600}
                    AnimationDuration={2200}
                    />
                </div>
            </div>
        )
    }
}

export default Layout
