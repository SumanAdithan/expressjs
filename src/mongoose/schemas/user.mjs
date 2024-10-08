import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    displayName: String,
    password: {
        type: String,
        required: true,
    },
});

export const User = mongoose.model('user', UserSchema);
