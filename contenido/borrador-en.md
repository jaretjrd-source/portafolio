# Content draft — Portfolio (EN)

> Working document. Spanish version in `borrador-es.md`.
> The language switch button is implemented in Phase 4.

---

## Hero

**Name:** Jaret Rubio Delgado

**Headline:**
Mechatronics Engineering student focused on industrial automation, communication
networks, and systems simulation — now expanding into full-stack web development.

**Primary button:** View projects

---

## About me

I'm Jaret Rubio Delgado, a Mechatronics Engineering student at Tecnológico de
Monterrey (Monterrey campus). During the 2026–2027 cycle I'm taking part in the
DHIK program in Germany: one semester of study at Hochschule Zittau/Görlitz
followed by one semester of a professional internship in German industry.

I'm drawn to the place where hardware meets software: industrial automation,
robotics, process simulation (digital twins), and industrial communication
networks. Recently I also started building web applications, with the goal of
developing my own tools and platforms end to end (frontend and backend).

I'm looking for an internship where I can combine systems engineering with
software development.

---

## Skills

**Programming:** Python, C/C++, MATLAB, JavaScript (learning), HTML/CSS

**Industrial / Automation:** PLC (Schneider Electric, SIEMENS), Ladder Logic,
Universal Robots (UR)

**Simulation & CAD:** SolidWorks, MATLAB/Simulink, RobotStudio (ABB),
Tecnomatix Plant Simulation, Process Simulate (Siemens)

**Microcontrollers:** basic experience with STM32 (data acquisition and signal
conditioning) in academic projects

**Areas of interest:** industrial communication networks, full-stack web development

**Languages:** Spanish (native), English (B2 — TOEFL ITP), German (A2 — Goethe A2)

---

## Projects

### 1. PID control playground — interactive web app
A web app for learning PID control by playing with it. A simulated plant (like a
motor's speed) is controlled by a PID you tune in real time: sliders for Kp, Ki
and Kd, presets, and a live chart with performance metrics. It is my second
programming project, built to learn modern JavaScript.

- **Built with:** JavaScript (ES modules) and Vite, no frameworks
- **Includes:** a first-order plant simulation integrated with Euler, a PID
  controller with anti-windup, a crisp `<canvas>` chart with HiDPI support and
  dark mode, metrics computed on the fly (overshoot, rise time, ±2 % settling
  time, steady-state error), tuning presets, step response, and
  `prefers-reduced-motion` support.
- **What I learned:** modern JavaScript with ES modules, the animation loop with
  `requestAnimationFrame` and a fixed time step, drawing on `<canvas>`, and
  splitting simulation, control, and presentation into modules with pure
  functions.
- **Code:** https://github.com/jaretjrd-source/playground-pid
- **Demo:** https://jaretjrd-source.github.io/playground-pid/

### 2. Breakout — arcade game in Python
A clone of the classic brick-breaker, built from scratch iteratively. It was my
first complete programming project: I started with a window and a bouncing ball
and grew it into a game with levels, power-ups, and scoring.

- **Built with:** Python 3.11 and Pygame
- **Includes:** object-oriented design (paddle, ball, bricks, and power-ups as
  classes), collision detection, a state machine (menu / play / pause / game over),
  multiple levels loaded from text files, particle and sound effects, power-ups
  (wide paddle, multi-ball, slow ball, extra life), a lives system, progressive
  difficulty, and high-score persistence in JSON.
- **What I learned:** how a game loop is structured, applied OOP, handling states
  and assets, and designing levels as external data instead of code.
- **Code:** _(pending — push to GitHub)_
- **Demo:** _(pending — short GIF or video)_

### 3. Robotic cell — proposal and simulation (university course project)
A course project at Tecnológico de Monterrey, with ABB as the industry partner.
As a team we developed the **proposal** for an industrial robotic cell and
validated it through **simulation** in RobotStudio: layout definition, robot
reach, and operation sequence.

- **Built with:** RobotStudio (ABB)
- **Context:** academic team project, Tecnológico de Monterrey · industry partner: ABB
- **My role:** proposal development and simulation
- *(Proposal and simulation only; no implementation or partner-internal data.)*

### 4. Digital twin of a production line (university course project)
A course project at Tecnológico de Monterrey, with Carrier as the industry
partner. We built the **digital twin** of a production line to model the current
state and compare improvement proposals on the process flow.

- **Built with:** Tecnomatix Plant Simulation and Process Simulate (Siemens)
- **Context:** academic team project, Tecnológico de Monterrey · industry partner: Carrier
- **My role:** digital twin modeling and scenario analysis
- *(Proposal and simulation only; no partner production data.)*

---

## Experience

### Industrial Networks Research Intern
**Neoterra Lumina** · Hermosillo, Sonora, Mexico · May 2026 – September 2026

- Collected and organized data on the existing network infrastructure to support
  engineering decisions.
- Developed proposals to improve the communication network infrastructure.
- Produced technical documentation and presented findings to the team.

---

## Education

**Tecnológico de Monterrey** — Monterrey, Mexico
B.S. in Mechatronics Engineering · Aug 2023 – Jun 2027 (expected)
GPA: 93.9 / 100 · Academic Merit Scholarship (40%)

**DHIK program — Germany** · 2026–2027 cycle
A one-year program: one semester of study at **Hochschule Zittau/Görlitz**
(winter semester 2026/2027, classes starting 5 October 2026) followed by one
semester of a professional internship in German industry.

---

## Certifications

- PLC Fundamentals — Udemy (2026)
- e-Series Core Track — Universal Robots (2026)
- Cobot Material Handling for the GoFa with OmniCore — ABB (2026)
- Basic Electronics and Linear Integrated Circuits — ITESM (2025)
- Goethe-Zertifikat A2 (2026)
- TOEFL ITP

---

## Contact

- Email: jaret.jrd@gmail.com
- LinkedIn: linkedin.com/in/jaretrubiodelgado
- GitHub: github.com/jaretjrd-source
