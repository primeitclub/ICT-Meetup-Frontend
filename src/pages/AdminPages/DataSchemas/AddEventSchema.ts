import { z } from "zod";


export const addEvent = z.object( {
    title:z.string().min(3,"Event Title must be at least 3 characters long")
} )