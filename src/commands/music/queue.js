module.exports = [{
    name: "queue",
    aliases: ["q"],
    $if: "old",
    code: `
    $if[$hasPlayer==true]
    $description[
    # Fila de músicas
    
    $queue[1;10;\`[{position}]\` {title} - <@{requester.user.id}>]
    ]
    $color[#FFFFFF]
    $else
    $description[
    # Fila de músicas
    
    não há nenhuma música a fila]
    $color[#FFFFFF]
    $endif`
}]