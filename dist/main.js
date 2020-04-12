"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const messageBird = require("messagebird");
const originator = core.getInput('originator');
const recipients = core.getInput('recipients').split(',');
const body = core.getInput('body');
const apiKey = core.getInput('MESSAGEBIRD_API_KEY') || process.env.MESSAGEBIRD_API_KEY;
const messageBirdClient = messageBird(apiKey);
messageBirdClient.messages.create({
    originator: originator,
    body: body,
    recipients: recipients
}, function (err, message) {
    if (err) {
        core.setFailed(err.message);
    }
    else {
        core.setOutput('id', message.id);
    }
});
