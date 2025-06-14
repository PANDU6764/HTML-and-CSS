function showDetails(stream) {
    const careerTitle = document.getElementById('career-title');
    const careerDescription = document.getElementById('career-description');
    const detailsSection = document.getElementById('career-details');
    const optionsSection = document.getElementById('career-options');

    if (stream === 'science') {
        careerTitle.innerText = 'Science Stream';
        careerDescription.innerText = 'Career options include Engineering, Medical, Research, IT, and more.';
    } else if (stream === 'commerce') {
        careerTitle.innerText = 'Commerce Stream';
        careerDescription.innerText = 'Career options include Accounting, Business Management, Finance, and Economics.';
    } else if (stream === 'arts') {
        careerTitle.innerText = 'Arts/Humanities Stream';
        careerDescription.innerText = 'Career options include History, Psychology, Sociology, Journalism, and Fine Arts.';
    }

    detailsSection.classList.remove('hidden');
    optionsSection.classList.add('hidden');
}

function goBack() {
    document.getElementById('career-options').classList.remove('hidden');
    document.getElementById('career-details').classList.add('hidden');
}
