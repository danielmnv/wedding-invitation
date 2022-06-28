import { store } from './firestore';

import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const weekday = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime =  `${hours}:${minutes} ${ampm}`;

    return strTime;
};

const key = Symbol();

const event = getDoc(doc(store, 'info', 'event')).then(doc => {
    const data = doc.data();
    const date = new Date(data.date.seconds * 1000);
    return {
        ...data,
        date: date,
        start: formatAMPM(date),
        month: month[date.getMonth()],
        weekday: weekday[date.getDay()]
    };
});

class GuestService {
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

export { key, event, GuestService };