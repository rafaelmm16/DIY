"use client";

import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const EditorDePesquisa = () => {
    const [perguntas, setPerguntas] = useState([]);

    const adicionarPergunta = () => {
        setPerguntas([...perguntas, { texto: 'Nova Pergunta', opcoes: [], ramificacao: {} }]);
    };

    const adicionarOpcao = (indexPergunta) => {
        const novasPerguntas = [...perguntas];
        novasPerguntas[indexPergunta].opcoes.push({ texto: 'Nova Opção', proximaPergunta: null });
        setPerguntas(novasPerguntas);
    };

    const Pergunta = ({ pergunta, index, movePergunta }) => {
        const [{ isDragging }, drag] = useDrag(() => ({
            type: 'pergunta',
            item: { index },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }));

        const [, drop] = useDrop(() => ({
            accept: 'pergunta',
            drop: (item) => movePergunta(item.index, index),
        }));

        return (
            <li key={index} ref={(node) => drag(drop(node))} style={{ opacity: isDragging ? 0.5 : 1, color: 'grey' }}>
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
                            <select onChange={(e) => {
                                const novasPerguntas = [...perguntas];
                                novasPerguntas[index].opcoes[indexOpcao].proximaPergunta = parseInt(e.target.value, 10) || null; // Parse to integer or null
                                setPerguntas(novasPerguntas);
                            }}>
                                <option value={null}>Próxima Pergunta (Nenhuma)</option>
                                {perguntas.map((p, i) => (
                                    <option key={i} value={i}>{p.texto}</option>
                                ))}
                            </select>
                        </li>
                    ))}
                </ul>
            </li>
        );
    };


    const movePergunta = (from, to) => {
        const novasPerguntas = [...perguntas];
        const [removed] = novasPerguntas.splice(from, 1);
        novasPerguntas.splice(to, 0, removed);
        setPerguntas(novasPerguntas);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <h2 style={{ color: 'white' }}>Editor de Pesquisa</h2>
                <button onClick={adicionarPergunta}>Adicionar Pergunta</button>
                <ul>
                    {perguntas.map((pergunta, index) => (
                        <Pergunta key={index} pergunta={pergunta} index={index} movePergunta={movePergunta} />
                    ))}
                </ul>
            </div>
        </DndProvider>
    );
};

export default EditorDePesquisa;