import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, reset} from './redux/store'

export default function App() {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = data => console.log(data);

  const dispatch = useDispatch()
  const numberOfClicks = useSelector(state => state.clicks.value)

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      {errors.firstName?.type === 'required' && "First name is required"}
      
      <input {...register("lastName", { required: true })} />
      {errors.lastName && "Last name is required"}
      
      <input type="submit" />
    </form>

    <p>{numberOfClicks}</p>
    <button onClick={() => dispatch(increment(1))}>+1</button>
    <button onClick={() => dispatch(decrement(1))}>-1</button>
    <button onClick={() => dispatch(reset())}>Reset</button>
    </>
    
  );
}