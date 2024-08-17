// react
import React from 'react'

// global components
import Footer from 'components/Footer'

// local components
import Header from './components/Header'
import Form from './components/Form'

function Admin() {
  const fieldList = [
    {
      id: 'name',
      nome: 'Nome do Serviço:',
      exemplo: 'Consulta Veterinária',
      tipo: 'text'
    },
    {
      id: 'description',
      nome: 'Descrição do Serviço:',
      exemplo: 'Consulta geral para avaliação de saúde do animal',
      tipo: 'text'
    },
  ]
  return <main>
    <Header/>
    <Form title='Cadastro de Serviço' data={fieldList} />
    <Footer/>
  </main>
}

export default Admin
