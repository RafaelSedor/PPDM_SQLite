
# Projeto de Gerenciamento de Carros com SQLite e Expo

Este projeto demonstra como utilizar o banco de dados SQLite em um aplicativo Expo com um padrão de repositório minimalista para centralizar as responsabilidades de acesso ao banco de dados.

## Funcionalidades

- Adicionar um novo carro
- Listar todos os carros
- Deletar um carro por ID
- Buscar carros por modelo
- Atualizar informações de um carro
- Buscar carros por intervalo de HP

## Pré-requisitos

- Node.js instalado
- Expo CLI instalado
- Git instalado

## Como rodar o projeto

1. Clone o repositório:

    ```bash
    git clone https://github.com/RafaelSedor/PPDM_SQLite.git
    cd dpdm-sqlite-expo-repository
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o projeto:

    ```bash
    npx expo start
    ```

## Estrutura do Projeto

- `src/database/CarRepository.ts`: Classe que gerencia o acesso ao banco de dados.
- `App.tsx`: Componente principal que carrega a tela inicial.
- `screens/Home.tsx`: Tela inicial onde é possível interagir com as funcionalidades do repositório de carros.

## Comandos úteis

- Para adicionar um carro:

    ```typescript
    await repository.create({ brand: "VW", model: "Fusca", hp: 50 });
    ```

- Para listar todos os carros:

    ```typescript
    const cars = await repository.all();
    ```

- Para deletar um carro:

    ```typescript
    await repository.deleteCar(1); // ID do carro
    ```

- Para buscar carros por modelo:

    ```typescript
    const cars = await repository.findByModel("Fusca");
    ```

- Para atualizar um carro:

    ```typescript
    await repository.updateCar({ id: 1, brand: "VW", model: "Fusca", hp: 60 });
    ```

- Para buscar carros por intervalo de HP:

    ```typescript
    const cars = await repository.findByHpRange(50, 100);
    ```

## Referências

- [Documentação Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/)
- [Repositório do projeto no GitHub](https://github.com/university-lessons/dpdm-sqlite-expo-repository)

## Vídeo Aula

Confira a videoaula para uma explicação detalhada sobre o projeto:

[Videoaula no YouTube](https://youtu.be/VPEkSmf5GhA)
