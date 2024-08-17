import React from 'react'


function Whatsapp() {
  const message = 'Olá, Vim pelo site e gostaria de saber mais sobre seus serviços.'
  const phoneNumber = '554300000000'
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappLink}
      target='_blank'
    >
      <picture>
        <img src="#" alt='WhatsApp' loading='lazy' />
      </picture>
    </a>
  )
}

export default Whatsapp
