import { useEffect, useState } from "react"
import { Button } from "../button/button";
import { Input } from '../input/input';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  userName: string,
  password: string,
};

type user = {
  userName: string,
  password: string
}

export default function FormForgotPassword(){
  const [users, setUsers] = useState([])
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    const verifyUser = users.filter((value: user) => {
     if(Object.values(value).includes(data.userName)){
      return true
     }
    })
    if(verifyUser[0]['userName'] == data.userName){
      alert(verifyUser[0]['password'])
      window.location.href = '/'
    }
  }

  useEffect(() => {
    fetch('http://localhost:5000/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(resp => resp.json())
  .then(data => (setUsers(data)))
  .catch((err) => console.log(err))
  }, [])

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="userName" 
        className="sr-only">Senha</label>

        <Input 
        {...register('userName', {required: true})}
        id="userName" 
        placeholder="Digite o nome de usuário" 
        type='text'
        />
      </div>

      <Button type='submit' width='100%'>Enviar</Button>

    </form>
  )
}
