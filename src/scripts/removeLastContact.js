import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, { encoding: 'utf8' });
        let contacts = JSON.parse(data);
        if (contacts.length > 0) {
            contacts.pop();
            await fs.writeFile(PATH_DB, JSON.stringify(contacts), { encoding: 'utf8' });
            console.log('Last contact has been removed successfully.');
        } else {
            console.log('No contacts to remove.');
        }
    } catch (error) {
        console.error('Error removing last contact:', error);
    }
};

removeLastContact();

