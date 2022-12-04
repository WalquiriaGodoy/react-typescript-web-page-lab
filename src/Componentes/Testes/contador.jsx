import { useEffect, useState } from 'react';

export default function Contador() {
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    console.log('entrou no useEffect');
    setNumero(numero + 1);
  }, [numero]);

  function aumentar() {
    setNumero(numero + 1);
  }

  function diminuir() {
    setNumero(numero - 1);
  }

  return (
    <>
      <h1>Contador</h1>
      <p>{numero}</p>
      <button onClick={aumentar}>Mais</button>
      <button onClick={diminuir}>Menos</button>
    </>
  );
}
