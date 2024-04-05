from flask import Flask, request, jsonify
from backend.database.usuario import criar_tabela_usuarios, obter_todos_usuarios, obter_usuario_por_email, inserir_usuario
from backend.database.plantas import criar_tabela_plantas, inserir_planta, obter_plantas, obter_planta, obter_plantas
from flask_cors import CORS, cross_origin
import sqlite3
import hashlib
import os

app = Flask(__name__)
CORS(app)

criar_tabela_usuarios()

@app.route('/registrar', methods=['POST'])
def registrar():
    try:
        dados = request.json
        nome = dados.get('nome')
        email = dados.get('email')
        senha = dados.get('senha')

        usuario_existente = obter_usuario_por_email(email)
        if usuario_existente:
            return jsonify({"mensagem": f"Email já cadastrado: {email}"}), 400
            
        salt = generate_salt()
        hashed_password = hash_password(senha, salt)
        inserir_usuario(nome, email, hashed_password + salt)
        return jsonify({"mensagem": f"Inserção bem sucedida: Nome: {nome}, Email: {email}"}), 201
    except Exception as e:
        return jsonify({"erro": f"Erro ao inserir no banco de dados: {str(e)}"}), 500

@app.route('/usuarios', methods=['GET'])
def listar_usuarios():
    try:
        usuarios = obter_todos_usuarios()
        usuarios_formatados = []
        for usuario in usuarios:
            usuario_formatado = {
                "id": usuario[0],
                "nome": usuario[1],
                "email": usuario[2]
            }
            usuarios_formatados.append(usuario_formatado)
        return jsonify({"usuarios": usuarios_formatados}), 200
    except Exception as e:
        return jsonify({"erro": f"Erro ao listar usuários: {str(e)}"}), 500
    
@app.route('/usuarios/nome', methods=['GET'])
def obter_nome_usuario():
    email = request.args.get('email')
    try:
        usuario = obter_usuario_por_email(email)
        if usuario:
            nome_usuario = usuario[1]
            return jsonify({"nome": nome_usuario}), 200
        else:
            return jsonify({"erro": "Usuário não encontrado"}), 404
    except Exception as e:
        return jsonify({"erro": f"Erro ao obter nome do usuário: {str(e)}"}), 500

@app.route('/verifica_login', methods=['POST'])
def login():
    dados = request.json
    email = dados.get('email')
    senha = dados.get('senha')
    try:
        usuario = obter_usuario_por_email(email)
        if usuario:
            db_password_salt = usuario[3]
            db_password_hash = db_password_salt[:-32]
            salt = db_password_salt[-32:]
            provided_password_hash = hash_password(senha, salt)
            if db_password_hash == provided_password_hash:
                return jsonify({"mensagem": "Login bem sucedido"}), 200
        return jsonify({"erro": "Email ou senha incorretos"}), 401
    except Exception as e:
        return jsonify({"erro": f"Erro ao fazer login: {str(e)}"}), 500
@app.route('/criar_tabela_plantas', methods=['GET'])
def rota_criar_tabela_plantas():
    criar_tabela_plantas()
    return jsonify({"mensagem": "Tabela de plantas criada com sucesso"}), 200

# Rota para inserir uma nova planta
@app.route('/inserir_planta', methods=['POST'])
def rota_inserir_planta():
    dados = request.json
    nome_comum = dados.get('nome_comum')
    tipo = dados.get('tipo')
    descricao = dados.get('descricao')
    modo_plantio = dados.get('modo_plantio')
    materiais = dados.get('materiais')
    modo_fazer = dados.get('modo_fazer')
    inserir_planta(nome_comum, tipo, descricao, modo_plantio, materiais, modo_fazer)
    return jsonify({"mensagem": "Planta inserida com sucesso"}), 201

# Rota para obter todas as plantas cadastradas
@app.route('/plantas', methods=['GET'])
def rota_obter_plantas():
    plantas = obter_plantas()
    plantas_formatadas = []
    for planta in plantas:
        planta_formatada = {
            "id": planta[0],
            "nome_comum": planta[1],
            "tipo": planta[2],
            "descricao": planta[3],
            "modo_plantio": planta[4],
            "materiais": planta[5],
            "modo_fazer": planta[6]
        }
        plantas_formatadas.append(planta_formatada)
    return jsonify({"plantas": plantas_formatadas}), 200

# Rota para obter informações de uma planta específica pelo nome comum
@app.route('/plantas/<string:nome_comum>', methods=['GET'])
def rota_obter_planta(nome_comum):
    planta = obter_planta(nome_comum)
    if planta:
        planta_formatada = {
            "id": planta[0],
            "nome_comum": planta[1],
            "tipo": planta[2],
            "descricao": planta[3],
            "modo_plantio": planta[4],
            "materiais": planta[5],
            "modo_fazer": planta[6]
        }
        return jsonify({"planta": planta_formatada}), 200
    else:
        return jsonify({"erro": "Planta não encontrada"}), 404

def generate_salt():
    return os.urandom(16).hex()

def hash_password(password, salt):
    return hashlib.sha256((password + salt).encode()).hexdigest()