import { Guid } from "../classes/Guid";
import { Chat } from "./chat";

/**
 * Post
 */
export class Post {
    
    /**
     * Get the posts's id
     * @returns {string}
     */

    public id: string;

    /**
     * Get the posts's userId
     * @returns {string}
     */

    public userId: string;

    /**
     * Get the posts's type
     * @returns {string}
     */

    public type: string;

    /**
     * Get the posts's time
     * @returns {string}
     */

    public time: string;

    /**
     * Set the posts's chat
     * @param {Chat} chat
     */
    
    public chat: Chat;

    constructor(userId: string, type: string, time: string) {
        this.id = Guid.newGuid();
        this.userId = userId;
        this.type = type;
        this.time = time;
        this.chat = new Chat(this.id);
    }
}