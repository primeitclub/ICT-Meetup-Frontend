import {z} from "zod"

const MAX_SIZE = 5000000;
const IMAGE_TYPE = ["image'jpeg","image/jpg","image/png","image/webp"]

export const albumScheme = z.object({
    title:z.string().min(1, "Enter album title").max(30, "album name can not be more then 30 characters"),
    slug:z.string().min(1, "Enter album slug").max(30, "album name can not be more then 30 characters"),
    descriptio:z.string().min(1, "Enter album description"),
    thumbnail:z.any().refine( (file)=>file.length > 0 , "upload an image" )
                    .refine( (file)=>file?.[0]?.size < MAX_SIZE, "image size should be smaller then 5mb" )
                    .refine( (file)=>IMAGE_TYPE.includes( file?.[0]?.type ) , "image type invalid" )
})

export type AlbumFromSchema = z.infer<typeof albumScheme >