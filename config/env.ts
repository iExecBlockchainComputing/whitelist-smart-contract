import 'dotenv/config';
import { z } from 'zod';

const addressRegex = /(^|\b)(0x)?[0-9a-fA-F]{40}(\b|$)/;
const privateKeyRegex = /(^|\b)(0x)?[0-9a-fA-F]{64}(\b|$)/;

const envSchema = z.object({
  // Private key of the wallet used for transactions
  PRIVATE_KEY: z
    .string()
    .regex(privateKeyRegex, 'Invalid private key format')
    .optional()
    .or(z.literal('')),

  // Contract address (override)
  WHITELIST_OWNER: z
    .string()
    .regex(addressRegex, 'Invalid Ethereum address format')
    .optional()
    .or(z.literal('')),

  // Contract address (override)
  CONTRACT_ADDRESS: z
    .string()
    .regex(addressRegex, 'Invalid Ethereum address format')
    .optional()
    .or(z.literal('')),

  // Contract address (override)
  NEW_OWNER_ADDRESS: z
    .string()
    .regex(addressRegex, 'Invalid Ethereum address format')
    .optional()
    .or(z.literal('')),

  // Contract address (override)
  ADDRESS_TO_ADD: z
    .string()
    .regex(addressRegex, 'Invalid Ethereum address format')
    .optional()
    .or(z.literal('')),

  // Contract address (override)
  ADDRESS_TO_REMOVE: z
    .string()
    .regex(addressRegex, 'Invalid Ethereum address format')
    .optional()
    .or(z.literal('')),

  // RPC URL used for network connection
  RPC_URL: z
    .string()
    .url('RPC_URL must be a valid URL')
    .optional()
    .or(z.literal('')),

  // API key
  API_KEY: z.string().optional().or(z.literal('')),

  // Whether to use API V2 verification format
  VERIFICATION_API_V2: z
    .string()
    .optional()
    .default('true')
    .refine((val) => val === 'true' || val === 'false', {
      message: 'VERIFICATION_API_V2 must be "true" or "false"',
    })
    .transform((val) => val === 'true'),
});

export const env = envSchema.parse(process.env);
