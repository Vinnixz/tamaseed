import sqlite3

conn = sqlite3.connect('teste.db')

cur = conn.cursor()

cur.execute(
    '''CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY,
        nome TEXT NOT NULL,
        email TEXT NOT NULL,
        senha TEXT NOT NULL)''')
    
conn.commit()
cur.execute("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)", ('Nome do Usuário', 'usuario@example.com', 'senha123'))
cur.execute("SELECT * FROM usuarios")

usuarios = cur.fetchall()

for usuario in usuarios:
    print(usuario)

conn.close()