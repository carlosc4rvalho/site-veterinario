import React from 'react'

function OurServices() {
  const cards = [
    {
      name: "card 1"
    },
    {
      name: "card 2"
    },
    {
      name: "card 3"
    }
  ]

  return (
    <section className='flex justify-center items-center w-full'>
      <div className='flex flex-col gap-12 justify-center items-center w-10/12'>
        <header>
          <h2 className='text-6xl font-semibold'>Nosso Serviços</h2>
        </header>

        <ul className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {cards.map((card, index) => (
            <li key={index} className='flex justify-center items-center rounded-2xl bg-blue h-96 w-96'>
              <h3 className='text-3xl text-white font-medium'>
                {card.name}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default OurServices
