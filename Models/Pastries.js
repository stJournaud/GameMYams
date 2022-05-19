import mongoose from "mongoose";

const {Schema, model } = mongoose;

export const PastriesSchema = new Schema({
    "name": {
        type : String
    },
    "number":  {
        type : Number
    },
    "combinations":  {
        type : Array
    },
    "order": {
        type : Number
    },

});

const PastriesModel = model('pastries', PastriesSchema);

export default PastriesModel;