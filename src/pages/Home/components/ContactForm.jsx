import React, { useState } from 'react';
import { addDoc, getDocs, collection } from "firebase/firestore";
import db from 'services/firebaseConfig';

function ContactForm({ data }) {
  const [formData, setFormData] = useState(() => {
    const initialFormData = {};

    data.forEach(field => {
      initialFormData[field.id] = '';
    });
    return initialFormData;
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value,
    }));
  };

  async function saveData(e) {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "comments"), {
        ...formData
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  async function readData() {
    try {
      const querySnapshot = await getDocs(collection(db, "comments"));
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  }

  return (
    <section className='flex justify-center items-center w-full min-h-svh'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-10/12 my-16'>
        <div className='flex flex-col gap-8'>
          <header>
            <h2 className='text-5xl'>
              Formulário de Contato
            </h2>
          </header>

          <form className='flex flex-col gap-4 text-black' onSubmit={saveData}>
            {data.map((field, index) => (
              <div key={index} className='flex flex-col gap-2'>
                <label htmlFor={field.id} className='text-xl text-white'>
                  {field.nome}
                </label>
                <input
                  id={field.id}
                  type={field.tipo}
                  placeholder={field.exemplo}
                  className='rounded-full p-6 text-xl'
                  autoComplete='off'
                  required
                  value={formData[field.id]}
                  onChange={handleChange}
                />
              </div>
            ))}
            <button type='submit' className='rounded-full p-6 text-2xl font-medium bg-blue text-white'>
              Enviar Informação
            </button>
          </form>

          <button onClick={readData} className='rounded-full p-6 text-2xl font-medium bg-blue text-white'>Buscar Todos os Comentários</button>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;