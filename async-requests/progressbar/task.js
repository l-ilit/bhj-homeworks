const progress = document.getElementById('progress');
const form = document.getElementById('form');
form.addEventListener("submit", (event) => {
    event.preventDefault()

    const xhr = new XMLHttpRequest()
    const formData = new FormData(document.forms.form)

    xhr.upload.addEventListener("progress",(e) => {
        progress.value = e.loaded / e.total;
    })
        
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload")
    xhr.send(formData)
})