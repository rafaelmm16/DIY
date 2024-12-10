"use client";

import React, { useState } from 'react';

const ElementosGamificados = () => {
  const [progresso, setProgresso] = useState(0);
  const [pontos, setPontos] = useState(0);

  const incrementarProgresso = () => {
    setProgresso(Math.min(progresso + 10, 100));
  };

  const adicionarPontos = () => {
    setPontos(pontos + 10);
  };

  return (
    <div>
      <h2>Elementos Gamificados</h2>
      <div>
        Progresso: {progresso}%
        <button onClick={incrementarProgresso}>+10%</button>
        <progress value={progresso} max="100"></progress>
      </div>
      <div>
        Pontos: {pontos}
        <button onClick={adicionarPontos}>+10 Pontos</button>
      </div>
      {/* Adicione mais elementos gamificados aqui (recompensas, etc.) */}
    </div>
  );
};

export default ElementosGamificados;