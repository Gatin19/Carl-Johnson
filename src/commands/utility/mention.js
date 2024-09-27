module.exports = [{
    name: "<@$clientID>",
    aliases: ["<@!$clientID>"],
    nonPrefixed: true,
    code: `
    $reply
    Olá $username, meu prefixo é \`c?\`.
    `
}]