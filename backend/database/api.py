# api.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import sqlite3
from pydantic import BaseModel
from typing import Optional
import hashlib
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

class Input(BaseModel):
    nome: str
    email: str
    senha: str

class Usuario(BaseModel):
    email: str
    senha: str

def generate_salt():
    return os.urandom(16).hex()

def hash_password(password, salt):
    return hashlib.sha256((password + salt).encode()).hexdigest()

@app.post("/registrar")
def teste2(inputs: Input) -> str:
    try:
        with sqlite3.connect('teste.db') as conn:
            cur = conn.cursor()
            cur.execute("SELECT COUNT(*) FROM usuarios WHERE email=?", (inputs.email,))
            result = cur.fetchone()
            if result[0] > 0:
                return f"Email já cadastrado: {inputs.email}"
            
            salt = generate_salt()
            hashed_password = hash_password(inputs.senha, salt)
            cur.execute("INSERT INTO usuarios (nome, email, senha, salt) VALUES (?, ?, ?, ?)",
                        (inputs.nome, inputs.email, hashed_password, salt))
            conn.commit()
            return f"Inserção bem sucedida: Nome: {inputs.nome}, Email: {inputs.email}"
    except Exception as e:
        return f"Erro ao inserir no banco de dados: {str(e)}"

@app.get("/usuarios")
def listar_usuarios(email: Optional[str] = None):
    try:
        with sqlite3.connect('teste.db') as conn:
            cur = conn.cursor()
            if email:
                cur.execute("SELECT * FROM usuarios WHERE email=?", (email,))
            else:
                cur.execute("SELECT * FROM usuarios")
            usuarios = cur.fetchall()
            return {"usuarios": usuarios}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao listar usuários: {str(e)}")

@app.post("/verifica_login")
def login(usuario: Usuario) -> dict:
    try:
        with sqlite3.connect('teste.db') as conn:
            cur = conn.cursor()
            cur.execute("SELECT * FROM usuarios WHERE email=?", (usuario.email,))
            user_data = cur.fetchone()
            if user_data:
                # Recuperando os dados do usuário
                db_password_hash = user_data[3]
                salt = user_data[4]
                
                # Gerando o hash da senha fornecida
                provided_password_hash = hash_password(usuario.senha, salt)
                
                # Imprimindo os valores para depuração
                print("DB Password Hash:", db_password_hash)
                print("Provided Password Hash:", provided_password_hash)
                
                # Comparando os hashes das senhas
                if db_password_hash == provided_password_hash:
                    return {"message": "Login bem sucedido"}
            raise HTTPException(status_code=401, detail="Email ou senha incorretos")
    except sqlite3.Error as e:
        raise HTTPException(status_code=500, detail=f"Erro ao fazer login: {str(e)}")


if __name__ == "__main__":
    uvicorn.run(app, port=8000)
