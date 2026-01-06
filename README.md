# Full Stack Developer Capstone – Best Cars Dealership Reviews Website

## Overview

This Capstone project simulates a real-world scenario where you assume the role of **full stack developer** for **Best Cars Dealership**, a national car dealership with branches across the United States.  

The goal of the project is to develop a **dynamic, interactive website** that allows users to:  

- View information about the dealership and its branches  
- Read reviews for specific dealerships  
- Write reviews (for registered users)  
- Filter dealerships by state  
- Analyze sentiment of reviews  

This project integrates **full stack development**, microservices, and cloud deployment strategies.  

---

## Features

### End User Features

- **Homepage**: Navigate to About Us, Contact Us, View Dealerships, Login, and Register pages  
- **About Us**: Displays company details, mission, values, and leadership team  
- **Contact Us**: Displays contact information including email, phone, and website  
- **User Registration & Login**:  
  - Register as a new user and automatically log in  
  - Log in with existing credentials  
- **View Dealerships**: List all dealerships, filterable by state  
- **Reviews**:  
  - Read reviews for any dealership  
  - Logged-in users can write reviews including car make, model, purchase date, and year  
  - Sentiment analysis of reviews (positive, negative, neutral)  

---

## Architecture Overview

### Technologies Used

- **Frontend**: React, HTML, CSS, Bootstrap  
- **Backend**: Django (user management and proxy services), Flask (sentiment analysis), Node.js & Express (dealership and review service)  
- **Databases**: SQLite (Django data), MongoDB (dealerships and reviews)  
- **DevOps**: Git, GitHub Actions (CI/CD), Docker, Kubernetes, IBM Cloud Code Engine (serverless deployment)  

### Solution Architecture

1. **Dealerships Website (Django)**:  
   - Serves web pages to end users  
   - Provides microservices:  
     - `get_cars/` – Fetch cars  
     - `get_dealers/` – Fetch all dealers  
     - `get_dealers/:state` – Fetch dealers by state  
     - `dealer/:id` – Fetch dealer details  
     - `review/dealer/:id` – Fetch reviews for a dealer  
     - `add_review/` – Post a new review  

2. **Dealerships & Reviews Service (Node.js + Express + MongoDB)**:  
   - Dockerized microservice providing:  
     - `/fetchDealers` – All dealers  
     - `/fetchDealer/:id` – Dealer by ID  
     - `/fetchReviews` – All reviews  
     - `/fetchReview/dealer/:id` – Reviews by dealer  
     - `/insertReview` – Insert a review  

3. **Sentiment Analyzer Service (Flask + NLTK)**:  
   - Deployed on IBM Cloud Code Engine  
   - Provides `/analyze/:text` endpoint to determine review sentiment  

4. **Django Proxy Service**:  
   - Connects the front-end Django website to the Node.js review service and sentiment analyzer service  

---

## CI/CD & Deployment

- **CI/CD**: GitHub Actions used for linting, testing, and deployment  
- **Docker & Kubernetes**: Backend services and Node.js microservices containerized and deployed on Kubernetes  
- **Serverless**: Sentiment analysis microservice deployed on IBM Cloud Code Engine  

---

## Project Workflow

1. User visits website and can explore dealerships without logging in  
2. Registered users can log in and post reviews  
3. Reviews are stored in MongoDB, analyzed for sentiment, and displayed per dealer  
4. Django proxies connect all services seamlessly to provide a unified user experience  

---

## Credits

Developed as part of the **Full Stack Developer Capstone**. This project demonstrates **full stack development skills, microservice integration, cloud deployment, and CI/CD implementation**.

