# 📝 Lista de Tarefas (To-Do List) - FastAPI & Next.js

Este é um aplicativo clássico onde o usuário pode adicionar uma tarefa, visualizar a lista de tarefas pendentes e apagar tarefas concluídas. É perfeito para mostrar operações fundamentais de CRUD (Criar, Ler, Atualizar/Deletar).

O projeto é dividido em duas partes:
* **Backend (FastAPI):** Terá rotas GET (para listar tarefas), POST (para criar) e DELETE (para remover). Guardamos as tarefas na memória (numa lista em Python) para não precisarmos configurar um banco de dados agora.
* **Frontend (Next.js):** Uma página simples com um campo de texto, um botão "Adicionar" e a lista abaixo com botões "Excluir".

---

## ⚙️ Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas na sua máquina:
* **[Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)** (Opção recomendada para rodar via contêineres)
* [Python 3.x](https://www.python.org/downloads/) (para rodar o Backend localmente sem Docker)
* [Node.js](https://nodejs.org/) (para rodar o Frontend localmente sem Docker)
* [Git](https://git-scm.com/) (para clonar o repositório)

---

## 🐳 Como executar o projeto usando Docker (Recomendado)

Se você possui o Docker instalado, a execução é simplificada e não exige a configuração manual de ambientes.

### Passo 1: Clonar o repositório
Abra o seu terminal e rode o comando abaixo para baixar o código:
```bash
git clone [https://github.com/TCostaSouza/selecao-fesf-sus.git](https://github.com/TCostaSouza/selecao-fesf-sus.git)
cd selecao-fesf-sus
```

### Passo 2: Subir os contêineresNa raiz do projeto, execute o comando do Docker Compose para construir e iniciar os serviços:
```
docker compose up --build
```

### Passo 3: Acessar o Aplicativo
Frontend: Acesse 👉 http://localhost:3000Backend 
API Docs: Acesse 👉 http://localhost:8000/docs 
(Para parar os serviços posteriormente, basta apertar Ctrl + C no terminal ou executar docker compose down).

## Como executar o projeto localmente (Sem Docker)

Caso prefira configurar os ambientes manualmente, siga os passos abaixo para baixar e rodar o projeto na sua máquina.  

### Passo 1: Clonar o repositório

Abra o seu terminal e rode o comando abaixo para baixar o código do GitHub:  
```
git clone https://github.com/TCostaSouza/selecao-fesf-sus.git
cd selecao-fesf-sus
```

### Passo 2: Rodar o Backend (FastAPI)

Com o python instalado no seu computador, crie e ative um ambiente virtual local:  

Crie um Ambiente Virtual para isolar as dependências: 
Windows: python -m venv venv
Mac/Linux: python3 -m venv venv

Ative o Ambiente Virtual:  
Windows: .\venv\Scripts\activate
Mac/Linux: source venv/bin/activate

Instale as dependências necessárias:  
```
pip install -r requirements.txt
```

Inicie o servidor:
```
python -m uvicorn main:app --reload
```

IMPORTANTE!: Uma vez que o servidor esteja rodando, NÃO feche esse terminal!  

### Passo 3: Rodar o Frontend (Next.js)

Abra uma nova janela de terminal (para não fechar o backend) e siga os passos

[cite: 1]:Navegue até a pasta do frontend[cite: 1]:
```
d frontend-todo
```


[cite: 1]: Instale as dependências do Node.js (isso vai ler o arquivo package.json e baixar o que for preciso)[cite: 1]:
```
npm install
```

[cite: 1]:Inicie o servidor de desenvolvimento do Next.js[cite: 1]:
```
npm run dev
```

Passo 4: Acessar o AplicativoCom os dois terminais rodando, abra o seu navegador de internet e acesse[cite: 1]:
👉 http://localhost:3000[cite: 1]Para ver a documentação interativa da API do backend, acesse[cite: 1]:
👉 http://127.0.0.1:8000/docs[cite: 1]