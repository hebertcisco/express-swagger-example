import fs from 'fs';

export class Controller {
  index(req, res) {
    res.end("Hello World!");
  }
  swagger(req, res) {
    const readFile = fs.readFile('./json/swagger.json');
    console.log(readFile);
    res.json(JSON.parse(readFile));
  }
}
export default new Controller();