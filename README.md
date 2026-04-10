# Riphahians GPA Portal
### *Riphahians Project. Built by Students for Students.*

---

## Overview
The **Riphahians GPA Portal** is a high-performance web utility designed to solve the complexity of grade tracking at **Riphah International University**. Moving beyond static tables, this portal uses a dynamic **Smart Engine** to provide instant, accurate SGPA and CGPA results.

### The Mission
This project was born out of a necessity for **transparency**. Standard calculators often overlook the nuances of university grading. This portal ensures that every mark a student earns is accounted for through a custom-coded sliding scale, empowering students to plan their academic future with confidence.

---

## Key Features

### 1. The "Smart" Calculation Engine
Unlike basic tools that only accept letter grades, our JavaScript engine uses a **Sliding Scale Logic**:
* **Granular Precision:** Grade points increment by $0.1$ for every $1$ mark earned above a grade band's minimum.
* **Weighted Averages:** Automatically calculates the impact of different credit hours ($1, 2, 3,$ or $4$ CH) on the final GPA.

### 3. User Experience (UX)
* **Dynamic Row Injection:** Add as many courses as needed for your specific semester.
* **Instant Validation:** Prevents calculation errors from empty fields or invalid credit hour entries.

---

## Technical Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | HTML5 | Semantic Structure & Accessibility |
| **Styling** | CSS3 | Custom properties, Flexbox/Grid, Dark Mode |
| **Logic** | Vanilla JS (ES6+) | DOM manipulation & Math Engine |
| **Assets** | SVG & HD Imagery | Optimized icons and branding assets |

---

## Project Architecture

```text
/riphah-gpa-portal
│
├── index.html              # Main calculation dashboard
├── criteria.html           # Understanding the calculation
├── about.html              # Developer profile & project details
├── /css
│   └── global.css          # Global styles and theme
│   └── style.css           # index styles and theme
│   └── criteria.css        # criteria styles and theme
│   └── about.css           # about styles and theme
├── /js
│   └── script.js           # Smart Engine logic
└── /assets
    └── /img             # Asset management
        ├── /logo
        ├── /profile
        ├── /social-btn
```

---

## License & Open Source
This project is open for community contributions.

* **License:** MIT
* **Contribution:** Feel free to fork this repo to add features.

> *“Empowering Riphahians through code.”*
