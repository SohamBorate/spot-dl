#!/usr/bin/env node
"use strict";

const fs = require("fs");
const cli_parse = require(".\\cli-parse.js");
const spotdlDownloader = require("spot-dl-downloader");

// credentials
if (!fs.existsSync(`${__dirname}\\..\\credentials.json`)) {
    fs.writeFileSync(`${__dirname}\\..\\credentials.json`, JSON.stringify({"clientId":".","clientSecret":"."}));
}
var credentials = require(`${__dirname}\\..\\credentials.json`);

// set app credentials
var set = (argv) => {
    if (argv.clientId) {
        credentials.clientId = argv.clientId;
        console.log("Successfully set clientId");
    }
    if (argv.clientSecret) {
        credentials.clientSecret = argv.clientSecret;
        console.log("Successfully set clientSecret");
    }
    fs.writeFileSync(`${__dirname}\\..\\credentials.json`, JSON.stringify(credentials));
}

// cli parser
var parser = cli_parse();
parser.then((data) => {
    if (data.cmd === "download") {
        new spotdlDownloader(credentials, process.cwd())
            .download(data.argv.spotifyurl, data.argv.redownload);
    }
    if (data.cmd === "set") {
        set(data.argv);
    }
});