// Form that makes the POST request to the Controller to create a Post
const newFormHandler = async (event) => {
    event.preventDefault();
    const comment = document.querySelector('#comment').value.trim();
    
    if (comment) {
        const response = await fetch(`/api/post`, {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: {
            'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            window.location.reload();
        } else {
            alert('Failed to create a comment');
        }
    }
};

document.querySelector(".form").addEventListener("submit",newFormHandler);
