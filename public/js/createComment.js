// Form that makes the POST request to the Controller to create a Comment
const newFormHandler = async (event) => {
    event.preventDefault();
    const comment = document.querySelector('.comment-input').value.trim();
    const post_id = event.target.getAttribute("data-id");
    alert(post_id+comment);

    if (comment) {
        const response = await fetch(`/api/comment`, {
            method: 'POST',
            body: JSON.stringify({post_id, comment}),
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

document.querySelector(".button").addEventListener("click",newFormHandler);
