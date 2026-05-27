# @author Tainã Costa
# @description Backend API (Python 3.11-slim)

FROM python:3.11-slim

WORKDIR /app

# Otimização: Cache de camadas para dependências
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia o restante do código
COPY . .

EXPOSE 8000

# Execução via uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]