# TesteNodeApi

Essa API é utilizada para gerenciar um ambientes escolares.

O Projeto foi desenvolvido em NodeJs e MongoDB.

## Recursos disponíveis para acesso via API:

- Escolas
- Turmas
- Alunos

## Métodos
As requisições da api seguem o seguinte padrão:

| Método | Descrição|
|--------|----------|
|GET	 |Retorna informações de um ou mais registros.|
|POST	 |Utilizado para criar um novo registro.|
|PUT	 |Atualiza dados de um registro ou altera sua situação.|
|DELETE	 |Remove um registro do sistema.|

## Respostas
| Código | Descrição|
|--------|----------|
|200	 | Requisição executada com sucesso (success). |
|404     | Recurso não encontrado |
|500     | Ocorreu um erro em nossa aplicação (falha). |

## Recursos

### Escolas

#### Listar (List) [GET]

Rota: /escolas

Response 200 (application/json)

```
{
  "success": true,
  "message": "Requisição executada com sucesso.",
  "objEscolas": [
    {
      "_id": "xxxxxx",
      "nome": "nome",
      "cnpj": "cnpj",
      "__v": 0
    }
  ]
}
```

#### Obter por ID [GET]

Rota: /escolas/id

Response 200 (application/json)

```
{
  "success": true,
  "message": "Requisição executada com sucesso.",
  "objEscola":{
      "_id": "xxxxxx",
      "nome": "nome",
      "cnpj": "cnpj",
      "__v": 0
    }
}
```

#### Inserir Escola [POST]

Rota: /escolas/

Request Body
```
{
	"nome":"nome",
	"cnpj":"cnpj"
}
```

Response 200 (application/json)

```
{
  "success": true,
  "objEscola":{
      "_id": "xxxxxx",
      "nome": "nome",
      "cnpj": "cnpj",
      "__v": 0
    }
}
```

#### Alterar Escola [PUT]

Rota: /escolas/id

Request Body
```
{
	"nome":"nome",
	"cnpj":"cnpj"
}
```

Response 200 (application/json)

```
{
  "success": true,
  "message": "Requisição executada com sucesso."
}
```

#### Excluir Escola [PUT]

Rota: /escolas/id

Response 200 (application/json)

```
{
  "success": true,
  "message": "Registro excluído com sucesso."
}
```


### Turmas

#### Listar (List) [GET]

Rota: /turmas

Response 200 (application/json)

```
{
  "success": true,
  "message": "Requisição executada com sucesso.",
  "objTurmas": [
    {
      "_id": "xxxxxx",
      "nome": "nome",
      "escola": "escola",
      "__v": 0
    }
  ]
}
```

#### Obter por ID [GET]

Rota: /turmas/id

Response 200 (application/json)

```
{
  "success": true,
  "message": "Requisição executada com sucesso.",
  "objTurma":{
      "_id": "xxxxxx",
      "nome": "nome",
      "escola": "escola",
      "__v": 0
    }
}
```

#### Inserir Turma [POST]

Rota: /turmas

Request Body
```
{
    "nome": "nome",
    "escola": "escola"
}
```

Response 200 (application/json)

```
{
  "success": true,
  "objTurma":{
      "_id": "xxxxxx",
      "nome": "nome",
      "escola": "escola",
      "__v": 0
    }
}
```

#### Alterar Turma [PUT]

Rota: /turma/id

Request Body
```
{
	"nome": "nome",
    "escola": "escola"
}
```

Response 200 (application/json)

```
{
  "success": true,
  "message": "Requisição executada com sucesso."
}
```

#### Excluir Turma [PUT]

Rota: /turmas/id

Response 200 (application/json)

```
{
  "success": true,
  "message": "Registro excluído com sucesso."
}
```

### Alunos

#### Listar (List) [GET]

Rota: /alunos

Response 200 (application/json)

```
{
  "success": true,
  "message": "Requisição executada com sucesso.",
  "objAlunos": [
    {
      "_id": "xxxxxx",
      "nome": "nome",
      "turma": "turma",
      "__v": 0
    }
  ]
}
```

#### Obter por ID [GET]

Rota: /alunos/id

Response 200 (application/json)

```
{
  "success": true,
  "message": "Requisição executada com sucesso.",
  "objAluno":{
      "_id": "xxxxxx",
      "nome": "nome",
      "turma": "turma",
      "__v": 0
    }
}
```

#### Inserir Aluno [POST]

Rota: /alunos

Request Body
```
{
    "nome": "nome",
    "turma": "turma"
}
```

Response 200 (application/json)

```
{
  "success": true,
  "objAluno":{
      "_id": "xxxxxx",
      "nome": "nome",
      "turma": "turma",
      "__v": 0
    }
}
```

#### Alterar Aluno [PUT]

Rota: /alunos/id

Request Body
```
{
	"nome": "nome",
    "turma": "turma"
}
```

Response 200 (application/json)

```
{
  "success": true,
  "message": "Requisição executada com sucesso."
}
```

#### Excluir Aluno [PUT]

Rota: /alunos/id

Response 200 (application/json)

```
{
  "success": true,
  "message": "Registro excluído com sucesso."
}
```
