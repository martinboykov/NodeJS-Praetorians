const { ObjectID } = require('mongodb');

class BaseData {
    constructor(db, ModelClass, validator) {
        this.db = db;
        this.ModelClass = ModelClass;
        this.validator = validator;
        this.collectionName = this._getCollectionName();
        this.collection = this.db.collection(this.collectionName);
    }

    getAll() {
            return this.collection.find()
                .toArray();
    }

    create(model) {
        return this.collectionName.insert(model)
            .then(() => {
                return model;
            });
    }

    _getCollectionName() {
        return this.ModelClass.name.toLowerCase() + 's';
    }
}

module.exports = BaseData;
