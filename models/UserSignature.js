const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSignatureSchema = new Schema({
    clientName: {
        type: String,
        required: true,
    },
    emailSignature: {
        type: Buffer,
        required: true,
    },
});

module.exports = mongoose.model('Usersignature', UserSignatureSchema);
