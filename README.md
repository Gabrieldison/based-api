# Cadastro de carro

**Rf**
Deve ser possivel cadastrar um novo carro.

Deve ser possivel listar todas as categorias.

**RN**
Não deve ser possivel cadastrar um carro com placa já existente.

Não deve ser possivel alterar a placa de um carro já cadastrado.

O carro deve ser cadastrado, por padrão, com disponibilidade.

O usuário responsavel pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**Rf**
Deve ser possivel listar todos os carros disponiveis.
Deve ser possivel listar todos os carros disponiveis pelo nome da categoria
Deve ser possivel listar todos os carros disponiveis pelo nome da marca
Deve ser possivel listar todos os carros disponiveis pelo nome do carro.

**RN**
O usuário não precisa estar logado no sistema

# Cadastro e especificação no carro

**Rf**
Deve ser possivel cadastrar uma especificação para um carro não cadastrado.
Deve ser possivel listar todas as especificações.
Deve ser possivel listar todos os carros.

**RN**
Não deve ser possivel cadastrar uma especificação para um carro não cadastrado.
Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagem e carro

**RF**
Deve ser possivel cadastrar imagem de carro.
Deve ser possivel lista todos os carros.

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**RF**
Deve ser possivel cadastrar um aluguel.

**RN**
O aluguel deve ter duração minima de 24 horas.
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
