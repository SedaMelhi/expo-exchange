import { HashLink } from 'react-router-hash-link';
import './menu.sass'

const Menu = ({items, path}) => {
    return(
        <div className="menu">
            {
                Object.keys(items).map((key, id) => <HashLink key={id} smooth to={path+key} className="menu__item">{items[key]}</HashLink>)
            }
        </div>
    )
}
export default Menu;