module.exports = [{
    name: "play",
    aliases: ["p"],
    $if: "old",
    code: `
    $description[
    A música **$songInfo[title;$get[song]]** foi adicionado a fila
    ]
    $let[song;$sub[$queueLenght;1]]

    $playTrack[python Phonk;spotify]

    $if[hasPlayer==false]
    $joinVC[$voiceID[$authorID]]
    $endif
    $onlyIf[$voiceID[$clientID]!=$voiceID[$authorID];<@$authorID>, Você precisa está no mesmo canal de voz que eu]
    $onlyIf[$voiceID!=;<@$authorID>, Você não está em nenhum canal de voz]`
}]