import sqlite3

# Conecta-se ao banco de dados (ou cria-o se não existir)
conn = sqlite3.connect('exemplo.db')

# Cria um cursor para interagir com o banco de dados
cur = conn.cursor()

# Cria uma tabela
cur.execute('''CREATE TABLE IF NOT EXISTS usuarios (
                id INTEGER PRIMARY KEY,
                nome TEXT NOT NULL,
                email TEXT NOT NULL)''')

# Insere alguns dados de exemplo
cur.execute("INSERT INTO usuarios (nome, email) VALUES (?, ?)", ('João', 'joao@example.com'))
cur.execute("INSERT INTO usuarios (nome, email) VALUES (?, ?)", ('Maria', 'maria@example.com'))

# Salva as alterações
conn.commit()

# Executa uma consulta
cur.execute("SELECT * FROM usuarios")
usuarios = cur.fetchall()
for usuario in usuarios:
    print(usuario)

# Fecha a conexão com o banco de dados
conn.close()
