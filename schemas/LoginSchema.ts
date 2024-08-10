import {z} from 'zod';

export const LoginValidationSchema = z.object ({
    username: z.string({
    invalid_type_error: 'Please enter a valid name'
    }).min(3, 'Name should be atleast 3 characters long'),
    password: z.string().min(8,'Password should atleast 8 characters .'),

})