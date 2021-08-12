import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <div className="menu">
             <Link to="/resolvedtime">
                 <p>Resolved Time</p>
            </Link>

            <Link to="/anchorhealth">
                <p>Anchor Health</p>
            </Link>

        </div>
    )
}

export default Menu
