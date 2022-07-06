// Store instance
import { store } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

class Guest {
    table = collection(store, 'guests');

    /**
     * Gets the guest's doc
     * @param {string} name Guest's name
     * @returns Guest object if success, otherwise false
     */
    async get(name) {
        const querySnapshot = await getDocs(query(this.table, where('name', '==', name)));

        if (querySnapshot.empty) {
            return false;
        }

        const doc = querySnapshot.docs[0];

        return {
            id: doc.id,
            ...doc.data()
        }
    }

    /**
     * Gets the full list of guests
     * @returns Array
     */
    async getAll() {
        const querySnapshot = await getDocs(this.table);

        return querySnapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            };
        })
    }
}

export { Guest };