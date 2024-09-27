module.exports = [{
    name: "play",
    aliases: ["p"],
    code: `
    $description[
    A música **$songInfo[title;$get[song]]** foi adicionado a fila
    ]
    $let[song;$sub[$queueLenght;1]]

    $playTrack[$message;spotify]
    $onlyIf[$voiceID[$clientID]==$voiceID[$authorID];<@$authorID>, Você precisa está no mesmo canal de voz que eu]
    $if[$hasPlayer==false;$joinVC]
    $onlyIf[$voiceID!=;<@$authorID>, Você não está em nenhum canal de voz]`
}]