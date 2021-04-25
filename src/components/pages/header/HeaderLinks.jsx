import {categories} from "../../../constants";

function HeaderLinks() {
    return (
        <>
            {categories.map(category => <a className="py-2 d-none d-md-inline-block" href="/" key={category.id}>{category.name}</a>)}
        </>
    );
}

export default HeaderLinks;