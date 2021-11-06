export class Menue {

    private static instance: Menue

    private constructor() {
        
    }

    public static getInstance(): Menue {
        if (Menue.instance == null) {
            Menue.instance = new Menue()
        }
        return Menue.instance
    }

    public generate() {
        let menue = document.createElement("div")
        let profileForm = document.createElement("form")
        let profileNameInput = document.createElement("input")
        let profileTagInput = document.createElement("input")
        let profileSubmit = document.createElement("input")
        let postForm = document.createElement("form")
        let postUserInput = document.createElement("select")
        let postUserInputDefault = document.createElement("option")
        let postTextInput = document.createElement("input")
        let postSubmit = document.createElement("input")
        let userList = document.createElement("div")
        let postList = document.createElement("div")
        menue.id = "menue"
        menue.classList.add("menue")
        profileForm.classList.add("userForm")
        postForm.classList.add("postForm")
        userList.classList.add("userList")
        postList.classList.add("postList")

        postUserInput.name = "user"
        postUserInput.id = "postUser"
        postUserInputDefault.value = "Select User"
        postUserInputDefault.innerHTML = "Select User"
        postUserInputDefault.disabled = true
        postUserInputDefault.selected = true
        postUserInput.appendChild(postUserInputDefault)
        postUserInput.classList.add("form-select")
        postTextInput.type = "text"
        postTextInput.placeholder = "Text"
        postTextInput.classList.add("form-control")
        postTextInput.classList.add("postText")
        postSubmit.type = "submit"
        postSubmit.value = "Submit"
        postSubmit.classList.add("submit")
        postSubmit.classList.add("btn")
        postSubmit.classList.add("btn-primary")

        profileNameInput.type = "text"
        profileNameInput.placeholder = "Name"
        profileNameInput.classList.add("form-control")
        profileTagInput.type = "text"
        profileTagInput.placeholder = "Tag"
        profileTagInput.classList.add("form-control")
        profileSubmit.type = "submit"
        profileSubmit.value = "Submit"
        profileSubmit.classList.add("submit")
        profileSubmit.classList.add("btn")
        profileSubmit.classList.add("btn-primary")

        profileForm.appendChild(profileNameInput)
        profileForm.appendChild(profileTagInput)
        profileForm.appendChild(profileSubmit)

        postForm.appendChild(postUserInput)
        postForm.appendChild(postTextInput)
        postForm.appendChild(postSubmit)

        menue.appendChild(profileForm)
        menue.appendChild(postForm)
        menue.appendChild(userList)
        menue.appendChild(postList)
        
        return menue
    }
}