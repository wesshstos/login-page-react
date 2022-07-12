import React from "react";
import imgBanner from './assets/illustration.svg'
import imgBtn from './assets/google.png'

const App: React.FC = () => {
  return (
    <div className="w-full p-2 flex font-['Lato'] text-md mobileP:h-auto tablet:h-screen">
      <div className="w-1/2 h-full items-center justify-center p-20 bg-[#F7FAFC] mobileP:hidden tablet:flex">
        <img src={imgBanner} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center font-['Lato'] mobileP:w-full desktop:w-1/2">

        <div className="desktop:w-1/2 font-['Merriweather'] space-y-3 mobileP:w-full p-4">
          <h3 className='mobileP:text-sm tablet:text-xl'>Bem vindo(a) de volta</h3>
          <h1 className='font-bold mobileP:text-xl tablet:text-2xl'>Faça login na sua conta</h1>
        </div>

        <form className="desktop:w-1/2 mobileP:w-full px-4">
          <div className="flex flex-col space-y-2 py-2">
            <label htmlFor="login">Login</label>
            <input className="w-full p-2 border border-zinc-400 rounded-md placeholder:text-zinc-500" type="email" placeholder="exemple@email.com" />
          </div>
          <div className="flex flex-col space-y-2 py-2">
            <label htmlFor="login">Senha</label>
            <input className="w-full p-2 border border-zinc-400 rounded-md placeholder:text-zinc-500" type="password" placeholder="*******" />
          </div>
          <div className="flex justify-between">
            <div>
              <input className="mr-2" type="checkbox" />Lembrar Senha
            </div>
            <a href="" className="text-blue-700 hover:underline">
              Esqueceu a senha?
            </a>
          </div>
          <div className="mt-4 flex flex-col space-y-4">
            <input className="p-3 text-zinc-100 font-bold bg-[#04C35C] cursor-pointer rounded-md" type="button" value="Entrar" />
            <button className="flex justify-center space-x-3 text-zinc-50 font-bold bg-[#1A202C] rounded-md p-4">
              <img className="w-6" src={imgBtn} alt="" />
              <span className="mobileP:text-xs desktop:text-lg">Ou faça login com o Google</span>
            </button>
          </div>
        </form>
        <span className="mobileP:pt-5 desktop:pt-20">Não tem uma conta? <a className="text-blue-700 hover:underline" href="">Cadastre-se</a></span>
      </div>
    </div>
  )
}

export default App