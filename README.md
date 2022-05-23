# api funcional com de criação de veiculos e arquivos

# rota Post para inscrever um novo veiculo

rodar a api yarn dev

http://localhost:3000/veicle/register

No body
um exemplo

{ "plate": "AB3e33",
"chassis": "1BRabcdefg3100000",
"renavam": 10080009,
"model": "Diablo",
"brand": "brand Test",
"year": "07/11/1998"}

o retorno deve ser o corpo da requisição com a id do veiculo no final

# para listar todos os veiculos registrados rota get

http://localhost:3000/veicle/list

retorna a lista de veiculos

# criar o arquivo do veiculo veiculo estou deixando o arquivo no ./src/arquive do projeto

http://localhost:3000/veicle/createarquive/<id do veiculo>

# atualizar veiculo 
  http://localhost:3000/veicle/update/<id do veiculo>

é possivel atualizar todos os elementos do veiculo

# deletar arquivo do veiculo rota delet

http://localhost:3000/veicle/arquive/<id do veiculo>

# deletar o dado do veiculo no banco

http://localhost:3000/veicle/<id do veiculo>
