import { z } from 'zod';

// image size and type 
const ACCEPTED_IMAGE_TYPES = [ 'image/jpeg','image/jpg','image/png','image/svg'] ;
const MAX_FILE_SIZE = 5000000;


export const addEventSchema = z.object({
  title: z.string().min(3, "Event Title must be at least 3 characters long").max(70, "Event Title can not be 30 characters long"),
  slug: z.string().min(3, "Event Slug must be at least 3 characters long"),
  category: z.string().min(1,"choose an option"),  
  description:z.string().min(3, "Event Description must be at least 3 characters long"),
  location:z.string(), 
  floor:z.string().min(1,"Floor should be mentioned"),
  roomNo: z.string().min(1,"Room number should be specified"),
  eventDate:z.string(),
  eventThumbnail:z.any()
  // .refine(
  //   (files)=> files.length < 0 ,"Please upload an image"
  //   )
  .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ).refine((files) => files?.[0]?.size < MAX_FILE_SIZE, `Max image size is 5MB.`),

  startTime:z.any(),
  endTime:z.any(),
  totalSeats:z.number(),
});

export type AddEventFormValues = z.infer<typeof addEventSchema>;
                          