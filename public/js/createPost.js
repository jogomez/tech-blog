// Form that makes the POST request to the Controller to create a Post
const newFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    
    if (title && content) {
        const response = await fetch(`/api/post`, {
            method: 'POST',
            body: JSON.stringify({ title, content}),
            headers: {
            'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            window.location.reload();
        } else {
            alert('Failed to create a post');
        }
    }
};

document.querySelector(".form").addEventListener("submit",newFormHandler);
