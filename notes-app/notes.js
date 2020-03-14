const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your notes...'

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.red('Your notes'))

    notes.forEach((note) => {
        console.log(chalk.green.bold(note.title))
    });
}

const removeNote = (title) => {
    const notes = loadNotes()

    const newNotes = notes.filter((note) => title !== note.title)

    if (notes.length > newNotes.length) {
        saveNotes(newNotes)
        console.log(chalk.white.bgGreen('Note removed!'))
    } else {
        console.log(chalk.white.bgRed('Note not found!'))
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNode = notes.find((note) => title === note.title)

    if (!duplicateNode) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.white.bgGreen('New note added.'))
    } else {
        console.log(chalk.white.bgRed('Note title already taken.'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    getNotes: getNotes,
    removeNote: removeNote,
    listNotes: listNotes
}
