import React, { useState, useEffect } from 'react';

function Relogio() {
  const [horaAtual, setHoraAtual] = useState(new Date());
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  useEffect(() => {
    // Atualiza a hora atual a cada segundo
    const intervalo = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    // Mostra a mensagem por 5 segundos
    setMostrarMensagem(true);
    const timeout = setTimeout(() => {
      setMostrarMensagem(false);
    }, 5000);

    // Limpa o timeout ao desmontar o componente ou ao atualizar o efeito
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <h1>{horaAtual.toLocaleTimeString()}</h1>
      {mostrarMensagem && <p>A mensagem aparecerá por 5 segundos</p>}
    </div>
  );
}

export default Relogio;
