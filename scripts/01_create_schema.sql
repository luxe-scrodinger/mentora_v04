-- Spark School AI Database Schema
-- Comprehensive schema for managing teachers, students, questions, and learning data

-- ============================================================================
-- USERS & AUTHENTICATION
-- ============================================================================

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  user_type ENUM('teacher', 'student', 'parent', 'admin') NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  avatar_url TEXT,
  school_id UUID,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP,
  is_active BOOLEAN DEFAULT true,
  INDEX idx_email (email),
  INDEX idx_user_type (user_type),
  INDEX idx_school_id (school_id)
);

-- ============================================================================
-- SCHOOLS & ORGANIZATIONS
-- ============================================================================

CREATE TABLE IF NOT EXISTS schools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  city VARCHAR(100),
  state VARCHAR(100),
  country VARCHAR(100),
  phone VARCHAR(20),
  email VARCHAR(255),
  website VARCHAR(255),
  logo_url TEXT,
  subscription_tier ENUM('free', 'pro', 'enterprise') DEFAULT 'free',
  total_students INT DEFAULT 0,
  total_teachers INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_name (name),
  INDEX idx_subscription_tier (subscription_tier)
);

-- Add foreign key for users.school_id
ALTER TABLE users ADD CONSTRAINT fk_users_school 
  FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE SET NULL;

-- ============================================================================
-- CLASSES & GROUPS
-- ============================================================================

CREATE TABLE IF NOT EXISTS classes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  section VARCHAR(50),
  grade_level INT,
  subject VARCHAR(100),
  school_id UUID NOT NULL,
  teacher_id UUID NOT NULL,
  capacity INT,
  academic_year VARCHAR(9),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE,
  FOREIGN KEY (teacher_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_school_id (school_id),
  INDEX idx_teacher_id (teacher_id),
  INDEX idx_grade_level (grade_level)
);

-- ============================================================================
-- CLASS ENROLLMENTS
-- ============================================================================

CREATE TABLE IF NOT EXISTS class_enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL,
  class_id UUID NOT NULL,
  enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('active', 'inactive', 'completed') DEFAULT 'active',
  INDEX idx_student_id (student_id),
  INDEX idx_class_id (class_id),
  FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE CASCADE,
  UNIQUE KEY unique_enrollment (student_id, class_id)
);

-- ============================================================================
-- LESSONS & CONTENT
-- ============================================================================

CREATE TABLE IF NOT EXISTS lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  subject VARCHAR(100),
  topic VARCHAR(100),
  grade_level INT,
  content TEXT,
  duration_minutes INT,
  methodology VARCHAR(100),
  created_by UUID NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  published BOOLEAN DEFAULT false,
  published_date TIMESTAMP,
  FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE CASCADE,
  FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_class_id (class_id),
  INDEX idx_created_by (created_by),
  INDEX idx_subject (subject)
);

-- ============================================================================
-- QUESTIONS & ASSESSMENTS
-- ============================================================================

CREATE TABLE IF NOT EXISTS questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID,
  subject VARCHAR(100),
  topic VARCHAR(100),
  question_text TEXT NOT NULL,
  question_type ENUM('mcq', 'short_answer', 'long_answer', 'true_false', 'matching') DEFAULT 'mcq',
  difficulty ENUM('easy', 'medium', 'hard') DEFAULT 'medium',
  grade_level INT,
  bloom_level VARCHAR(50),
  curriculum_standard VARCHAR(255),
  created_by UUID NOT NULL,
  ai_generated BOOLEAN DEFAULT false,
  ai_model VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE SET NULL,
  FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_lesson_id (lesson_id),
  INDEX idx_subject_topic (subject, topic),
  INDEX idx_difficulty (difficulty),
  INDEX idx_grade_level (grade_level)
);

-- ============================================================================
-- QUESTION OPTIONS (for MCQ and true/false)
-- ============================================================================

CREATE TABLE IF NOT EXISTS question_options (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id UUID NOT NULL,
  option_text TEXT NOT NULL,
  option_order INT,
  is_correct BOOLEAN DEFAULT false,
  explanation TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE,
  INDEX idx_question_id (question_id),
  UNIQUE KEY unique_option_order (question_id, option_order)
);

-- ============================================================================
-- QUIZZES & ASSESSMENTS
-- ============================================================================

CREATE TABLE IF NOT EXISTS quizzes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  subject VARCHAR(100),
  duration_minutes INT,
  pass_percentage INT DEFAULT 60,
  created_by UUID NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  published BOOLEAN DEFAULT false,
  published_date TIMESTAMP,
  FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE CASCADE,
  FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_class_id (class_id),
  INDEX idx_subject (subject)
);

-- ============================================================================
-- QUIZ QUESTIONS
-- ============================================================================

CREATE TABLE IF NOT EXISTS quiz_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_id UUID NOT NULL,
  question_id UUID NOT NULL,
  question_order INT,
  marks INT DEFAULT 1,
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE,
  FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE,
  INDEX idx_quiz_id (quiz_id),
  UNIQUE KEY unique_quiz_question (quiz_id, question_id)
);

-- ============================================================================
-- STUDENT RESPONSES & ANSWERS
-- ============================================================================

CREATE TABLE IF NOT EXISTS student_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id UUID NOT NULL,
  quiz_attempt_id UUID,
  student_id UUID NOT NULL,
  response_text TEXT,
  selected_option_id UUID,
  is_correct BOOLEAN,
  marks_obtained INT,
  time_taken_seconds INT,
  response_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE,
  FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (selected_option_id) REFERENCES question_options(id) ON DELETE SET NULL,
  INDEX idx_student_id (student_id),
  INDEX idx_question_id (question_id)
);

-- ============================================================================
-- MISCONCEPTIONS & LEARNING GAPS
-- ============================================================================

CREATE TABLE IF NOT EXISTS misconceptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id UUID NOT NULL,
  misconception_type VARCHAR(100),
  misconception_description TEXT,
  remediation_strategy TEXT,
  correct_concept TEXT,
  created_by UUID,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE,
  FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_question_id (question_id)
);

-- ============================================================================
-- STUDENT MISCONCEPTION LOG
-- ============================================================================

CREATE TABLE IF NOT EXISTS student_misconceptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL,
  misconception_id UUID NOT NULL,
  student_response_id UUID,
  detected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('detected', 'remediated', 'persistent') DEFAULT 'detected',
  remediation_attempts INT DEFAULT 0,
  resolved_at TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (misconception_id) REFERENCES misconceptions(id) ON DELETE CASCADE,
  FOREIGN KEY (student_response_id) REFERENCES student_responses(id) ON DELETE SET NULL,
  INDEX idx_student_id (student_id),
  INDEX idx_status (status),
  INDEX idx_detected_at (detected_at)
);

-- ============================================================================
-- PAL (PERSONALIZED ADAPTIVE LEARNING) PATHS
-- ============================================================================

CREATE TABLE IF NOT EXISTS pal_paths (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL,
  class_id UUID NOT NULL,
  current_concept VARCHAR(255),
  current_difficulty ENUM('easy', 'medium', 'hard'),
  progress_percentage INT DEFAULT 0,
  streak_count INT DEFAULT 0,
  total_points INT DEFAULT 0,
  total_questions_answered INT DEFAULT 0,
  correct_answers INT DEFAULT 0,
  accuracy_percentage DECIMAL(5, 2),
  last_activity TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE CASCADE,
  INDEX idx_student_id (student_id),
  INDEX idx_class_id (class_id),
  UNIQUE KEY unique_pal_path (student_id, class_id)
);

-- ============================================================================
-- CONCEPT MASTERY
-- ============================================================================

CREATE TABLE IF NOT EXISTS concept_mastery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL,
  concept_name VARCHAR(255) NOT NULL,
  subject VARCHAR(100),
  grade_level INT,
  mastery_level INT DEFAULT 0,
  first_seen TIMESTAMP,
  last_practiced TIMESTAMP,
  total_attempts INT DEFAULT 0,
  successful_attempts INT DEFAULT 0,
  mastery_percentage DECIMAL(5, 2),
  status ENUM('not_started', 'in_progress', 'mastered') DEFAULT 'not_started',
  FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_student_id (student_id),
  INDEX idx_concept_name (concept_name),
  INDEX idx_status (status)
);

-- ============================================================================
-- LESSON ATTEMPTS
-- ============================================================================

CREATE TABLE IF NOT EXISTS quiz_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_id UUID NOT NULL,
  student_id UUID NOT NULL,
  start_time TIMESTAMP,
  end_time TIMESTAMP,
  total_marks INT DEFAULT 0,
  marks_obtained INT DEFAULT 0,
  percentage DECIMAL(5, 2),
  status ENUM('in_progress', 'submitted', 'graded') DEFAULT 'in_progress',
  submitted_at TIMESTAMP,
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE,
  FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_student_id (student_id),
  INDEX idx_quiz_id (quiz_id),
  INDEX idx_submitted_at (submitted_at)
);

-- ============================================================================
-- ANALYTICS & PROGRESS TRACKING
-- ============================================================================

CREATE TABLE IF NOT EXISTS student_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL,
  class_id UUID NOT NULL,
  date DATE,
  total_questions_answered INT DEFAULT 0,
  correct_answers INT DEFAULT 0,
  wrong_answers INT DEFAULT 0,
  accuracy_percentage DECIMAL(5, 2),
  time_spent_minutes INT DEFAULT 0,
  concepts_attempted INT DEFAULT 0,
  concepts_mastered INT DEFAULT 0,
  engagement_score INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE CASCADE,
  INDEX idx_student_id (student_id),
  INDEX idx_class_id (class_id),
  INDEX idx_date (date)
);

-- ============================================================================
-- TEACHER CREATED MATERIALS
-- ============================================================================

CREATE TABLE IF NOT EXISTS learning_materials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  material_type ENUM('lesson_plan', 'slide_presentation', 'worksheet', 'assignment', 'activity', 'mind_map', 'exam') DEFAULT 'worksheet',
  subject VARCHAR(100),
  topic VARCHAR(100),
  grade_level INT,
  content TEXT,
  ai_generated BOOLEAN DEFAULT false,
  ai_model VARCHAR(50),
  created_by UUID NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  downloads INT DEFAULT 0,
  FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE CASCADE,
  FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_class_id (class_id),
  INDEX idx_material_type (material_type),
  INDEX idx_subject (subject)
);

-- ============================================================================
-- ASSIGNMENTS
-- ============================================================================

CREATE TABLE IF NOT EXISTS assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  quiz_id UUID,
  assigned_by UUID NOT NULL,
  due_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE CASCADE,
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE SET NULL,
  FOREIGN KEY (assigned_by) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_class_id (class_id),
  INDEX idx_due_date (due_date)
);

-- ============================================================================
-- ASSIGNMENT SUBMISSIONS
-- ============================================================================

CREATE TABLE IF NOT EXISTS assignment_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assignment_id UUID NOT NULL,
  student_id UUID NOT NULL,
  submitted_at TIMESTAMP,
  status ENUM('pending', 'submitted', 'graded') DEFAULT 'pending',
  grade INT,
  feedback TEXT,
  graded_by UUID,
  graded_at TIMESTAMP,
  FOREIGN KEY (assignment_id) REFERENCES assignments(id) ON DELETE CASCADE,
  FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (graded_by) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_student_id (student_id),
  INDEX idx_assignment_id (assignment_id),
  INDEX idx_status (status)
);

-- ============================================================================
-- INDEXES FOR PERFORMANCE
-- ============================================================================

-- Create composite indexes for common queries
CREATE INDEX IF NOT EXISTS idx_class_enrollments_class_active 
  ON class_enrollments(class_id, status);

CREATE INDEX IF NOT EXISTS idx_questions_lesson_difficulty 
  ON questions(lesson_id, difficulty);

CREATE INDEX IF NOT EXISTS idx_student_responses_student_date 
  ON student_responses(student_id, response_date);

CREATE INDEX IF NOT EXISTS idx_pal_paths_progress 
  ON pal_paths(student_id, progress_percentage);

CREATE INDEX IF NOT EXISTS idx_concept_mastery_status 
  ON concept_mastery(student_id, status);

-- ============================================================================
-- VIEWS FOR ANALYTICS
-- ============================================================================

-- Student Performance Summary
CREATE OR REPLACE VIEW student_performance_summary AS
SELECT 
  s.id as student_id,
  s.first_name,
  s.last_name,
  ce.class_id,
  COUNT(DISTINCT sr.question_id) as total_questions_answered,
  SUM(CASE WHEN sr.is_correct THEN 1 ELSE 0 END) as correct_answers,
  ROUND(100.0 * SUM(CASE WHEN sr.is_correct THEN 1 ELSE 0 END) / 
    NULLIF(COUNT(DISTINCT sr.question_id), 0), 2) as accuracy_percentage,
  MAX(sr.response_date) as last_activity
FROM users s
LEFT JOIN class_enrollments ce ON s.id = ce.student_id
LEFT JOIN student_responses sr ON s.id = sr.student_id
WHERE s.user_type = 'student'
GROUP BY s.id, s.first_name, s.last_name, ce.class_id;

-- Class Performance Summary
CREATE OR REPLACE VIEW class_performance_summary AS
SELECT 
  c.id as class_id,
  c.name as class_name,
  COUNT(DISTINCT ce.student_id) as total_students,
  COUNT(DISTINCT sr.question_id) as total_questions_answered,
  SUM(CASE WHEN sr.is_correct THEN 1 ELSE 0 END) as total_correct_answers,
  ROUND(100.0 * SUM(CASE WHEN sr.is_correct THEN 1 ELSE 0 END) / 
    NULLIF(COUNT(DISTINCT sr.question_id), 0), 2) as class_accuracy_percentage
FROM classes c
LEFT JOIN class_enrollments ce ON c.id = ce.class_id
LEFT JOIN student_responses sr ON ce.student_id = sr.student_id
GROUP BY c.id, c.name;

-- Misconception Summary
CREATE OR REPLACE VIEW misconception_summary AS
SELECT 
  sm.student_id,
  m.misconception_type,
  m.misconception_description,
  COUNT(*) as occurrence_count,
  SUM(CASE WHEN sm.status = 'resolved' THEN 1 ELSE 0 END) as resolved_count,
  MAX(sm.detected_at) as last_detected
FROM student_misconceptions sm
JOIN misconceptions m ON sm.misconception_id = m.id
GROUP BY sm.student_id, m.misconception_type, m.misconception_description;
