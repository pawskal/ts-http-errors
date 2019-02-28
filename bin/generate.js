const fs = require('fs');
const errors = require('./errors.json');

const stream = fs.createWriteStream('index.ts');
stream.once('open', function(fd) {
  stream.write(
    'export class ExtendedError extends Error {\n' +
      `\tconstructor(public message: string = '', public statusCode: number = 500, public name: string = '') {\n` +
        '\t\tsuper(message)\n' +
      '\t}\n' +
      '\ttoJSON() {\n' +
        '\t\treturn {\n' +
          '\t\t\tname: this.name,\n' +
          '\t\t\tstatus: this.statusCode,\n' +
          '\t\t\tmessage: this.message\n' +
        '\t\t}\n' +
      '\t}\n' +
    '}\n\n'
  )

  errors.forEach(err => {
    const [[code, name]] = Object.entries(err);

    stream.write(
      `export class ${name}Error extends ExtendedError {\n` +
        `\tconstructor(message: string = '${name}') {\n` +
          `\t\tsuper(message, ${code}, '${name}Error')\n` +
        '\t}\n' +
      '}\n\n'
    )
  })
})
