
import { ContainerCenter } from '../../components/containers/containerCenter/containerLogin'
import FormCreateAccount from '../../components/forms/formCreateAccount'

import { Image } from '../../components/forms/image'
import createAccount from '../../assets/createAccount.jpg'

export default function CreateAccount(){
  return(
    <div className="container">
      <ContainerCenter>
        <Image background={`url(${createAccount})`}/>
          <div className='forms'>
            <h1>Criar uma conta</h1>
            <FormCreateAccount/>
            <a href="/">Faça Login</a>
          </div>
      </ContainerCenter>
    </div>
  )
}