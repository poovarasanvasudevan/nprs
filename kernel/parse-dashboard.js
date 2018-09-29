var ParseDashboard = require('parse-dashboard');
var options = { allowInsecureHTTP: true };
var dashboard = new ParseDashboard({
    "apps": [
        {
            "serverURL": "http://localhost:3000/parse",
            "appId": "myAppId",
            "masterKey": "myMasterKey",
            "appName": "MyApp"
        }
    ]
} , options);


module.exports = dashboard;