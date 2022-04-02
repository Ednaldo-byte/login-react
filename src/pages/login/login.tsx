
import { ContainerCenter } from '../../components/containers/containerCenter/containerLogin'
import { Image } from '../../components/forms/image'
import login from '../../assets/login.jpg'
import FormLogin from '../../components/forms/formLogin'

export default function Login(){

  return(
    <div className="container">
      <ContainerCenter>
        <Image background={`url(${login})`}/>
          <div className='forms'>
            <h1>Login</h1>
            <FormLogin />
            <a href="/forgotpassword">Esqueceu a senha?</a>
            <a href="/createaccount">Crie uma conta</a>
            <a href="http://localhost:5000/users" target={'__blank'}>Veja os usuários padrão aqui</a>
          </div>
      </ContainerCenter>
    </div>
  )
}