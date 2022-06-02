import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, reset} from './redux/clicksSlice'
import {add} from './redux/contactsSlice'

export default function App() {

  const { register, formState: { errors }, handleSubmit } = useForm();
  const dispatch = useDispatch()

 
  const onSubmit = data => dispatch(add(data));

  const contacts = useSelector(state => state.contacts.contacts)
  const numberOfClicks = useSelector(state => state.clicks.value)

  return (
    <>
    {contacts && <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>{contact.firstName}</p>
          <p>{contact.lastName}</p>
        </li>
      ))}
      </ul>}


    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      {errors.firstName?.type === 'required' && "First name is required"}
      
      <input {...register("lastName", { required: true })} />
      {errors.lastName && "Last name is required"}
      
      <button type="submit">Submit</button>
    </form>


    <ul></ul>

    <p>{numberOfClicks}</p>
    <button onClick={() => dispatch(increment(1))}>+1</button>
    <button onClick={() => dispatch(decrement(1))}>-1</button>
    <button onClick={() => dispatch(reset())}>Reset</button>
    </>
    
  );
}