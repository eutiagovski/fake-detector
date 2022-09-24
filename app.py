from flask import Flask, request, url_for, redirect, render_template, jsonify
from flask_cors import CORS
from joblib import load 
import json

# load model
model = load('models/fake-detector_v0.joblib')

# load model
model_alt = load('models/fake-detector_alt_v0.joblib')

# initialize Flas app
app = Flask(__name__, static_folder="client/build/static", template_folder="client/build")
CORS(app) # new

# create home route
@app.route('/')
def home():
    return render_template('index.html')

# create predict route
@app.route('/predict', methods=['POST'])
def predict():

    
    #request text input
    inputs = [i for i in request.form.values()]
    predicted_scores = model.predict(inputs)

    # handle result
    result = None
    if predicted_scores[0][0] > 0.50:
        result = 'Verdadeira'
    else:
        result = 'Falsa'

    return {"result": result, 'probFalse': str(round(predicted_scores[0][1].round(2)*100, 2)), 'probTrue': str(round(predicted_scores[0][0].round(2)*100, 2))}

# create predict route
@app.route('/predict-alt', methods=['POST'])
def predict_alt():

    #request text input
    inputs = [i for i in request.form.values()]
    predicted_scores = model_alt.predict(inputs)

    result = None
    if predicted_scores[0][0] > 0.50:
        result = 'Verdadeira'
    else:
        result = 'Falsa'

    return {"result": result, 'probFalse': str(round(predicted_scores[0][1].round(2)*100, 2)), 'probTrue': str(round(predicted_scores[0][0].round(2)*100, 2))}


@app.route('/model_health/<model_id>', methods=['GET'])
def model_health(model_id):
    with open('metrics/{0}.json'.format(model_id)) as f:
        model_metrics = json.load(f)
        return model_metrics

if __name__ == '__main__':
    app.run()