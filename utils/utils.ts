import fs from 'fs/promises';
import { SMART_CONTRACT_ADDRESS_FILE } from '../config/config';
/**
 * save the app address in `.smart-contract-address` file for next usages
 */
export const saveSmartContractAddress = (address: string) =>
  fs.writeFile(SMART_CONTRACT_ADDRESS_FILE, address);
