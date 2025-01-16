import { z } from 'zod';

export const signUpSchema = z
  .object({
    fullName: z
      .string()
      .min(5, 'Nome muito curto')
      .transform(value => {
        return value
          .split(' ')
          .map(
            word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
          )
          .join(' ');
      }),
    email: z.string().email('E-mail inválido'),
    password: z.string().min(8, 'Mínimo 8 caracteres'),
    confirmPassword: z.string().min(8, 'Mínimo 8 caracteres'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
