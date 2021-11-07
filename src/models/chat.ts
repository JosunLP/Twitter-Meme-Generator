import { Guid } from "../classes/Guid";
import { Post } from "./post";

/**
 * Chat
 */
export class Chat {

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

    constructor(name: string) {
        this.id = Guid.newGuid();
        this.name = name;
        this.posts = new Array<Post>();
    }
}