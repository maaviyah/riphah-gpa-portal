document.addEventListener('DOMContentLoaded', () => {
    const courseList = document.getElementById('course-list');
    const addBtn = document.getElementById('add-course');
    const gpaForm = document.getElementById('gpa-form');
    const modal = document.getElementById('result-modal');
    const cgpaToggle = document.getElementById('include-cgpa');
    const cgpaInputsDiv = document.getElementById('cgpa-inputs');
    const displayCgpaContainer = document.getElementById('display-cgpa-container');

    function getLetterGrade(marks) {
        if (isNaN(marks) || marks === null || marks === "") return "-";
        if (marks >= 90) return "A+";
        if (marks >= 80) return "A";
        if (marks >= 78) return "A-";
        if (marks >= 74) return "B+";
        if (marks >= 70) return "B";
        if (marks >= 68) return "B-";
        if (marks >= 64) return "C+";
        if (marks >= 60) return "C";
        if (marks >= 58) return "C-";
        if (marks >= 54) return "D+";
        if (marks >= 50) return "D";
        return "F";
    }

    function calculateGP(marks) {
        if (marks >= 80) return 4.0;
        if (marks >= 78) return (3.8 + (marks - 78) * 0.1);
        if (marks >= 74) return (3.4 + (marks - 74) * 0.1);
        if (marks >= 70) return (3.0 + (marks - 70) * 0.1);
        if (marks >= 68) return (2.8 + (marks - 68) * 0.1);
        if (marks >= 64) return (2.4 + (marks - 64) * 0.1);
        if (marks >= 60) return (2.0 + (marks - 60) * 0.1);
        if (marks >= 58) return (1.8 + (marks - 58) * 0.1);
        if (marks >= 54) return (1.4 + (marks - 54) * 0.1);
        if (marks >= 50) return (1.0 + (marks - 50) * 0.1);
        return 0.0;
    }

    // Live Grade Update
    courseList.addEventListener('input', (e) => {
        if (e.target.classList.contains('input-marks')) {
            const val = parseFloat(e.target.value);
            const badge = e.target.parentElement.querySelector('.live-grade');
            badge.innerText = getLetterGrade(val);
            badge.style.background = (val < 50 && e.target.value !== "") ? "#c53030" : "#1a365d";
        }
    });

    addBtn.addEventListener('click', () => {
        const row = document.createElement('div');
        row.className = 'course-row';
        row.innerHTML = `
            <input type="text" placeholder="Course Name" class="input-name">
            <div class="input-wrapper">
                <input type="number" placeholder="Marks" class="input-marks" min="0" max="100" required>
                <span class="live-grade">-</span>
            </div>
            <input type="number" placeholder="Credits" class="input-credits" min="1" max="6" required>
            <button type="button" class="remove-btn">&times;</button>`;
        courseList.appendChild(row);
    });

    courseList.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
            if (document.querySelectorAll('.course-row').length > 1) e.target.parentElement.remove();
        }
    });

    // FIX: Sync result container visibility with checkbox
    cgpaToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            cgpaInputsDiv.classList.remove('hidden');
        } else {
            cgpaInputsDiv.classList.add('hidden');
            displayCgpaContainer.classList.add('hidden'); // Immediately hide result if unchecked
        }
    });

    gpaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let totalWeighted = 0, totalCredits = 0;

        document.querySelectorAll('.course-row').forEach(row => {
            const m = parseFloat(row.querySelector('.input-marks').value);
            const c = parseFloat(row.querySelector('.input-credits').value);
            totalWeighted += (calculateGP(m) * c);
            totalCredits += c;
        });

        document.getElementById('display-gpa').innerText = (totalWeighted / totalCredits).toFixed(2);

        // Final Calculation Logic Check
        if (cgpaToggle.checked) {
            const pCgpa = parseFloat(document.getElementById('prev-cgpa').value) || 0;
            const pCred = parseFloat(document.getElementById('total-credits').value) || 0;
            const finalCgpa = ((pCgpa * pCred) + totalWeighted) / (pCred + totalCredits);
            
            displayCgpaContainer.classList.remove('hidden');
            document.getElementById('display-cgpa').innerText = finalCgpa.toFixed(2);
        } else {
            displayCgpaContainer.classList.add('hidden');
        }

        modal.style.display = 'flex';
    });

    document.getElementById('close-modal').onclick = () => modal.style.display = 'none';
    window.onclick = (e) => { if (e.target == modal) modal.style.display = 'none'; }
});