import { model, models, Schema } from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
    },
    image:{
        type:String,
    }
},{timestamps:true});

userSchema.pre("save",async function (){
    if (this.password && this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
})

const User = models?.User || model("User",userSchema)

export default User;


