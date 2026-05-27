# 📝 Lista de Tarefas (To-Do List) - FastAPI & Next.js

[cite_start]Este é um aplicativo clássico onde o usuário pode adicionar uma tarefa, visualizar a lista de tarefas pendentes e apagar tarefas concluídas[cite: 1]. [cite_start]É perfeito para mostrar operações fundamentais de CRUD (Criar, Ler, Atualizar/Deletar)[cite: 2].

O projeto é dividido em duas partes:
* [cite_start]**Backend (FastAPI):** Terá rotas GET (para listar tarefas), POST (para criar) e DELETE (para remover)[cite: 3]. [cite_start]Guardamos as tarefas na memória (numa lista em Python) para não precisarmos configurar um banco de dados agora[cite: 4].
* [cite_start]**Frontend (Next.js):** Uma página simples com um campo de texto, um botão "Adicionar" e a lista abaixo com botões "Excluir"[cite: 5].

---

## ⚙️ Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas na sua máquina:
* [Python 3.x](https://www.python.org/downloads/) (para rodar o Backend)
* [Node.js](https://nodejs.org/) (para rodar o Frontend)
* [Git](https://git-scm.com/) (para clonar o repositório)

---

## Como executar o projeto localmente

Siga os passos abaixo para baixar e rodar o projeto na sua máquina.

### Passo 1: Clonar o repositório
Abra o seu terminal e rode o comando abaixo para baixar o código do GitHub:
```bash
git clone https://github.com/TCostaSouza/selecao-fesf-sus.git
cd selecao-fesf-sus
```

### Passo 2: Rodar o Backend (FastAPI)
Com o python instalado no seu computador, crie e ative um ambiente virtual local:

1. Crie um Ambiente Virtual para isolar as dependências:
Windows: python -m venv venv
Mac/Linux: python3 -m venv venv

2. Ative o Ambiente Virtual:
Windows: .\venv\Scripts\activate
Mac/Linux: source venv/bin/activate

3. Instale as dependências necessárias:
pip install -r requirements.txt

4. Inicie o servidor:
python -m uvicorn main:app --reload

IMPORTANTE!: Uma vez que o servidor esteja rodando, NÃO feche esse terminal!

### Passo 3: Rodar o Frontend (Next.js):
Abra uma nova janela de terminal (para não fechar o backend) e siga os passos:

1. Navegue até a pasta do frontend:
cd frontend-todo

2. Instale as dependências do Node.js (isso vai ler o arquivo package.json e baixar o que for preciso):
npm install

3. Inicie o servidor de desenvolvimento do Next.js:
npm run dev

Passo 4: Acessar o Aplicativo
Com os dois terminais rodando, abra o seu navegador de internet e acesse:
👉 http://localhost:3000

Para ver a documentação interativa da API do backend, acesse:
👉 http://127.0.0.1:8000/docs