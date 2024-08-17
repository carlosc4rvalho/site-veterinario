import React from 'react'

function Header() {
  return <header className='flex justify-center items-center w-full p-4 px-12'>
    <nav className='flex justify-between items-center text-2xl font-medium w-full'>
      <div className='flex flex-1 justify-start'>PetShop</div>

      <ul className='hidden md:flex flex-1 justify-center gap-12 items-center rounded-full p-4'>
        <li>Inicio</li>
        <li>Serviços</li>
        <li>Contato</li>
      </ul>

      <div className='hidden md:flex flex-1 justify-end'>
        <a href="" className='p-3 px-8 rounded-full border-2'>Saiba Mais</a>
      </div>
    </nav>
  </header>
}

export default Header
