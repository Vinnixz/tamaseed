import sqlite3

# Conectar ao banco de dados
conn = sqlite3.connect('teste.db')
cur = conn.cursor()

# Consultar os emails duplicados
cur.execute("SELECT email FROM usuarios GROUP BY email(email) > 1")
emails_duplicados = cur.fetchall()

# Excluir os usuários duplicados mantendo apenas o primeiro registro de cada email
for email in emails_duplicados:
    cur.execute("DELETE FROM usuarios WHERE email=? AND id NOT IN (SELECT MIN(id) FROM usuarios WHERE email=?)", (email[0], email[0]))

# Confirmar a exclusão e exibir os usuários restantes
conn.commit()
cur.execute("SELECT * FROM usuarios")
usuarios_atualizados = cur.fetchall()
for usuario in usuarios_atualizados:
    print(usuario)

# Fechar a conexão com o banco de dados
conn.close()
