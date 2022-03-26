const { translate } = require('free-translate');
const fs = require('fs')

const readStream = fs.createReadStream('./input.txt')
const writeStream = fs.createWriteStream('en.translate.txt')

const asyncIterator = async (readeble) => {
    for await (const chank of readeble) {
        console.log(chank)
        const translateText = await translate(chank, { from: 'ru', to: 'en' })
        console.log(translateText)
        const writeFile = (filename, translateTo) => {
            new Promise((resolve, reject) => {
                fs.writeFile(filename, translateTo, (err, data) => {
                    if (err) {
                        return reject(err)
                    }
                    resolve(data)
                })
            })
        }
        writeFile('result.txt', translateText)
    }
}

asyncIterator(readStream)