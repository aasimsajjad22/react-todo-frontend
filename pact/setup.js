const path = require("path");
const Pact = require("@pact-foundation/pact").Pact;

global.port = 1234;
global.provider = new Pact({
    port: global.port,
    cors: true,
    log: path.resolve(process.cwd(), "pact/logs", "mockserver-integration.log"),
    loglevel: "debug",
    dir: path.resolve(process.cwd(), "pact/pacts"),
    spec: 2,
    pactfileWriteMode: "overwrite",
    consumer: "react-consumer",
    provider: "go-provider",
    host: "localhost",
    timeout: 2000
});