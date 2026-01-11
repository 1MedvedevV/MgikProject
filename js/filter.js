const directionFilter = document.getElementById('directionFilter');
const skillFilter = document.getElementById('skillFilter');
const cards = document.querySelectorAll('.card');

function filterProjects() {
    const direction = directionFilter.value;
    const skill = skillFilter.value;

    cards.forEach(card => {
        const cardDirection = card.dataset.direction;
        const cardSkills = card.dataset.skills;

        let show = true;

        if (direction !== 'all' && cardDirection !== direction) {
            show = false;
        }

        if (skill !== 'all' && !cardSkills.includes(skill)) {
            show = false;
        }

        card.style.display = show ? "block" : "none";
    });
}

directionFilter.addEventListener('change', filterProjects);
skillFilter.addEventListener('change', filterProjects);
