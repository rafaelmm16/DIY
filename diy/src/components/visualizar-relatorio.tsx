"use client";

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const VisualizadorDeRelatorios = () => {
    // Dados de exemplo (substitua por dados reais)
    const dados = [
        { categoria: 'A', valor: 20 },
        { categoria: 'B', valor: 30 },
        { categoria: 'C', valor: 50 },
        { categoria: 'D', valor: 50 },
    ];

    const dadosGraficoPizza = {
        labels: dados.map((item) => item.categoria),
        datasets: [
            {
                label: 'Valores',
                data: dados.map((item) => item.valor),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(134, 255, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    '#56ff56',
                ],
                borderWidth: 1,
            },
        ],
    };


    return (
        <div>
            <h2>Visualizador de Relatórios</h2>

            {/* Gráfico de Pizza */}
            <Pie data={dadosGraficoPizza} />


            {/* Tabela de Dados */}
            <h3>Detalhes</h3>
            <table>
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map((item) => (
                        <tr key={item.categoria}>
                            <td>{item.categoria}</td>
                            <td>{item.valor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Adicionar mais gráficos e análises aqui */}
        </div>
    );
};


export default VisualizadorDeRelatorios;