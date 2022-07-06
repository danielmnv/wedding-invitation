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
     * Gets all images from the directory
     * @returns Promise
     */
    async getDirectory() {
        let items = [];

        const list = await listAll(this.ref);
        
        for (let i = 0; i < list.items.length; i++) {
            items = [ ...items, await getDownloadURL(list.items[i])]
        }

        return items;
    }

    /**
     * Gets the url of the image
     * @returns Promise
     */
    async get() {
        return await getDownloadURL(this.ref);
    }
}

export { Image };