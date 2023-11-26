import { z } from "zod"

const ACCEPTED_FILES = ['image/jpeg','image/jpg','image/png','image/svg'];
const MaxSize = 5000000;


// url check 
const urlCheck = (str:string)=>{
        const StandrRegx = /^(ftp|http|https):\/\/[^ "]+$/;
        return StandrRegx.test(str)
}

export const zodMember = z.object({

    name:z.string().min(1, "Please enter new member name"),
    image:z.any().refine( (file)=> ACCEPTED_FILES.includes(file?.[0]?.type),"the file type is invalid"  ).refine( (file)=>file?.[0]?.size < MaxSize , "Image file size limits 5mb only" ),
    Category:z.string().min(1,"Select Category"),
    facebook:z.string().refine( urlCheck, "Registration link must be a valid URL format (http://example.com)" ),
    twitter:z.string().refine( urlCheck, "Registration link must be a valid URL format (http://example.com)" ),
    linkedin:z.string().refine( urlCheck, "Registration link must be a valid URL format (http://example.com)" ),
    description:z.string().min(3,"speaker Description should at least be 3 character"),

})

export type MemberSchema = z.infer<typeof zodMember>

