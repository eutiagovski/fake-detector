# Classificador de Fake News

https://classificador-fakenews.herokuapp.com/


Este projeto é um classificador que utiliza inteligência artificial para nos ajudar a reconhecer fakenews.


## Como utilizar a Api

#### Modelo Principal - Regressão Linear (Acurácia: 85%)
- POST
    - /predict: versão final do model para previsão
        - model input: Texto para análise
        - model output: resultado da inferência ao modelo, sendo o primeiro valor a probabilidade de ser da classe real, e o segundo a probabilidade de ser da classe fake


#### Modelo Alternativo - Rede Neural 1 Dimensão (Acurácia: 80%)
- POST
    - /predict-alt: versão final do model para previsão
        - model input: Texto para análise
        - model output: resultado da inferência ao modelo, sendo o primeiro valor a probabilidade de ser da classe real, e o segundo a probabilidade de ser da classe fake


#### Métricas dos Modelos
- GET
    - /model_health/linear: retorna 
    - /model_health/neural: versão final do model para previsão


## Relatório Executivo
### Introdução 
A detecção de notícias falsas é um problema crítico, porém desafiador, no Processamento de Linguagem Natural (NLP). 

A rápida ascensão das redes sociais plataformas não apenas gerou um grande aumento na acessibilidade da informação, mas também acelerou a disseminação de notícias falsas. Desta forma, o efeito das notícias falsas vem crescendo, às vezes se estendendo ao mundo offline e ameaçando a segurança pública. 

Dado o massivo quantidade de conteúdo da Web, a detecção automática de notícias falsas é um problema prático de PNL útil para todos os provedores de conteúdo online, a fim de reduzir o tempo e o esforço humano para detectar e impedir a disseminação de notícias falsas. 

### Objetivo

O objetivo deste trabalho é disponibilizar um classificador de notícias falsas de fácil acesso, com interface interativa e treinado com notícias brasileiras, sendo capaz de processar dados em português. 

A necessidade desse tipo de classificador vem com a alta quantidade de notificas falsas que circulam na rede, com os mais diversos propósitos.

### Metodologia

Para a execução do proposto trabalho, iremos analisar diferentes modelos de classificadores, através do uso de técnicas de machine learning e deep learning. Nosso objetivo é encontrar o modelo com a melhor acurácia.

Os dados considerados para o treinamento do modelo foram obtidos do trabalho <a href='https://repositorio.unesp.br/handle/11449/234317'>FakeRecogna</a>, que compilou um total de 5.951 notícias distribuídas igualmente entre as classes real e fake.  Além disso, utlizamos as noticias compiladas no corpus para enriquecer nosso texto.

### Desenvolvimento

O desenvolvimento do projeto pode ser acompanhado pelo notebook da pesquisa em anexo a este repositório.

### Conclusões

Nosso modelo até o presente momento atingiu uma acurácia de 80% na validação final.
Classificar textos é uma tarefa computacionalmente dificil. Além das diferentes particularidades de cada região, ainda há pouco material na língua portuguesa, o que representa um desafio para qualquer desenvolvimento na área.

## Responsabilidade

Este é um trabalho experimental, portanto não assumimos nenhuma responsabilidade pela informação gerada.

Apesar de obtermos uma boa acurácia no teste e validação do modelo, no mundo real, a classificação de texto é uma das tarfas mais difíceis para uma máquina. Por isso, utilize nossa api como uma referência, uma ajuda para classificar uma notícia.

## Tecnologias Utilizadas

- Flask
- Tensorflow
- Keras
- Google Colab
- React

## Licença

MIT @ <a href='https://github.com/eutiagovski'>Tiago de Oliveira Machado</a> | tiagomachadodev@gmail.com


## Referências
Garcia, Gabriel L.; Afonso, Luis C. S.; Papa, João P.. "FakeRecogna: A New Brazilian Corpus for Fake News Detection." (2022)

Santos, Roney L. S., Rafael A. Monteiro and Thiago Alexandre Salgueiro Pardo. “The Fake . Br corpus-a corpus of fake news for Brazilian Portuguese.” (2018).

Oshikawa, Ray and Qian, Jing and Wang, William Yang. "A Survey on Natural Language Processing for Fake News Detection". (2018)

