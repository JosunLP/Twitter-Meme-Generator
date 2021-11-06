/**
 * Post
 */
class Post {
    
    /**
     * Get the posts's id
     * @returns {string}
     */

    public id: string;

    /**
     * Get the posts's name
     * @returns {string}
     */

    public name: string;

    /**
     * Get the posts's type
     * @returns {string}
     */

    public type: string;

    constructor() {
        this.id = "";
        this.name = "";
        this.type = "";
    }
}