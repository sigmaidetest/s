let AWS = require('aws-sdk');
const ml = new AWS.MachineLearning();
exports.handler = function (event, context, callback) {

	let response;
	ml.predict({
		MLModelId: 'ml-vNRcmFvuY0c',
		PredictEndpoint: 'https://realtime.machinelearning.us-east-1.amazonaws.com',
		Record: { "age": "32.0", "job": "services", "marital": "divorced", "education": "basic.9y", "default": "no", "housing": "unknown", "loan": "yes", "contact": "cellular", "month": "dec", "day_of_week": "mon", "duration": "110.0", "campaign": "1.0", "pdays": "11.0", "previous": "0.0", "poutcome": "nonexistent", "emp_var_rate": "-1.8", "cons_price_idx": "94.465", "cons_conf_idx": "-36.1", "euribor3m": "0.883", "nr_employed": "5228.1" }
	}, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else {
			console.log(data);
			response = data
		};           // successful response
	});


	callback(null, response);
}