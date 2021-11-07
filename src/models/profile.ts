import { Guid } from '../classes/Guid'

/**
 * Profile
 */
export class Profile {

    /**
     * Get the profiles's id
     * @returns {string}
     */

    public id: string

    /**
     * Get the profiles's name
     * @returns {string}
     */

    public name: string

    /**
     * Get the profiles's tag
     * @returns {string}
     */

    public tag: string

    constructor(name: string, tag: string) {
        this.id = Guid.newGuid();
        this.name = name
        this.tag = tag
    }
}