import { z } from "zod";

// const SelectValues = ["Salmon", "Tuna", "Trout"] as const ;

const urlCheck = ( str:string )=>{
    const urlRegx = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegx.test(str)
}

export const addEventSchema = z.object({
  title: z.string().min(3, "Event Title must be at least 3 characters long").max(70, "Event Title can not be 30 characters long"),
  slug: z.string().min(3, "Event Slug must be at least 3 characters long"),
  category: z.string().min(1,"choose an option"),
  desciption:z.string().min(3, "Event Title must be at least 3 characters long"),
  registrationLink:z.string().refine( urlCheck , "Registration link must be a valid URL format (http://example.com)" ),
  venue:z.string(),  
});

export type AddEventFormValues = z.infer<typeof addEventSchema>;
 