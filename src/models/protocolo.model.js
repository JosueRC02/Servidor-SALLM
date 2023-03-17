import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProtocoloSchema = new mongoose.Schema({
    filename: String,
    contentType: String,
    data: Buffer
}, {
    versionKey: false,
    timestamps: true
});

export default mongoose.model("Protocolo", ProtocoloSchema);