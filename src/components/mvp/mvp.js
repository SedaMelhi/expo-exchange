import Form from './form/form';
import Navigation from './navigation/navigation';
import './mvp.sass'
const Mvp = () => {
    return(
        <div className="content">
            <div className="content__wrap">
                <Navigation/>
                <Form/>
            </div>
        </div>
    )
}

export default Mvp;