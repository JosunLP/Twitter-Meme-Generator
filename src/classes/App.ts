import { Footer } from './Footer';
import { Menue } from './Menue';

/**
 * App
 */
export class App {

    private static instance: App

    private constructor() {
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
}