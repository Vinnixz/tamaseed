import json
from  backend.database.plantas import criar_tabela_plantas, inserir_planta

# Função para inserir as plantas do arquivo JSON no banco de dados
def inserir_plantas_from_json(json_file):
    criar_tabela_plantas()
    
    with open(json_file, 'r', encoding='utf-8') as file:
        data = json.load(file)
        for nome_comum, planta_info in data.items():
            tipo = planta_info.get('tipo', '')
            descricao = '\n'.join(planta_info.get('beneficios', []))
            modo_plantio = '\n'.join(planta_info['modo_plantio'].get('modo_fazer', []))
            materiais = '\n'.join(planta_info['modo_plantio'].get('materiais', []))

            try:
                inserir_planta(nome_comum, tipo, descricao, modo_plantio, materiais)
                print(f"Planta '{nome_comum}' inserida com sucesso.")
            except Exception as e:
                print(f"Erro ao inserir planta '{nome_comum}': {str(e)}")

if __name__ == "__main__":
    inserir_plantas_from_json('planta.json')