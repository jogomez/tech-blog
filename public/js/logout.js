//logout user
const logout = async () => {
    const response = await fetch("/api/user/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) { //it did logout 
        location.href= "/login";
    }
};

document.getElementById("logout").addEventListener("click",logout);