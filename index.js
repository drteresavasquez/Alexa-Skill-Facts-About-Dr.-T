var Alexa = require('alexa-sdk');
const https = require('https');
const definitions = require('./definitions.json');
const responses = require('./responses.json');

const keyFromSlot = slot => key => key.toUpperCase() === slot.toUpperCase();

const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', responses.LaunchRequest.ask, responses.LaunchRequest.reprompt);
    },
    'AMAZON.HelpIntent': function () {
        this.emit(':ask', responses["AMAZON.HelpIntent"].ask, responses["AMAZON.HelpIntent"].reprompt);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', responses["AMAZON.StopIntent"].tell);
    },
    'AMAZON.CancelIntent': function () {
        this.emit('AMAZON.StopIntent');
    },
    'SessionEndedRequest': function () {
        this.emit('AMAZON.StopIntent');
    },
    'Unhandled': function () {
        this.emit('AMAZON.HelpIntent');
    },
    'GetInformation': function () {
        var slot = this.event.request.intent.slots.Information.value;
        if (slot) {
            var info = Object.keys(definitions).find(keyFromSlot(slot));

            const definition = definitions[info];
            if (definition) {
                this.emit(":tellWithCard", definition, info, definition);
            } else {
                this.emit(":tell", "I'm sorry, I don't know information about " + slot + ". Please try again.");
            }
        } else {
            this.emit(":ask", "You need to ask a question. " + responses["AMAZON.HelpIntent"].reprompt, responses["AMAZON.HelpIntent"].reprompt);
        }

    }
};

exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};