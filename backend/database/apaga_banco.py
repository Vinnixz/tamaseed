import sqlite3

# Conectar ao banco de dados
conn = sqlite3.connect('teste.db')
cur = conn.cursor()

# Excluir todos os usuários
cur.execute("DELETE FROM usuarios")

# Confirmar a exclusão
conn.commit()

# Fechar a conexão com o banco de dados
conn.close()
