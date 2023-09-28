function showMDAStudy() {
    fetch('studies/mda.html') // Fetch content from the mda.html file
    .then(response => response.text())
    .then(data => {
        document.getElementById('resumeContent').style.display = 'none';
        document.getElementById('mda-content').style.display = 'block';
        document.getElementById('mda-content').innerHTML = data; // Set the content of the mda-content div
    });
}

function showResume() {
    document.getElementById('resumeContent').style.display = 'block';
    document.getElementById('mda-content').style.display = 'none';
}

// Event Listener for MDA Study Link
document.getElementById('mdaStudyLink').addEventListener('click', function(e) {
    e.preventDefault();
    showMDAStudy();
});

document.getElementById('resumeLink').addEventListener('click', function(e) {
    e.preventDefault();
    showResume();
});
