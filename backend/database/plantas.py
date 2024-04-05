import sqlite3

def criar_tabela_plantas():
    conn = sqlite3.connect('plantas.db')
    cur = conn.cursor()

    cur.execute(
        '''CREATE TABLE IF NOT EXISTS plantas (
            id INTEGER PRIMARY KEY,
            nome_comum TEXT NOT NULL,
            tipo TEXT NOT NULL,
            descricao TEXT NOT NULL,
            modo_plantio TEXT,
            materiais TEXT,
            modo_fazer TEXT)''')
    conn.commit()
    conn.close()

def inserir_planta(nome_comum, tipo, descricao, modo_plantio=None, materiais=None, modo_fazer=None):
    conn = sqlite3.connect('plantas.db')  # Corrigido para 'plantas.db'
    cur = conn.cursor()
    cur.execute("INSERT INTO plantas (nome_comum, tipo, descricao, modo_plantio, materiais, modo_fazer) VALUES (?, ?, ?, ?, ?, ?)",
                (nome_comum, tipo, descricao, modo_plantio, materiais, modo_fazer))
    conn.commit()
    conn.close()

def obter_planta(nome_comum):
    conn = sqlite3.connect('plantas.db')
    cur = conn.cursor()
    cur.execute("SELECT * FROM plantas WHERE nome_comum=?", (nome_comum,))
    planta = cur.fetchone()
    conn.close()
    return planta

def obter_plantas():
    conn = sqlite3.connect('plantas.db')
    cur = conn.cursor()
    cur.execute("SELECT * FROM plantas")
    plantas = cur.fetchall()
    conn.close()
    return plantas