/**
 * Chat
 */
class Chat {

    /**
     * Get the chat's id
     * @returns {string}
     */
    
    public id: string;

    /**
     * Get the chat's name
     * @returns {string}
     */

    public name: string;

    /**
     * Get the chat's posts
     * @returns {Array<Post>}
     */

    public posts: Post[];

    constructor() {
        this.id = '';
        this.name = '';
        this.posts = [];
    }
}