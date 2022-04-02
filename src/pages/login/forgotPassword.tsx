
import { ContainerCenter } from '../../components/containers/containerCenter/containerLogin'
import { Image } from '../../components/forms/image'
import forgotPassword from '../../assets/forgotPassword.jpg'
import FormForgotPassword from '../../components/forms/formForgotPassword'

export default function ForgotPassword(){

  return(
    <div className="container">
      <ContainerCenter>
        <Image background={`url(${forgotPassword})`}/>
          <div className='forms'>
            <h1>Recuperar senha</h1>
            <FormForgotPassword/>
            <a href="/forgotpassword">Esqueceu a senha?</a>
            <a href="/createaccount">Crie uma conta</a>
          </div>
      </ContainerCenter>
    </div>
  )
}