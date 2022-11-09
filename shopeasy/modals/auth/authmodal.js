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
            require: true
        },
        inviteCode: {
            type: String,
            require: false,
            default: "masai-school"
        },
        role: {
            type: string,
            default: "user",
            enum: ["user", "admin"]
        },
        istermsaggreed: {
            type: Boolean,
            require: true,
            default: true
        },
        gender : {
            type : string ,
            enum : ["Male" , "Female"]
        }
    }, {
    versionKey: false
}
)

const authModal = mongoose.modelNames.authmodal || new mongoose.model("authmodal", authSchema)


export default authModal
