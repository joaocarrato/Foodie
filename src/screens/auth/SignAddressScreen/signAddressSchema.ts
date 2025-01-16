import { z } from 'zod';

export const signAddressSchema = z.object({
  address: z.string().min(8, 'Endereço incompleto'),
  neighbor: z.string().min(4, 'Bairro inválido'),
  uf: z.string().min(2, 'UF Inválido'),
  cep: z
    .string()
    .regex(/^\d{5}-\d{3}$/, 'CEP inválido')
    .transform(val => val.replace(/\D/g, '')),
});

export type SignAddressSchema = z.infer<typeof signAddressSchema>;
