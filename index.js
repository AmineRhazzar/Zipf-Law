const fs = require('fs');
var text = '';
var wordFrequencies = {};
fs.readFile('text.txt', (err, data) => {
    data.toString()
        .split(' ')
        .forEach((word) => {
            if (!(word in wordFrequencies)) {
                wordFrequencies[word] = 1;
            } else {
                wordFrequencies[word] = wordFrequencies[word] + 1;
            }
        })

    var sortedWordFrequencies = [];
    for (var word in wordFrequencies) {
        sortedWordFrequencies.push([word, wordFrequencies[word]])
    }

    var sortedWordFrequenciesJson = {};
    sortedWordFrequencies.sort((a, b) => {
        return b[1] - a[1];
    }).forEach((item) => {
        sortedWordFrequenciesJson[item[0]] = item[1];
    })




    fs.writeFile('word_frequencies.json', JSON.stringify(sortedWordFrequenciesJson, null, 4), (err) => {
        if (err) console.error(err);
    })

});