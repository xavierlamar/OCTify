import mongoose from 'mongoose';

const ActSchema = mongoose.Schema({
    Province: {
        type: String,
        required: true
    },
    Departement: {
        type: String,
        required: true
    },
    Arrondissement: {
        type: String,
        required: true
    },
    cDe: {
        type: String,
        required: true
    },
    Numero: {
        type: Number,
        required: true
    },
    Nomdefamilledelenfant: {
        type: String,
        required: true
    },
    Prenomdelenfant: {
        type: String,
        required: true,
    },
    Le: {
        type: String,
        required: true,
    },
    Estnéà: {
        type: String,
        required: true,
    },
    DeSexe: {
        type: String,
        required: true,
    },
    PDe: {
        type: String,
        required: true,
    },
    PNéà: {
        type: String,
        required: true,
    },
    PLe: {
        type: String,
        required: true,
    },
    PDomiciliéà: {
        type: String,
        required: true,
    },
    PProfession: {
        type: String,
        required: true,
    },
    Etde: {
        type: String,
        required: true,

    },
    MNéà: {
        type: String,
        required: true,
    },
    MLe: {
        type: String,
        required: true,
    },
    MDomiciliéà: {
        type: String,
        default: false
    },
    MProfession: {
        type: String,
        required: true,
    },
    Dresséle: {
        type: String,
        required: true,
    },
    Surladeclarationnde: {
        type: String,
        required: true,
    },
    // Lesquels: {
    //     type: String,
    //     required: true,
    // },
    Parnous: {
        type: String,
        required: true,
    },
    Delétatcivilde: {
        type: String,
        required: true,
    },
    Assistéde: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: true,
    }
}, {
    timestamps: true
});


export default mongoose.model('Act', ActSchema);