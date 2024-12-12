# Software de Pesquisa de Mercado DIY em Next.js

Este projeto visa criar um software de pesquisa de mercado "faça você mesmo" utilizando Next.js, com foco em funcionalidades gamificadas e relatórios robustos.

## I. Arquitetura do Projeto (Next.js)

**Frontend (Next.js):**

* **Páginas:**
    * `/criar-pesquisa`: Interface para criação de pesquisas (com templates e editor).
    * `/pesquisa/[id]`: Página para responder a uma pesquisa específica (com lógica de gamificação).
    * `/relatorios/[id]`: Visualização de relatórios gerados a partir das pesquisas.

## II. Funcionalidades Principais

**Criação de Pesquisas:**

* Interface drag-and-drop para adicionar e organizar perguntas.
* Tipos de perguntas: múltipla escolha, caixa de seleção, texto aberto, escala Likert, matriz, etc.
* Lógica de ramificação (pular perguntas com base em respostas anteriores).
* Templates pré-prontos para diferentes tipos de pesquisa (satisfação do cliente, pesquisa de mercado, etc.).

**Distribuição de Pesquisas:**

* Gerar link compartilhável para a pesquisa.
* Integração com redes sociais para compartilhamento direto.
* Incorporar pesquisa em sites externos via iframe.

**Coleta de Respostas:**

* Armazenar respostas de forma segura e eficiente.
* Implementar mecanismos para evitar respostas duplicadas.

**Análise de Resultados:**

* Gerar gráficos e tabelas com os dados coletados.
* Calcular estatísticas descritivas (média, mediana, moda, desvio padrão).
* Filtros e segmentação de dados para análises mais específicas.

**Geração de Relatórios:**

* Exportar relatórios em PDF ou CSV.
* Personalização de relatórios com logo e informações da empresa.

**Gamificação:**

* Barra de progresso para mostrar o andamento da pesquisa.
* Sistema de pontos por resposta.
* Recompensas virtuais ou descontos para incentivar a participação.

## III. Tecnologias

* **Next.js:** Framework para desenvolvimento web em React.
* **Biblioteca de gráficos:** Chart.js, Recharts, ou similar.
* **Editor de texto rico:** Tiptap, Slate.js, ou similar (para perguntas de texto aberto).
* **Biblioteca de drag-and-drop:** React Beautiful DnD, React DnD, ou similar.
* **Estilização:** CSS Modules, Styled Components, ou similar.