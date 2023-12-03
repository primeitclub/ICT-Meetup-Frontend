import { z } from 'zod';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const memberSchema = z.object({
    name: z.string().min(3, "Team member name must be at least 3 characters long").max(30, "Team member name must be at most 30 characters long"),
    image:z.any()
    .refine(
        (files) => files.length > 0, "Team member image is required.",
        )
    .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
        )
        .refine((files) => files?.[0]?.size < MAX_FILE_SIZE, `Max image size is 5MB.`),
})

export const teamInfoSchema = z.object({
    teamName: z.string().min(3, "Team name must be at least 3 characters long").max(30, "Team name must be at most 30 characters long"),
    teamLogo:z.any()
        .refine(
              (files) => files.length > 0, "Team logo is required.",
        )
        .refine(
        //non empty condition       
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
        )
        .refine((files) => files?.[0]?.size < MAX_FILE_SIZE, `Max image size is 5MB.`),
    teamLeaderName: z.string().min(3, "Team leader name must be at least 3 characters long").max(30, "Team leader name must be at most 30 characters long"),
    teamLeaderImage: z.any().refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
        )
        .refine((files) => files?.[0]?.size < MAX_FILE_SIZE, `Max image size is 5MB.`),
})

export const teamSubSchema = z.object({
    teamSubName: z.string().min(3, "Team manager name must be at least 3 characters long").max(30, "Team manager name must be at most 30 characters long"),
    teamSubImage: z.any().refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported."
        )
        .refine((files) => files?.[0]?.size < MAX_FILE_SIZE, `Max image size is 5MB.`),
})

export const teamMemberSchema = z.object({
    teamMembers: z.array(memberSchema)
    .min(4, "Team must have 5 members with leader")
    .refine((members) => members.length === 4, {message: "Team must have 5 members with leader"}),
})

export type teamInfoSchemaType = z.infer<typeof teamInfoSchema>
export type teamSubSchemaType = z.infer<typeof teamSubSchema>
export type teamMemberSchemaType = z.infer<typeof teamMemberSchema>


// export const valorantRegistrationSchema = z.object({
//     teamName: z.string().min(3, "Team name must be at least 3 characters long").max(30, "Team name must be at most 30 characters long"),
//     teamLogo:z.any()
//         .refine(
//               (files) => files.length > 0, "Team logo is required.",
//         )
//         .refine(
//         //non empty condition       
//         (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
//         "Only .jpg, .jpeg, .png and .webp formats are supported."
//         )
//         .refine((files) => files?.[0]?.size < MAX_FILE_SIZE, `Max image size is 5MB.`),
//     teamLeaderName: z.string().min(3, "Team leader name must be at least 3 characters long").max(30, "Team leader name must be at most 30 characters long"),
//     teamLeaderImage: z.any().refine(
//         (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
//         "Only .jpg, .jpeg, .png and .webp formats are supported."
//         )
//         .refine((files) => files?.[0]?.size < MAX_FILE_SIZE, `Max image size is 5MB.`),
//     teamSubName: z.string().min(3, "Team manager name must be at least 3 characters long").max(30, "Team manager name must be at most 30 characters long"),
//     teamSubImage: z.any(),
//     teamMembers: z.array(memberSchema)
//     .min(4, "Team must have 5 members with leader")
//     .refine((members) => members.length === 4, {message: "Team must have 5 members with leader"}),
// })

// export  type valorantRegstrationSchemaType = z.infer<typeof valorantRegistrationSchema>