// Store instance
import { store } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

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

const Event = getDoc(doc(store, 'info', 'event')).then(doc => {
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

export { Event };