<a name="readme-top"></a>

<div align="center">
  <br/>

  <h3><b>To Do list
</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖TaskFlow <a name="about-project"></a>

**[TaskFlow]** iis a simple task management application built with a **Ruby on Rails API backend** and a **Vanilla JavaScript frontend**. Users can create and view task lists.

## 🔗 Live Demo

Frontend: [https://taskflow-frontend-3tp0.onrender.com/](https://taskflow-frontend-3tp0.onrender.com/)  
Backend: [https://taskflow-w3v6.onrender.com/api/lists](https://taskflow-w3v6.onrender.com/api/lists)

## ✨ Features

- Add and view task lists
- Fully decoupled frontend and backend
- RESTful API design

## ⚙️ Tech Stack

- **Backend**: Ruby on Rails (API-only)
- **Frontend**: HTML, CSS (Tailwind via CDN), JavaScript (Vanilla JS)
- **Database**: PostgreSQL
- **Deployment**: Render

## 🛠️ Getting Started

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Bellagirl-maker/taskflow.git
   cd taskflow/taskflow_backend


### Install

Install dependencies:
bundle install
Set up the database:
rails db:create
rails db:migrate
rails db:seed
Run the server:
rails s

### Frontend Setup
Open a new terminal and navigate to the frontend directory:
cd ../taskflow_frontend
Open index.html in the browser (or serve it using any static server).

### API Endpoints
GET /api/lists – Get all task lists

POST /api/lists – Create a new task list

POST /api/lists/:list_id/tasks – Add a task to a list

### Deployment Notes
This project uses Tailwind CSS via CDN for simplicity. In a production-grade setup, Tailwind should be installed via npm and built using PostCSS or Tailwind CLI for performance optimization.

Environment variables (like DB credentials) are stored securely using Render's environment configuration.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Deployment

You can deploy this project on Render

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Isabella Otoo**

- GitHub: [@githubhandle](https://github.com/Bellagirl-maker)
- Twitter: [@twitterhandle](https://twitter.com/isabella_otoo)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/isabella-otoo/)

👤 **Youssef Oubari**

- GitHub: [@yusufobr](https://github.com/yusufobr)
- Twitter: [@OubariY](https://twitter.com/OubariY)
- LinkedIn: [Youssef OUBARI](https://www.linkedin.com/in/youssef-oubari-370451147)

👤 **Massa Zoum**

- GitHub: [@massazoum](https://github.com/massazoum)
- Twitter: [@zoumaniguimass1](https://twitter.com/zoumaniguimass1)
- LinkedIn: [LinkedIn](www.linkedin.com/in/massa-zoumanigui-1aba4525a)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Animations**
- [ ] **Interactivity**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Do not hesitate to notify me of any issue with this project through the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project give me 5 stars ⭐️⭐️⭐️⭐️

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to acknowledge and thank minimalist as I used their to do list is a reference for this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
