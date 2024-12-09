import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTMLBackend } from 'react-dnd-html5-backend';

const EditorDePesquisa = () => {
    const [perguntas, setPerguntas] = useState([]);

    const adicionarPergunta = () => {
        setPerguntas([...perguntas, { texto: 'Nova Pergunta', opcoes: [] }]);
    };

    const adicionarOpcao = (indexPergunta) => {
        const novasPerguntas = [...perguntas];
        novasPerguntas[indexPergunta].opcoes.push({ texto: 'Nova Opção' });
        setPerguntas(novasPerguntas);
    };

    return (
        <DndProvider backend={HTMLBackend}>
            <div>
                <h2>Editor de Pesquisa</h2>
                <button onClick={adicionarPergunta}>Adicionar Pergunta</button>
                <ul>
                    {perguntas.map((pergunta, index) => (
                        <li key={index}>
                            <input type="text" value={pergunta.texto} onChange={(e) => {
                                const novasPerguntas = [...perguntas];
                                novasPerguntas[index].texto = e.target.value;
                                setPerguntas(novasPerguntas);
                            }} />
                            <button onClick={() => adicionarOpcao(index)}>Adicionar Opção</button>
                            <ul>
                                {pergunta.opcoes.map((opcao, indexOpcao) => (
                                    <li key={indexOpcao}>
                                        <input type="text" value={opcao.texto} onChange={(e) => {
                                            const novasPerguntas = [...perguntas];
                                            novasPerguntas[index].opcoes[indexOpcao].texto = e.target.value;
                                            setPerguntas(novasPerguntas);
                                        }} />
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                {/* Lógica de ramificação (ainda não implementada) */}
                <p>Arraste e solte perguntas para reordenar (funcionalidade em desenvolvimento).</p>
            </div>
        </DndProvider>
    );
};

export default EditorDePesquisa;