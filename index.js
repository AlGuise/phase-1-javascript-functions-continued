// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(workDayActivity = 'go to the office') {
    return `This Monday, I will ${workDayActivity}.`
}

function wrapAdjective(symbol) {
    const part1 = `You are `;
    return function (wordWrap) {
        const part2 = `${symbol}${wordWrap}${symbol}!`
        return (part1 + part2)
    }
}