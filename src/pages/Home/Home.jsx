// react
import React from 'react'

// global components
import Header from 'components/Header'
import Footer from 'components/Footer'

// local components
import Banner from './components/Banner'
import OurServices from './components/OurServices'
import Form from './components/Form'

function Home() {
  const fieldList = [
    {
      id: 'email',
      nome: 'Email Válido',
      exemplo: 'exemplo@gmail.com',
      tipo: 'email'
    },
    {
      id: 'nome',
      nome: 'Nome Completo',
      exemplo: 'Carlos E C Silva',
      tipo: 'text'
    },
    {
      id: 'telefone',
      nome: 'Telefone de Contato',
      exemplo: '(00) 00000-0000',
      tipo: 'tel'
    },
    {
      id: 'mensagem',
      nome: 'Mensagem',
      exemplo: 'Sua mensagem:',
      tipo: 'text'
    }
  ]
  return <main>
    <Header />
    <Banner />
    <OurServices />
    <Form title='Formulário de Contato' data={fieldList} />
    <Footer />
  </main>
}

export default Home
