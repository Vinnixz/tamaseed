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
            modo_fazer TEXT, 
            image_url TEXT)''')
    conn.commit()
    conn.close()

def inserir_planta(nome_comum, tipo, descricao, modo_plantio=None, materiais=None, modo_fazer=None, image_url=None):
    conn = sqlite3.connect('plantas.db')
    cur = conn.cursor()
    cur.execute("INSERT INTO plantas (nome_comum, tipo, descricao, modo_plantio, materiais, modo_fazer, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)",
                (nome_comum, tipo, descricao, modo_plantio, materiais, modo_fazer, image_url))
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

def update_plant_image_url(conn: sqlite3.Connection, nome_comum: str, image_url: str):
    cur = conn.cursor()
    cur.execute("SELECT * FROM plants WHERE nome_comum=?", (nome_comum,))
    plant = cur.fetchone()
    if plant is not None:
        cur.execute("UPDATE plants SET image_url=? WHERE nome_comum=?", (image_url, nome_comum))
        conn.commit()