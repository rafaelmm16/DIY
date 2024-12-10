"use client";

import React, { useState } from 'react';
import Confetti from 'react-confetti';

const ElementosGamificados = () => {
    const [progresso, setProgresso] = useState(0);
    const [pontos, setPontos] = useState(0);
    const [nivel, setNivel] = useState(1);
    const [mostrarConfetti, setMostrarConfetti] = useState(false);

    const incrementarProgresso = () => {
        const novoProgresso = Math.min(progresso + 10, 100);
        setProgresso(novoProgresso);
        if (novoProgresso === 100) {
            subirNivel();
        }
    };

    const adicionarPontos = () => {
        setPontos(pontos + 10);
    };

    const subirNivel = () => {
        setNivel(nivel + 1);
        setProgresso(0);
        setMostrarConfetti(true);
        setTimeout(() => setMostrarConfetti(false), 3000); // Desliga o confetti após 3 segundos
    };


    return (
        <div>
            <h2>Elementos Gamificados</h2>

            {mostrarConfetti && <Confetti />}

            <div>
                <h3>Nível: {nivel}</h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '80%' }}>
                    Progresso: {progresso}%
                    <progress value={progresso} max="100" style={{ width: '100%' }}></progress>
                </div>
                <button onClick={incrementarProgresso} style={{ marginLeft: '10px', borderRadius: '5px', padding: '5px 10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>
                    +10%
                </button>
            </div>


            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
                Pontos: {pontos}
                <button onClick={adicionarPontos} style={{ marginLeft: '10px', borderRadius: '5px', padding: '5px 10px', backgroundColor: '#008CBA', color: 'white', border: 'none' }}>
                    +10 Pontos
                </button>
            </div>


            {/* Barra de experiência estilizada (apenas um exemplo)  */}
            <div style={{ marginTop: '20px', backgroundColor: '#ddd', borderRadius: '10px', overflow: 'hidden', height: '20px' }}>
                <div style={{ width: `${progresso}%`, backgroundColor: '#4CAF50', height: '100%', transition: 'width 0.5s ease-in-out' }}></div>
            </div>

            {/* Recompensas (exemplo) */}
            {nivel >= 2 && <div>Recompensa Nível 2: Desbloqueado!</div>}
            {nivel >= 3 && <div>Recompensa Nível 3: Desbloqueado!</div>}


        </div>
    );
};

export default ElementosGamificados;