const submitPostHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector(".subject-input").value.trim();
    const content = document.querySelector(".content-input").value.trim();
    const creator_id = document.querySelector(".logged-in-user-id").innerHTML; //need id of logged in user
    if (!creator_id) {
        alert("Your session expired. Please logout, login and try again.");
    } else {
        if (title && content) {
            const response = await fetch("/api/post/", {
                method: "POST",
                body: JSON.stringify({ title, content, author_id }),
                headers: { "Content-Type": "application/json" },
            });
            if (response.ok) {
                document.location.replace("/");
                document.location.replace("/dashboard");
            } else {
                alert(
                    "Submit post failed " +
                        response.status +
                        ": " +
                        response.statusText
                );
            }
        } else {
            alert("Error: some fields are missing.");
        }
    }
};
document
    .querySelector(".submit-post")
    .addEventListener("click", submitPostHandler);