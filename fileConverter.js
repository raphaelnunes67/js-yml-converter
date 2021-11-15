var FileConverter = /** @class */ (function () {
    function FileConverter() {
    }
    FileConverter.prototype.yml_to_json = function (inputFile, outputFile) {
        var yaml = require('js-yaml');
        var fs = require('fs');
        try {
            var obj = yaml.load(fs.readFileSync(inputFile, { encoding: 'utf-8' }));
            fs.writeFileSync(outputFile, JSON.stringify(obj, null, 2));
        }
        catch (Error) {
            console.log("error");
        }
    };
    FileConverter.prototype.json_to_yml = function (inputFile, outputFile) {
        var yaml = require('js-yaml');
        var fs = require('fs');
        try {
            var obj = JSON.parse((fs.readFileSync(inputFile)));
            fs.writeFileSync(outputFile, yaml.dump(obj, {
                flowLevel: 3
            }));
        }
        catch (Error) {
            console.log("error");
        }
    };
    return FileConverter;
}());
var op = new FileConverter();
op.yml_to_json("file.yml", "file.json");
//op.json_to_yml("file.json", "file.yml");
