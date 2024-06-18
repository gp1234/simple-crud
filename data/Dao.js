var path = require('path');
var fs = require('fs');

class Dao {
    constructor() {
        var filePath = path.join(__dirname, '..', 'data', 'names.json');
  
        fs.readFile(filePath, 'utf8', (err, data) => {
          try {
            this.data = JSON.parse(data);
          } catch (parseError) {
            console.error(parseError);
       
          }
        });
    }
    

    static getInstance() {
        if (!Dao.instance) {
            Dao.instance = new Dao();
        }
        return Dao.instance;
    }


    getNames(id) {
        if(id) {
            const data =  this.data.find((data) => data.id == id);
            if(data) {
                return data.name
            }
            else {
                return null;
            }
        }
        return this.data.map((data) => data.name);
    }

    createName(name) {
        const id = this.data.length + 1;
        this.data.push({id, name});
        return {id, name};
    }

    update(id, name) {
        const data = this.data.find((data) => data.id == id);
        console.log(data)
        if(data) {
            data.name = name;
            return {id, name};
        }
        else {
            return null;
        }
    }
    delete(id) {
        const data = this.data.find((data) => data.id == id);
        if(data) {
            this.data = this.data.filter((data) => data.id != id);
            return {id, name: data.name};
        }
        else {
            return null;
        }
    }


}

module.exports = Dao.getInstance();