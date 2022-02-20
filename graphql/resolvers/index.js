const {
  files
} = require('../../repository/db.js')

const resolvers = {
  Query: {
    files() {
      return files
    },
    fileById(_, request) {
      return files.filter(item => item.fileId === request.fileId)
    }
  },
  Mutation: {
    addFile(_, request) {
      const newFile = {
        fileId: request.fileId,
        fileName: request.fileName,
      }
      files.push(newFile)

      return newFile
    }
  }
}

module.exports = resolvers