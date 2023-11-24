import { TypeOf, z } from "zod"

const fileTypes = ['image/jpeg','image/jpg','image/png','image/svg'];
const MaxSize = 5000000;


// url check 
const urlCheck = (str:string)=>{
        const StandrRegx = /^(ftp|http|https):\/\/[^ "]+$/;
        return StandrRegx.test(str)
}

export const zodSpeaker = z.object({

    event:z.string(),
    name:z.string(),
    image:z.any().refine( (file)=> fileTypes.includes(file?.[0].type),"the file type is invalid"  ).refine( (file)=>file?.[0].size < MaxSize , "Image file size limits 5mb only" ),
    description:z.string().min(3,"speaker Description should at least be 3 character"),
    facebook:z.string().refine( urlCheck, "Registration link must be a valid URL format (http://example.com)" ),
    twitter:z.string().refine( urlCheck, "Registration link must be a valid URL format (http://example.com)" ),
    linkedin:z.string().refine( urlCheck, "Registration link must be a valid URL format (http://example.com)" )
})

export type SpekaerSchema = z.infer<typeof zodSpeaker>

