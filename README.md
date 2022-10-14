# Classificador de Fake News

https://classificador-fakenews.herokuapp.com/


Este projeto é uma prova de conceito sobre o uso da Inteligência Artificial para classificação de notícias brasileiras. Utilizando técnicas de aprendizado de máquina, treinamos um modelo com mais de 5 mil notícias verdadeiras e falsas, e obtemos desse treinamento características que possibilitam a classificação de um novo texto.

A detecção de notícias falsas é um problema crítico, porém desafiador, no Processamento de Linguagem Natural (NLP). A rápida ascensão das redes sociais plataformas não apenas gerou um grande aumento na acessibilidade da informação, mas também acelerou a disseminação de notícias falsas. Desta forma, o efeito das notícias falsas vem crescendo, às vezes se estendendo ao mundo offline e ameaçando a segurança pública. Dado o massivo quantidade de conteúdo da Web, a detecção automática de notícias falsas é um problema prático de PNL útil para todos os provedores de conteúdo online, a fim de reduzir o tempo e o esforço humano para detectar e impedir a disseminação de notícias falsas. 

Logo, este trabalho tem como objetivo realizar uma prova de conceito sobre o uso da Inteligência Artificial como um aliado para classificação de notícias falsas. Realizaremos a experimentação e construção de um modelo funcional de classificação de notícias através do uso de técnicas de aprendizagem de máquina, e a disponibilização de um portal dinâmico e acessível a todos, como ferramenta útil para a sociedade. Nesse contexto, exploraremos o uso de redes neurais na busca daquele que possuir a melhor acurácia, sendo possível representar de forma satisfatória resultados em dados reais e atualizados.

Saiba mais:

<a href='https://classificador-fakenews.herokuapp.com/'>Acesse o classificador e verifique uma notícia</a>

<a href='https://github.com/eutiagovski/fake-detector/tree/main/notebooks/'>Veja aqui o desenvolvimento do projeto na íntegra.</a>

<a href='https://github.com/eutiagovski/fake-detector/tree/main/docs/'>Leia aqui o artigo completo sobre este projeto.</a>

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


## Responsabilidade

Este trabalho é uma prova de conceito, portanto não assumimos nenhuma responsabilidade pela informação gerada.
Utilize nossa api apenas como uma referência, uma ajuda para classificar uma notícia.

## Tecnologias Utilizadas

- Flask
- Tensorflow
- Keras
- Google Colab
- React

## Licença

MIT @ <a href='https://github.com/eutiagovski/fake-detector/blob/main/LICENSE'>Tiago de Oliveira Machado</a> | tiagomachadodev@gmail.com


## Referências
Garcia, Gabriel L.; Afonso, Luis C. S.; Papa, João P.. "FakeRecogna: A New Brazilian Corpus for Fake News Detection." (2022)

Santos, Roney L. S., Rafael A. Monteiro and Thiago Alexandre Salgueiro Pardo. “The Fake . Br corpus-a corpus of fake news for Brazilian Portuguese.” (2018).

Oshikawa, Ray and Qian, Jing and Wang, William Yang. "A Survey on Natural Language Processing for Fake News Detection". (2018)

