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
document.getElementById('downloadButton').addEventListener('click', function() {
    const externalUrl = document.querySelector("#preview").src;
    
    fetch(externalUrl)
      .then(response => response.text())
      .then(svgData => {
        const blob = new Blob([svgData], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);

        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = document.querySelector("#username").value+'.svg'; // Set the desired filename here
        anchor.click();

        URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Error fetching SVG data:', error);
      });
  });
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