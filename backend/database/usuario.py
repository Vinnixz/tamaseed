import sqlite3

def criar_tabela_usuarios():
    conn = sqlite3.connect('usuarios.db')
    cur = conn.cursor()

    cur.execute(
        '''CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY,
            nome TEXT NOT NULL,
            email TEXT NOT NULL,
            senha TEXT NOT NULL)''')
    conn.commit()
    conn.close()

def inserir_usuario(nome, email, senha):
    conn = sqlite3.connect('usuarios.db')
    cur = conn.cursor()
    cur.execute("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
                (nome, email, senha))
    conn.commit()
    conn.close()

def obter_usuario_por_email(email):
    conn = sqlite3.connect('usuarios.db')
    cur = conn.cursor()
    cur.execute("SELECT * FROM usuarios WHERE email=?", (email,))
    usuario = cur.fetchone()
    conn.close()
    return usuario

def obter_todos_usuarios():
    conn = sqlite3.connect('usuarios.db')
    cur = conn.cursor()
    cur.execute("SELECT * FROM usuarios")
    usuarios = cur.fetchall()
    conn.close()
    return usuarios