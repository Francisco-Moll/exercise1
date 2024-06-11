document.getElementById('postRequestBtn').addEventListener('click', makepostRequest);

function makepostRequest() {
    // GET request to retrieve ToDo item
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            // Copy and edit the data
            const newToDo = {
                userId: 1,
                title: 'finsih the exercise',
                completed: true
            };

            // POST request with the new data
            fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newToDo)
            })
                .then(response => response.json())
                .then(postResponse => {
                    // Display the response
                    document.getElementById('response').textContent = JSON.stringify(postResponse, null, 2);
                })
                .catch(error => console.error('Error:', error));
        })
        .catch(error => console.error('Error:', error));
}