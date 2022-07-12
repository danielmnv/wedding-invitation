// Storage instance
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL, getMetadata } from 'firebase/storage';

class Image {
    path = ref(storage);

    /**
     * Set the path of storage
     * @param {string} path Path directory
     * @returns ImageService instance
     */
    setPath(path) {
        this.path = ref(storage, path);

        return this;
    }

    /**
     * Gets all images from the directory
     * @returns Promise
     */
    async getDirectory() {
        let items = [];

        const list = await listAll(this.path);
        
        for (let i = 0; i < list.items.length; i++) {
            items = [ 
                ...items,
                {
                    index: items,
                    url: await this.get(list.items[i]),
                    ... await this.getMeta(list.items[i])
                }
            ]
        }
        items.sort((a, b) => a.order - b.order);

        return items;
    }

    /**
     * Gets the url of the image
     * @param {string|StorageReference} path
     * @returns Promise<string>
     */
    async get(path) {
        if (typeof path == 'string') {
            path = ref(storage, path)
        }

        return await getDownloadURL(path);
    }

    /**
     * Gets the meta data fo the image
     * @param {string|StorageReference} path
     * @returns Promise<{}>
     */
    async getMeta(path) {
        if (typeof path == 'string') {
            path = ref(storage, path)
        }

        let max = 40, min = 10;

        return await getMetadata(path).then((meta) => ({
            order: meta.order ?? 0,
            height: meta.height ?? Math.floor(Math.random() * (max - min + 1) + min)
        }))
    }
}

export { Image };