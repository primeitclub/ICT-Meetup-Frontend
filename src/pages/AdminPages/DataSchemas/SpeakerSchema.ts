import { TypeOf, z } from 'zod';

const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/svg'];
const MaxSize = 5000000;

// url check
const urlCheck = (str: string) => {
 const StandrRegx = /^(ftp|http|https):\/\/[^ "]+$/;
 return StandrRegx.test(str);
};

export const zodSpeaker = z.object({
 event: z.string().min(1, 'select an event'),
 name: z.string().min(1, 'name should be more then 1 character'),
 image: z
  .any()
  .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), 'the files type is invalid')
  .refine((files) => files?.[0]?.size < MaxSize, 'Image files size limits 5mb only'),

 description: z.string().min(3, 'speaker Description should at least be 3 character'),
 facebook: z
  .string()
  .refine(urlCheck, 'Registration link must be a valid URL format (http://example.com)'),
 twitter: z
  .string()
  .refine(urlCheck, 'Registration link must be a valid URL format (http://example.com)'),
 linkedin: z
  .string()
  .refine(urlCheck, 'Registration link must be a valid URL format (http://example.com)')
});

export type SpekaerSchema = z.infer<typeof zodSpeaker>;
