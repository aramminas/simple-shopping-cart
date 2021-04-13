import {Link} from "react-router-dom";
import {categories} from "../../../constants";

function HeaderLinks() {
    return (
        <>
            {categories.map(category => <Link className="py-2 d-none d-md-inline-block" to="/" key={category.id}>{category.name}</Link>)}
        </>
    );
}

export default HeaderLinks;