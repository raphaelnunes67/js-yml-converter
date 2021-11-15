declare function require(name: string): any;

class FileConverter {
  inputFile: string;
  outputFile: string;


  yml_to_json(inputFile, outputFile): void {

    const yaml = require('js-yaml');
    const fs = require('fs');
    try {
      const obj = yaml.load(fs.readFileSync(inputFile, { encoding: 'utf-8' }));
      fs.writeFileSync(outputFile, JSON.stringify(obj, null, 2));
    }
    catch (Error) {
      console.log("error");
    }
  }
  json_to_yml(inputFile, outputFile): void {

    const yaml = require('js-yaml');
    const fs = require('fs');
    try {
      const obj = JSON.parse((fs.readFileSync(inputFile)));
      fs.writeFileSync(outputFile, yaml.dump(obj, {
        flowLevel: 3
      }));

    }
    catch (Error) {
      console.log("error")
    }

  }
}

const op = new FileConverter();
op.yml_to_json("file.yml","file.json");
//op.json_to_yml("file.json", "file.yml");