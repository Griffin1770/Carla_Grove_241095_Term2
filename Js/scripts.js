let form = document.forms["contactForm"];
form.addEventListener("submit", getValues);

function getValues(event){  //Form event//
    event.preventDefault();

    let formData = {  //Form inputs//
        "field1" : this.field1.value,
        "field2" : this.field2.value,
        "field3" : this.field3.value,
        "field4" : this.field4.value,
    
    }
}