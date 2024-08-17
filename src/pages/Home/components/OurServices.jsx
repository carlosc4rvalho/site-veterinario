import React, { useState, useEffect } from 'react';
import { getDocs, collection } from "firebase/firestore";
import db from 'services/firebaseConfig';

function OurServices() {
  const [data, setData] = useState([]);

  useEffect(() => {
    readData();
  }, []);

  async function readData() {
    try {
      const querySnapshot = await getDocs(collection(db, "services"));
      const services = [];
      querySnapshot.forEach((doc) => {
        services.push(doc.data());
      });
      setData(services);
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  }

  return (
    <section className='flex justify-center items-center w-full'>
      <div className='flex flex-col gap-12 justify-center items-center w-10/12'>
        <header>
          <h2 className='text-6xl font-semibold'>Nossos Serviços</h2>
        </header>

        {data.length > 0 && (
          <ul className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {data.map((card, index) => (
              <li key={index} className='flex flex-col justify-center items-center text-center rounded-2xl bg-blue h-96 w-96 p-6'>
                <h3 className='text-3xl text-white font-medium mb-4'>
                  {card.name}
                </h3>
                <p className='text-xl text-white'>
                  {card.description}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default OurServices;