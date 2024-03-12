import sqlite3

# Conecta-se ao banco de dados (ou cria-o se não existir)
conn = sqlite3.connect('exemplo.db')

# Cria um cursor para interagir com o banco de dados
cur = conn.cursor()

# Cria uma tabela se não existir
cur.execute('''CREATE TABLE IF NOT EXISTS usuarios (
                id INTEGER PRIMARY KEY,
                nome TEXT NOT NULL,
                email TEXT NOT NULL)''')

# Salva as alterações
conn.commit()

# Executa uma consulta para recuperar os usuários cadastrados
cur.execute("SELECT * FROM usuarios")

# Recupera todos os resultados da consulta
usuarios = cur.fetchall()

# Imprime os resultados
for usuario in usuarios:
    print(usuario)

# Fecha a conexão com o banco de dados
conn.close()
