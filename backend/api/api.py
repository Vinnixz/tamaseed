from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sqlite3

app = FastAPI()

# Configuração do CORS para permitir solicitações de qualquer origem
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],  # Adicione OPTIONS
    allow_headers=["*"],
)

class Usuario(BaseModel):
    nome: str
    email: str

@app.post("/registrar_usuario")
def registrar_usuario(usuario: Usuario) -> dict:
    try:
        # Conecta-se ao banco de dados (ou cria-o se não existir)
        conn = sqlite3.connect('exemplo.db')
        cur = conn.cursor()

        # Insere os dados do usuário no banco de dados
        cur.execute("INSERT INTO usuarios (nome, email) VALUES (?, ?)", (usuario.nome, usuario.email))
        conn.commit()

        # Fecha a conexão com o banco de dados
        conn.close()

        return {"mensagem": "Usuário registrado com sucesso"}
    except sqlite3.Error as e:
        raise HTTPException(status_code=500, detail=f"Erro ao registrar usuário: {e}")

# Adicione uma rota OPTIONS para tratar solicitações OPTIONS
@app.options("/registrar_usuario")
async def options_registrar_usuario():
    return {"Allow": "OPTIONS, POST"}  # Permita apenas OPTIONS e POST para este caminho
