function handleSubmit(event) {
    event.preventDefault();

    // get the input text from the form
    let formText = document.querySelector('#name').value;
    const data = {formText};

    const responseOptions = {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    // call the checkForName function when any test entered
    if (Client.URLChecker(formText)) {
        console.log("::: Form Submitted :::");
        fetch('http://localhost:8081/userText', responseOptions)
        .then(res => res.json())
        .then(function(res) {
            document.querySelector('#model').innerHTML = 'Model: ' + res.model;
            document.querySelector('#score_tag').innerHTML = 'Score: ' + res.score_tag;
            document.querySelector('#agreement').innerHTML = 'Agreement: ' + res.agreement;
            document.querySelector('#subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
            document.querySelector('#confidence').innerHTML = 'Confidence: ' + res.confidence;
            document.querySelector('#irony').innerHTML = 'Irony: ' + res.irony;
        })
        // .catch(error => console.log('error', error));
    } else {
        alert ('Please enter any text')
    };
}

export { handleSubmit }
