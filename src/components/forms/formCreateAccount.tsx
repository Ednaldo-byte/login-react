import React from "react";
import { useState } from "react";
import { FlexContainer } from "../../style/globalStyle";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  userName: string,
  password: string,
};

interface objectUser{
  userName: string,
  name: string,
  password: string
}

export default function FormCreateAccount(){

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data)
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
       <div>
        <label htmlFor="name" className="sr-only">Usuário</label>
        <Input 
        type="text" 
        id="name" 
        placeholder="Digite seu nome"
        {...register('name', {required: true})}/>
      </div>

      <div>
        <label htmlFor="createUser" className="sr-only">Senha</label>
        <Input 
        type="ṕassword" 
        id="createUser" 
        placeholder="Nome de usuário"
        {...register('userName', {required: true})}/>
      </div>

      <FlexContainer>
        <div>
          <label htmlFor="createPassword" className="sr-only">Senha</label>
          <Input 
          type="ṕassword" 
          id="createPassword" 
          placeholder="Crie uma senha"
          {...register('password', {required: true})}/>
        </div>

        <div>
          <label htmlFor="confirmPassword" className="sr-only">Senha</label>
          <Input 
          type="ṕassword" 
          id="confirmPassword" 
          placeholder="Confirme a senha"
          />
        </div>
      </FlexContainer>

      <Button type='submit' width='100%'>Enviar</Button>

    </form>
  )
}