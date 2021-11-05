/**
 * App
 */
export class App {

    private static instance: App

    constructor() {
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