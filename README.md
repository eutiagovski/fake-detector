# Classificador de Fake News

O que? 

Este projeto é um classificador que utiliza rede neural para reconhecer a probabilidade de uma notícia ser verdadeira ou falsa.


Por que? 


## Como utilizar
### Na íntegra
Você pode utilizar a aplicação diretamente no link: https://classificador-fakenews.herokuapp.com/

### Baixar o repositório
- Faça um clone deste repositório em sua máquina local
- Instale as dependências
- Inicie o servidor Flask

## Api

- POST
    - /predict: versão final do model para previsão
        - model input: Texto para análise
        - model output: resultado da inferência ao modelo, sendo o primeiro valor a probabilidade de ser da classe real, e o segundo a probabilidade de ser da classe fake


## Relatório Executivo

### Objetivo

O objetivo deste trabalho é disponibilizar um classificador de notícias falsas de fácil acesso, com interface interativa e treinado com notícias brasileiras, sendo capaz de processar dados em português. 

A necessidade desse tipo de classificador vem com a alta quantidade de notificas falsas que circulam na rede, com os mais diversos propósitos.

### Metodologia

Para a execução do proposto trabalho, iremos analisar diferentes modelos de classificadores, através do uso de técnicas de machine learning e deep learning. Nosso objetivo é encontrar o modelo com a melhor acurácia.

Os dados considerados para o treinamento do modelo foram obtidos do trabalho <a href='https://repositorio.unesp.br/handle/11449/234317'>FakeRecogna</a>, que compilou um total de 5.951 notícias distribuídas igualmente entre as classes real e fake.  Além disso, utlizamos as noticias 

### Desenvolvimento

O desenvolvimento do projeto pode ser acompanhado pelo notebook da pesquisa em anexo a este repositório.

### Conclusões

Nosso modelo até o presente momento atingiu uma acurácia de 96%.
Classificar textos é uma tarefa computacionalmente dificil. Além das diferentes particularidades de cada região, ainda há pouco material na língua portuguesa, o que dificulta qualquer pesquisa na área.

## Responsabilidade

Este é um trabalho experimental, portanto não assumimos nenhuma responsabilidade pela informação gerada.

Apesar de obtermos uma alta acurácia no teste e validação do modelo, no mundo real, a classificação de texto é uma das tarfas mais difíceis para uma máquina. Por isso, utilize nossa api como uma referência, uma ajuda para classificar uma notícia.

## Tecnologias Utilizadas

- Flask
- Tensorflow
- Keras
- Google Colab
- React

## Licença

MIT @ <a href='https://github.com/eutiagovski'>Tiago de Oliveira Machado</a> | tiagomachadodev@gmail.com

## Referências

Garcia, Gabriel L.; Afonso, Luis C. S.; Papa, João P.. FakeRecogna: A New Brazilian Corpus for Fake News Detection. Lecture Notes in Computer Science (including subseries Lecture Notes in Artificial Intelligence and Lecture Notes in Bioinformatics), v. 13208 LNAI, p. 57-67. Available at: <http://hdl.handle.net/11449/234317>