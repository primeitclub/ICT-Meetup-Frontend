import {z} from 'zod'

export const registerSchema = z.object({
    email: z.string().email("Invalid email address"),
    address: z.string().min(1, "Address is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    re_password: z.string().min(6, "Password must be at least 6 characters long"),
    username: z.string().min(6, "Username must be at least 6 characters long"),
    // phone: z.string().min(10, "Phone number must be at least 10 characters long")
    // .regex(/^\9\d{9}$/, "Phone number must be a number"),
    phone: z.string().min(10, "Phone number must be at least 10 characters long").max(10, "Phone number must be at most 10 characters long"),
    college_name: z.string().min(1, "College name is required"),
    TnCFlag: z.boolean().refine((val) => val === true, "You must agree to the terms and conditions")
}).refine((data) => data.password === data.re_password, {message: "Passwords do not match", path: ["re_password"]})

export type RegisterSchemaType = z.infer<typeof registerSchema>
