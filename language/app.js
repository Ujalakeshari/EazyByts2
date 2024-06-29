// Enrollment function
function enroll(courseId) {
    fetch(`http://localhost:8080/api/enroll/${courseId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: 1 })
    })
    .then(response => response.json())
    .then(data => {
        alert('Enrolled successfully!');
        loadProfileCourses();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Start exercise function
function startExercise(type) {
    switch (type) {
        case 'vocabulary':
            alert('Starting vocabulary quiz...');
            // Logic to load vocabulary quizzes
            break;
        case 'grammar':
            alert('Starting grammar practice...');
            // Logic to load grammar exercises
            break;
        case 'pronunciation':
            alert('Starting pronunciation practice...');
            // Logic to load pronunciation exercises
            break;
    }
}

// Forum functions
function openForum() {
    window.location.href = 'forum.html';
}

function viewTopic(topicId) {
    alert(`Loading topic ${topicId}...`);
    // Logic to load the topic details
}

function createTopic(event) {
    event.preventDefault();
    const title = document.getElementById('topicTitle').value;
    const content = document.getElementById('topicContent').value;

    // Logic to post a new forum topic
    alert(`Topic titled "${title}" created!`);
}

// Profile functions
function viewProfile() {
    window.location.href = 'profile.html';
}

function loadProfileCourses() {
    fetch('http://localhost:8080/api/profile/1/courses')
        .then(response => response.json())
        .then(data => {
            const coursesContainer = document.querySelector('.enrolled-courses');
            coursesContainer.innerHTML = '';
            data.forEach(course => {
                const courseDiv = document.createElement('div');
                courseDiv.classList.add('course');
                courseDiv.innerHTML = `<h3>${course.name}</h3><p>${course.description}</p>`;
                coursesContainer.appendChild(courseDiv);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Leaderboard functions
function viewLeaderboard() {
    window.location.href = 'leaderboard.html';
}

function loadLeaderboard() {
    fetch('http://localhost:8080/api/leaderboard')
        .then(response => response.json())
        .then(data => {
            const leaderboardContainer = document.querySelector('.leaderboard-list');
            leaderboardContainer.innerHTML = '';
            data.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('user');
                userDiv.innerHTML = `<strong>${user.username}</strong>: ${user.points} points`;
                leaderboardContainer.appendChild(userDiv);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Load initial data when profile and leaderboard pages are accessed
if (window.location.pathname.includes('profile.html')) {
    loadProfileCourses();
}

if (window.location.pathname.includes('leaderboard.html')) {
    loadLeaderboard();
}
