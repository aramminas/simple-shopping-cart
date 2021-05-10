import {Link} from 'react-router-dom';
/* constants */
import {links} from "../../../constants";

function HeaderLinks() {
    return (
        <>
            {links.map(link => <Link className="py-2" to={link.path} key={link.id}>{link.name}</Link>)}
        </>
    );
}

export default HeaderLinks;