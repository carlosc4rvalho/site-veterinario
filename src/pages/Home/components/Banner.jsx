import React from 'react'

function Banner() {
  return (
    <section className='flex justify-center items-center w-full'>
      <div className='flex justify-center items-center text-center w-6/12 my-48'>
        <div className='flex flex-col gap-4'>
          <header>
            <h1 className='text-6xl font-semibold'>Clinica Veterinária</h1>
          </header>
          <p className='text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident blanditiis esse minus est aperiam doloremque ut harum temporibus exercitationem totam! Id, possimus! Repudiandae maiores, reprehenderit provident soluta esse animi recusandae!</p>
        </div>
      </div>
    </section>
  )
}

export default Banner