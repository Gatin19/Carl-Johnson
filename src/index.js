const { AoiClient } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@aoijs/aoi.music");
const { Handler } = require("aoi.js-handler");
require("dotenv").config();

const client = new AoiClient({
    token: process.env.token,
    prefix: "c?",
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here",
    },
});

const voice = new AoiVoice(client, {
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
    },
    searchOptions: {
        spotifyAuth: {
            clientId: process.env.spotifyID,
            clientSecret: process.env.spotifySecret 
        }
    }
});

// optional (cacher / filter)
voice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));
voice.addPlugin(PluginName.Filter, new Filter({
    filterFromStart: false
})),

    voice.bindExecutor(client.functionManager.interpreter);

const handler = new Handler(
    {
        client: client,
        readyLog: true
    },
    {
        // Additional Handler configuration options go here
    },
    __dirname
);

handler.loadCommands('./commands');
handler.loadVariables('./misc/variables.js')