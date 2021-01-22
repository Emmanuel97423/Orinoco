function productDetails() {
    const request = new XMLHttpRequest();
    request.open('GET','http://localhost:3000/api/cameras')
    request.send();

    request.onreadystatechange = function() {
        if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText);
            console.log(response[0]);
        }
    }
}

productDetails();