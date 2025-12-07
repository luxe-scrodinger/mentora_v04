# Spark School AI - Database Schema Documentation

## Overview
Comprehensive database schema designed for managing personalized adaptive learning (PAL) platform with support for teachers, students, courses, questions, and learning analytics.

## Core Entities

### 1. Users & Authentication
- **users**: Stores all user accounts (teachers, students, parents, admins)
- Tracks authentication, profile info, and last login
- Supports multiple user types with role-based access

### 2. School & Organization
- **schools**: School/organization information
- Supports different subscription tiers (free, pro, enterprise)
- Tracks student and teacher counts

### 3. Classes & Enrollment
- **classes**: Individual class sections with grade levels and subjects
- **class_enrollments**: Tracks student enrollment in classes
- Links students to courses with enrollment status

### 4. Lessons & Content
- **lessons**: Full lesson plans with content and methodology
- **learning_materials**: Various types of materials (presentations, worksheets, etc.)
- Tracks AI generation and creator information

### 5. Questions & Assessments
- **questions**: Individual questions with type, difficulty, and standards alignment
- **question_options**: Multiple choice options with correct answer marking
- **quizzes**: Quiz/assessment organization
- **quiz_questions**: Maps questions to quizzes with ordering and marks

### 6. Student Learning Data
- **student_responses**: Records each student's answer to each question
- Tracks response correctness, time taken, and marks
- **quiz_attempts**: Complete quiz attempt tracking
- **student_analytics**: Daily analytics aggregation

### 7. PAL (Personalized Adaptive Learning)
- **pal_paths**: Tracks individual student learning paths
- Current concept, difficulty level, progress
- Point system and streak tracking

### 8. Misconception Tracking
- **misconceptions**: Stores identified misconception patterns
- **student_misconceptions**: Tracks when misconceptions are detected
- Status tracking: detected → remediated → persistent
- Remediation attempt tracking

### 9. Concept Mastery
- **concept_mastery**: Tracks student mastery of individual concepts
- Mastery levels from 0-100%
- Status progression: not_started → in_progress → mastered

### 10. Assignments
- **assignments**: Assignment creation and management
- **assignment_submissions**: Student submission tracking
- Grading and feedback system

## Key Features

### Performance Optimization
- Composite indexes for common query patterns
- Efficient status and date-based filtering
- Optimized for analytical queries

### Analytics Views
- **student_performance_summary**: Quick performance overview
- **class_performance_summary**: Class-level analytics
- **misconception_summary**: Misconception patterns across students

### Data Integrity
- Foreign key constraints maintain referential integrity
- Cascading deletes for related records
- Unique constraints prevent duplicate enrollments

### Audit Trail
- created_at and updated_at timestamps on all entities
- User tracking (created_by, graded_by, etc.)
- Status history through enum fields

## Growth Scalability
- Supports multiple schools in single database
- Handles large numbers of students per school
- Efficient daily analytics aggregation
- Indexed for quick lookup of high-volume queries

## PAL Algorithm Support
Tables designed to support PAL question selection:
1. **current_concept**: Determines current topic
2. **is_correct**: Routes to next or remedial question
3. **misconception_id**: Identifies specific gaps
4. **pal_paths**: Maintains personalized path state
5. **concept_mastery**: Tracks progression

This schema enables the PAL system to:
- Adapt questions based on correctness
- Identify misconceptions automatically
- Provide targeted remediation
- Track progress through concepts
- Generate real-time analytics
