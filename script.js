const messageBox = document.querySelector("#message");
const preview = document.querySelector("#preview");
const recipient = document.querySelector("#recipient");
const sendBtn = document.querySelector("#sendBtn");
const activityLog = document.querySelector("#activityLog");

// Update message preview
function updatePreview() {
    if (!preview || !messageBox) return;

    preview.textContent =
        messageBox.value.trim() ||
        "Your message preview will appear here.";
}

messageBox?.addEventListener("input", updatePreview);


// Ready-made message templates
document.querySelectorAll("[data-template]").forEach((button) => {
    button.addEventListener("click", () => {
        if (!messageBox) return;

        messageBox.value = button.dataset.template || "";
        updatePreview();
    });
});


// Demo queue button
sendBtn?.addEventListener("click", () => {
    const target = recipient?.value.trim() || "";
    const message = messageBox?.value.trim() || "";

    if (!target) {
        alert("Please enter a recipient.");
        return;
    }

    if (!message) {
        alert("Please enter a message.");
        return;
    }

    // Create activity item
    if (activityLog) {
        const item = document.createElement("div");

        item.className = "activity-item";

        item.textContent =
            `Demo queued for ${target}: ${message}`;

        activityLog.prepend(item);
    }

    alert(
        "Demo message queued successfully. " +
        "This website does not send real messages."
    );
});


// Initial preview
updatePreview();
