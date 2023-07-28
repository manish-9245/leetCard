preview();
function url() {
    if (!value("username")) document.querySelector("#username").value = "coderbabuaa";
    return (
        location.origin +
        "/" +
        encodeURIComponent(value("username")) +
        "?theme=" +
        encodeURIComponent(value("theme")) +
        "&font=" +
        encodeURIComponent(value("font")) +
        (value("extension") ? "&ext=" + encodeURIComponent(value("extension")) : "") +
        (value("site") === "cn" ? "&site=cn" : "")
    );
}
function preview() {
    document.querySelector("#preview").src = "https://leetcard.jacoblin.cool/"+url().split("/")[3];
}
function go() {
    let win = window.open();
    win.location = "https://leetcard.jacoblin.cool/"+url().split("/")[3];
}
function md() {
    let code = "![LeetCode Stats](" + "https://leetcard.jacoblin.cool/" +url().split("/")[3]+ ")";
    prompt("Markdown Code: ", code);
}
function value(id) {
    return document.querySelector("#" + id).value.trim() || "";
}
async function saveImage() {
const imgElement = document.getElementById("preview");
const imageSrc = imgElement.src+".png";

try {
    const response = await fetch(imageSrc);
    const blob = await response.blob();

    // Create a temporary anchor element to initiate the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "username_lc.png";
    link.click();
} catch (error) {
    console.error("Error fetching image data:", error);
}
}