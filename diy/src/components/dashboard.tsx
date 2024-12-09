"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Dashboard() {
    const [pesquisas, setPesquisas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPesquisas = async () => {
            try {
                const response = await fetch('/api/pesquisas'); // Substitua pela sua rota de API
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPesquisas(data);
            } catch (error) {
                console.error('Erro ao buscar pesquisas:', error);
                // Lide com o erro, exiba uma mensagem para o usuário, etc.
            } finally {
                setIsLoading(false);
            }
        };

        fetchPesquisas();
    }, []);

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    if (pesquisas.length === 0) {
        return <div>Nenhuma pesquisa encontrada.</div>;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {pesquisas.map(pesquisa => (
                    <li key={pesquisa.id}>
                        <h2>{pesquisa.titulo}</h2> {/* Assumindo que sua pesquisa tem um título */}
                        <p>Status: {pesquisa.status}</p> {/* Exiba o status da pesquisa */}
                        <Link href={`/relatorios/${pesquisa.id}`}>Ver Relatório</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}