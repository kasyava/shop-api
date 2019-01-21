const fs = require("fs");

const file = "./test.txt";

/*
fs.writeFile(file, "Hello world", (error) => {
    if(error) console.log(error);
    else console.log("file was saved!");
});
*/

module.exports = {
    data: [],
    init: (data, callback) => {
        fs.readFile("./db.json", (err, res) => {
            if(err) throw  err;
            data =  JSON.parse(res);
            callback();

        })
    },
    addItem: (data, item) => data.push(item),
    saveData: (data, callback) => {
        fs.writeFile("./db.json", JSON.stringify(data), err =>{
            if(err) throw err;
            callback();
        })
    }

};