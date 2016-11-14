var restify = require('restify');
var builder = require('botbuilder');

var server = restify.createServer();
server.listen(process.env.port || 3978 || process.env.PORT, function () {
    console.log('%s listening to %s', server.name, server.url); 
});

// Get secrets from server environment
var botConnectorOptions = new builder.ChatConnector({ 
    appId: process.env.BOTFRAMEWORK_APPID, 
    appSecret: process.env.BOTFRAMEWORK_APPSECRET 
};

// Create bot
var bot = new builder.UniversalBot(botConnectorOptions);
server.post('/api/messages', botConnectorOptions.listen());
//bot.add('/', function (session) {
    
    //respond with user's message
   // session.send("hello, ur first bot message is " + session.message.text);
//});

bot.dialog('/', function (session) {
   session.send("Hello World");
});

// Setup Restify Server


// Handle Bot Framework messages


// Serve a static web page
//server.get(/.*/, restify.serveStatic({
	//'directory': '.',
//	'default': 'index.html'
//}));


