import mongoose from "mongoose";

// schema and modal

const authSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true,

        },
        inviteCode: {
            type: String,
            require: false,
            default: "masai-school"
        },
        role: {
            type: String,
            default: "user",
            enum: ["user", "admin"]
        },
        istermsaggreed: {
            type: Boolean,
            require: false,
            default: true
        },
        gender: {
            type: String,
            require  : false ,
            enum: ["Male", "Female"]
        },
        oauth: {
            type: String,
            enum: ["google", 'facebook'],
            require: true
        }
    }, {
    versionKey: false
}
)

const authModal = mongoose.models.authmodal ||mongoose.model("authmodal", authSchema)


export default authModal
