// Store instance
import { store } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const weekday = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

function formatHours(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();

    minutes = minutes < 10 ? '0'+minutes : minutes;
    return `${hours}:${minutes} hrs`;
};

const Event = getDoc(doc(store, 'info', 'event')).then(doc => {
    const data = doc.data();
    const date = new Date(data.date.seconds * 1000);
    return {
        ...data,
        date: date,
        start: formatHours(date),
        month: month[date.getMonth()],
        weekday: weekday[date.getDay()]
    };
});

export { Event };