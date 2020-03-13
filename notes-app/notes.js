const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return 'Your notes...'
}

const removeNote = function(title) {
    const notes = loadNotes()

    const newNotes = notes.filter(function (note) {
        return title !== note.title
    })

    if (notes.length > newNotes.length) {
        saveNotes(newNotes)
        console.log(chalk.white.bgGreen('Note removed!'))
    } else {
        console.log(chalk.white.bgRed('Note not found!'))
    }
}

const addNote = function(title, body) {
    const notes = loadNotes()
    const duplicateNodes = notes.filter(function (note) {
        return title === note.title
    })

    if (duplicateNodes.length === 0) {
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

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
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
    removeNote: removeNote
}
