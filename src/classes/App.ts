import { Footer } from './Footer';
import { Menue } from './Menue';
import { Profile } from '../models/profile';
import { Chat } from '../models/chat';
import { Post } from '../models/post';

/**
 * App
 */
export class App {

    private static instance: App
    private profiles: Array<Profile>
    private mainChat: Chat
    private posts: Array<Post>

    private constructor() {
        this.profiles = new Array<Profile>()
        this.mainChat = new Chat("main")
        this.posts = new Array<Post>()
        const app = <HTMLDivElement>document.getElementById('app')
        const menue = Menue.getInstance().generate()

        app.appendChild(menue)
        Footer.renderContent()
        console.log('App loadet!')
    }

    public static getInstance(): App {
        if (!App.instance) {
            App.instance = new App()
        }

        return App.instance
    }

    public run(): void {
        console.log('App run!')
    }

    public setProfileService(): void {
        const form = <HTMLButtonElement>document.getElementById('submitProfile')

        form.addEventListener('submit', (event) => {
            event.preventDefault()
            const name = (<HTMLInputElement>document.getElementById('profileName')).value
            const tag = (<HTMLInputElement>document.getElementById('profileTag')).value
            const profile = new Profile(name, tag)
            this.profiles.push(profile)
        })
    }
}