function copyCode() {
    const inviteCode = document.getElementById("inviteCode").innerText;
    navigator.clipboard.writeText(inviteCode)
        .then(() => {
            alert("Invite code copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}

function copyLink() {
    const inviteLink = document.getElementById("inviteLink").innerText;
    navigator.clipboard.writeText(inviteLink)
        .then(() => {
            alert("Invite link copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}