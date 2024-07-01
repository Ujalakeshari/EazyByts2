# Language Learning Platform

## Description

The Language Learning Platform is an interactive web application where instructors can create and manage language courses. Students can enroll, access multimedia materials, participate in exercises, and track their progress. The platform features a responsive design, real-time communication, and gamification elements to enhance the learning experience.

## Features

- **Instructor Features:**
  - Create and manage language courses
  - Upload learning materials
  - Track student progress

- **Student Features:**
  - Enroll in courses
  - Access multimedia materials (videos, audios, texts)
  - Participate in interactive exercises (quizzes, flashcards, pronunciation practices)
  - Monitor learning journey and receive real-time feedback

- **General Features:**
  - User authentication and authorization
  - Responsive and accessible design
  - Real-time communication (chat and forums)
  - Gamification elements (badges, leaderboards, rewards)

## Technologies Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Java
- Spring Boot
- Spring Security
- JPA (Java Persistence API)
- Hibernate

### Database
- MySQL

## Project Structure

```plaintext
LanguageLearningPlatform/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── example/
│   │   │           └── languagelearningplatform/
│   │   │               ├── config/
│   │   │               │   ├── SecurityConfig.java
│   │   │               │   └── WebConfig.java
│   │   │               ├── controller/
│   │   │               │   ├── CourseController.java
│   │   │               │   ├── UserController.java
│   │   │               │   └── AuthController.java
│   │   │               ├── model/
│   │   │               │   ├── Course.java
│   │   │               │   └── User.java
│   │   │               ├── repository/
│   │   │               │   ├── CourseRepository.java
│   │   │               │   └── UserRepository.java
│   │   │               ├── service/
│   │   │               │   ├── CourseService.java
│   │   │               │   └── UserService.java
│   │   │               └── LanguageLearningPlatformApplication.java
│   │   └── resources/
│   │       ├── application.properties
│   └── test/
└── pom.xml
