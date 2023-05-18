# Chewie :dog:
======

This project was developed for Software Engineering 101 (IF977) in CIn - UFPE

Professor: [Vinícius Garcia](https://viniciusgarcia.me)

Group: [André Filho](https://github.com/mrdedede); [Luís Barbosa](https://github.com/LuisBarbosa99)

## Introduction

* Simplifying Pet Services Scheduling

Pet owners often face difficulties in booking appointments at pet shops or veterinary clinics, having to resort to long queues or appointments made over the phone, sometimes without knowing the quality of the services provided by the establishments.

The idea behind this application is to facilitate the scheduling of pet services and veterinary consultations, by creating a platform where pet owners can book pet shop services in their cities.

By using this platform, pet owners can easily find and book appointments with trusted service providers, without the hassle of waiting in line or making phone calls. This creates a convenient and efficient solution for pet owners and service providers alike.

### Project Goals

* Create a platform where pet owners can buy products and schedule services from pet shops in their city;
* Facilitate the scheduling of pet shop services and consultations with veterinarians, and purchase of products for pets;

### Project Scope

* UI (Found in the /client path files)
    * Home/Introduction page;
    * Login/Signup page;
    * Client pages;
    * Pet Shop pages;
    * Search page;

* CRUD (Found in the /server path files):
    * Client;
    * Pet Shop;
    * Vet;
    * Booking;
    * Service;
    * Vet Appointment;

## App Usage

* Home Screen:
![home-1.png](https://github.com/mrdedede/chewie/blob/master/home-1.png)
![home-2.png](https://github.com/mrdedede/chewie/blob/master/home-2.png)

The Home Screen is an artifact for our newcoming users to check our services and proposals;

* User Profile:
![user.png](https://github.com/mrdedede/chewie/blob/master/user.png)

The User Profile page is related to the user information we may have stored, including:
1. The user name
2. The user bio
3. The user's profile image
4. The user's pets

* Search Page
![search.png](https://github.com/mrdedede/chewie/blob/master/search.png)

This page shows the results for queries related to registered institutions offering pet services

* Pet Shop Profile
![booking.png](https://github.com/mrdedede/chewie/blob/master/booking.png)

This page contains the pet shop profile information:
1. Pet shop's name
2. Pet shop's profile picture
3. Pet shop's rating
4. Pet shop's services and schedules

You can book your appointments in this page by using the calendar and time selector interface.

## Development Tools

The following tools were used for development:

- NodeJS (10.19.0), a JavaScript runtime.
- AdonisJS (4.0.12), a NodeJS web framework for the back end.
- SQLite (3.31.1), an SQL database library used in development.
- React.js (16.13.1), a JavaScript web framework for the front end.
- Insomnia, an application for RESTful API testing.
- Heroku for API hosting, with the JawsDB add-on used for MySQL in production.

## Authentication

The API uses native authorization with JSON Web Token (JWT) authentication. 

JWT is an open standard (RFC 7519) that defines a compact and independent way to securely transmit information between parties as a JSON object. 

## API resources

* Software Architecture
![chewie-sw-architecture.png](https://github.com/mrdedede/chewie/blob/master/Chewie-sw-architecture.png)

* Endpoints
![endpoints-schema.png](https://github.com/mrdedede/chewie/blob/master/endpoints-schema.png)

More details on each path and controllers at [Our PDF Document](https://github.com/mrdedede/chewie/blob/master/Chewie_-_Documentacao.pdf)

## Business Perspective

* Project Model Canvas
![project-model-canvas.png](https://github.com/mrdedede/chewie/blob/master/project-model-canvas.png)
Our Project Model Canvas was a tool that we used to guide us while developping the project in order to achieve our main goal.
It states our stakeholders, the justification for our work and defines costs, a schedule and a main goal for our future


* Value Proposition Canvas
![value-proposition-canvas.png](https://github.com/mrdedede/chewie/blob/master/value-proposition-canvas.png)
Our Value Proposition Canvas aims to identify our main partners during the development of our application and, given the context where they are inserted, how our product could make a difference for them.
