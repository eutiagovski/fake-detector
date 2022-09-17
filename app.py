from flask import Flask, request, url_for, redirect, render_template, jsonify
from joblib import load 

# load model
model = load('models/fake-detector_v0.joblib')

# initialize Flas app
app = Flask(__name__, template_folder='templates')

# create home route
@app.route('/')
def home():
    return render_template('home.html')

# create predict route
@app.route('/predict', methods=['POST'])
def predict():
    #request text input

    inputs = [i for i in request.form.values()]
    predicted_scores = model.predict(inputs)
    pred = 'Esta notícia tem {}% de chance de ser verdadeira, e {}% chance de ser falsa'.format(round(float(predicted_scores[0][0]), 2), round(float(predicted_scores[0][1]), 2))

    return render_template('home.html', pred=pred)
    # return pred

@app.route('/model_health/<model_id>', methods=['GET'])
def model_health(model_id):
    with open('metrics/model_metrics_version_{0}.json'.format(model_id)) as f:
        model_metrics = json.load(f)
        return model_metrics

if __name__ == '__main__':
    app.run()