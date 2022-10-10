import spacy
import re


class SpacyTextPreProcess:
    def __init__(self):
        self.nlp = spacy.load("pt_core_news_sm")
  
    def transform(self, text):
        # remocao de caracteres especiais e transformando o texto em minusculo
        text = re.sub(r'[^\w\s]', '', str(text).lower().strip())

        # aplicando a biblioca spicy para lematizacao do texto
        lst_text = ' '.join([i.lemma_ for i in self.nlp(text) if not i.is_punct and not i.is_stop])

        return lst_text