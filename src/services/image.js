// Storage instance
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

class Image {
    ref = ref(storage);

    /**
     * Set the path of storage
     * @param {string} path Path directory
     * @returns ImageService instance
     */
    setPath(path) {
        this.ref = ref(storage, path);

        return this;
    }

    /**
     * Gets all the images
     * @returns Promise
     */
    async get() {
        let items = [];

        const list = await listAll(this.ref);
        
        for (let i = 0; i < list.items.length; i++) {
            items = [ ...items, await getDownloadURL(list.items[i])]
        }

        return items;
    }
}

export { Image };