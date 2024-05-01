import json
from backend.database.plantas import criar_tabela_plantas, inserir_planta

def inserir_plantas_from_json(json_file):
    criar_tabela_plantas()
    
    with open(json_file, 'r', encoding='utf-8') as arquivo:
        dados = json.load(arquivo)
        for nome_comum, planta_info in dados.items():
            tipo = planta_info.get('tipo', '')
            descricao = '\n'.join(planta_info.get('beneficios', []))
            # Verifica se modo_fazer é uma lista ou uma string
            modo_fazer_data = planta_info['modo_plantio'].get('modo_fazer', [])
            modo_fazer = '\n'.join(modo_fazer_data) if isinstance(modo_fazer_data, list) else modo_fazer_data
        
            materiais = ', '.join(planta_info['modo_plantio'].get('materiais', []))
            image_url = ', '.join(planta_info.get('image_url', []))  # Transforma a lista de URLs em uma string
            try:
                inserir_planta(nome_comum, tipo, descricao, modo_plantio='', materiais=materiais, modo_fazer=modo_fazer, image_url=image_url)
                print(f"Planta '{nome_comum}' inserida com sucesso.")
            except Exception as e:
                print(f"Erro ao inserir planta '{nome_comum}': {str(e)}")

if __name__ == "__main__":
    inserir_plantas_from_json('planta.json')
