import PropTypes from 'prop-types'
import Link from 'next/link'
const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/"><a><span onClick={props.onToggleMenu}>Home</span></a></Link></li>
                <li><Link href="/about"><a><span onClick={props.onToggleMenu}>About</span></a></Link></li>
                <li><Link href="/projects"><a><span onClick={props.onToggleMenu}>Projects</span></a></Link></li>
                <li><Link href="/blog"><a><span onClick={props.onToggleMenu}>Blog</span></a></Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
