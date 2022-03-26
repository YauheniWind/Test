const { translate } = require('free-translate');
const fs = require('fs')

const readStream = fs.createReadStream('./input.txt')
const writeStream = fs.createWriteStream('en.translate.txt')

const asyncIterator = async (readeble) => {
    for await (const chank of readeble) {
        console.log(chank)
        const translateText = await translate(chank, { from: 'ru', to: 'en' })
        console.log(translateText)
        fs.writeFile('result.txt', translateText, err => {
            console.log(err)
        })
    }
}

asyncIterator(readStream)