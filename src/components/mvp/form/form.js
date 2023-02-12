import FormName from './name/FormName';
import './form.sass';
import FormSelection from './selection/FormSelection';
import Cash from './cash/Cash';
import Address from './address/address';
import Final from './final/Final';
import Usdt from './usdt/Usdt';
import CashForm from './cashForm/CashForm';
import CashAddress from './cashAddress/CashAddress';

const Form = ({getDate, updateForm, value, date}) => {
    const usdtForms = [<FormName getDate={getDate} date={date}/>, <FormSelection getDate={getDate} date={date}/>, <Usdt getDate={getDate} date={date}/>, <Address getDate={getDate} date={date}/>, <Final/>]
    const cashForms = [<FormName getDate={getDate} date={date}/>, <FormSelection getDate={getDate} date={date}/>, <Cash getDate={getDate} date={date}/>, <CashForm getDate={getDate} date={date}/> , <CashAddress getDate={getDate} date={date}/>, <Final/>]
    const form = value === "cash" ? cashForms[updateForm] : usdtForms[updateForm]
    return(
        {...form}
    )
}

export default Form