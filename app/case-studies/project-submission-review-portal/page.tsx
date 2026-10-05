'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SocialShare from '@/app/components/SocialShare';
import ViewCounter from '@/app/components/ViewCounter';
import CodeBlock from '@/app/components/CodeBlock';

export default function ProjectSubmissionReviewPortalCaseStudy() {
  const [activeSection, setActiveSection] = useState('executive-summary');
  const [readingProgress, setReadingProgress] = useState(0);

  const sections = [
    { id: 'executive-summary', title: 'Executive Summary' },
    { id: 'video-demo', title: 'Video Walkthrough & UI' },
    { id: 'system-architecture', title: 'System Architecture' },
    { id: 'collaborative-workspace', title: 'Collaborative Workspace' },
    { id: 'core-features', title: 'Review & Submission Engine' },
    { id: 'frontend-architecture', title: 'Frontend Architecture' },
    { id: 'backend-deep-dive', title: 'Backend & Authentication' },
    { id: 'dockerization', title: 'Docker & Supervisor' },
    { id: 'aws-infrastructure', title: 'AWS CI/CD & Infrastructure' },
    { id: 'real-world-challenges', title: 'Real-World Challenges' },
    { id: 'diagnostic-commands', title: 'Operational Cheat Sheet' },
    { id: 'conclusion', title: 'Conclusion & Next Steps' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setReadingProgress(Math.min(progress, 100));

      const sectionElements = sections.map(section => document.getElementById(section.id));
      const currentSection = sectionElements.find(element => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const codeSnippets = {
    axiosClient: `// src/lib/axios.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // Essential for httpOnly cookie passing
  timeout: 30000,
});

// Auto-refresh access token on 401 Unauthorized response
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await axiosInstance.post('/auth/refresh');
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;`,

    authService: `// src/services/authService.ts
import axiosInstance from '@/lib/axios';
import { User, UserLogin } from '@/types';

export const login = async (credentials: UserLogin): Promise<void> => {
  const formData = new URLSearchParams();
  formData.append('username', credentials.email);
  formData.append('password', credentials.password);

  await axiosInstance.post('/auth/login', formData, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
};

export const getCurrentUser = async (): Promise<User> => {
  const response = await axiosInstance.get<User>('/auth/me');
  return response.data;
};`,

    httpOnlyCookies: `# app/api/auth.py
from fastapi import APIRouter, Response, Depends, HTTPException, status
from app.core.security import create_access_token, create_refresh_token

router = APIRouter()

def set_auth_cookies(response: Response, access_token: str, refresh_token: str):
    response.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,       # Prevents JavaScript XSS token theft
        secure=False,        # Set to True when HTTPS is enabled
        samesite="lax",      # CSRF Protection
        max_age=900,         # 15 minutes expiration
    )
    response.set_cookie(
        key="refresh_token",
        value=refresh_token,
        httponly=True,
        secure=False,
        samesite="lax",
        path="/auth/refresh", # Scoped strictly to refresh endpoint
        max_age=604800,      # 7 days expiration
    )`,

    corsConfig: `# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings

app = FastAPI(title="Project Submission & Review Portal API")

# Explicit CORS Whitelist (Wildcards '*' cannot be used with allow_credentials=True)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)`,

    sqlalchemyModel: `# app/models/project.py
import enum
from sqlalchemy import Column, Integer, String, Text, ForeignKey, Enum, DateTime
from sqlalchemy.orm import relationship
from app.core.database import Base

class ProjectStatus(str, enum.Enum):
    DRAFT = "DRAFT"
    SUBMITTED = "SUBMITTED"
    UNDER_REVIEW = "UNDER_REVIEW"
    APPROVED = "APPROVED"
    CHANGES_REQUESTED = "CHANGES_REQUESTED"

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=False)
    category = Column(String(100), nullable=False)
    tech_stack = Column(String(255), nullable=False)
    github_url = Column(String(500), nullable=True)
    demo_url = Column(String(500), nullable=True)
    status = Column(Enum(ProjectStatus), default=ProjectStatus.DRAFT, nullable=False)
    
    owner_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    owner = relationship("User", back_populates="projects")
    files = relationship("ProjectFile", back_populates="project", cascade="all, delete-orphan")`,

    workspaceModels: `# app/models/task.py, bug.py, timelog.py
import enum
from sqlalchemy import Column, Integer, String, Text, ForeignKey, Enum, DateTime, Boolean, Float
from sqlalchemy.orm import relationship
from app.core.database import Base

class TaskStatus(str, enum.Enum):
    TODO = "TODO"
    IN_PROGRESS = "IN_PROGRESS"
    IN_REVIEW = "IN_REVIEW"
    COMPLETED = "COMPLETED"

class PriorityLevel(str, enum.Enum):
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"
    URGENT = "URGENT"

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    status = Column(Enum(TaskStatus), default=TaskStatus.TODO, nullable=False)
    priority = Column(Enum(PriorityLevel), default=PriorityLevel.MEDIUM, nullable=False)
    due_date = Column(DateTime, nullable=True)
    
    project_id = Column(Integer, ForeignKey("projects.id", ondelete="CASCADE"), nullable=False)
    assignee_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    milestone_id = Column(Integer, ForeignKey("milestones.id"), nullable=True)

    subtasks = relationship("Subtask", back_populates="task", cascade="all, delete-orphan")
    timelogs = relationship("TimeLog", back_populates="task", cascade="all, delete-orphan")
    bugs = relationship("Bug", back_populates="task")`,

    dockerfile: `# Dockerfile
# Stage 1: Build Frontend Static Assets
FROM node:18-alpine AS frontend-builder
ARG NEXT_PUBLIC_API_URL
WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm ci

COPY frontend/ ./
ENV NEXT_PUBLIC_API_URL=\${NEXT_PUBLIC_API_URL}
RUN npm run build

# Stage 2: Unified Production Image
FROM python:3.11-slim
WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \\
    curl libpq5 supervisor \\
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \\
    && apt-get install -y nodejs \\
    && rm -rf /var/lib/apt/lists/*

COPY backend/requirements.txt ./backend/
RUN pip install --no-cache-dir -r backend/requirements.txt
COPY backend/ ./backend/

COPY --from=frontend-builder /app/frontend/.next ./frontend/.next
COPY --from=frontend-builder /app/frontend/public ./frontend/public
COPY --from=frontend-builder /app/frontend/package*.json ./frontend/
COPY --from=frontend-builder /app/frontend/node_modules ./frontend/node_modules

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

ENV PYTHONPATH=/app/backend NODE_ENV=production
EXPOSE 8000 3000

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]`,

    supervisord: `[supervisord]
nodaemon=true
logfile=/var/log/supervisor/supervisord.log
pidfile=/var/run/supervisord.pid

[program:backend]
command=uvicorn app.main:app --host 0.0.0.0 --port 8000
directory=/app/backend
autostart=true
autorestart=true
stdout_logfile=/dev/stdout
stdout_logfile_maxbytes=0
stderr_logfile=/dev/stderr
stderr_logfile_maxbytes=0

[program:frontend]
command=npm run start -- -p 3000
directory=/app/frontend
autostart=true
autorestart=true
stdout_logfile=/dev/stdout
stdout_logfile_maxbytes=0
stderr_logfile=/dev/stderr
stderr_logfile_maxbytes=0`,

    buildspec: `version: 0.2

env:
  variables:
    IMAGE_REPO_NAME: "project-submission-and-review-portal"
  secrets-manager:
    NEXT_PUBLIC_API_URL: dev/project-submission-and-review-portal:NEXT_PUBLIC_API_URL

phases:
  pre_build:
    commands:
      - echo "Starting pre-build phase at $(date)"
      - AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
      - echo "AWS Account ID = $AWS_ACCOUNT_ID"
      - echo "Logging into Amazon ECR..."
      - aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com
      - IMAGE_URI=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$IMAGE_REPO_NAME
      - IMAGE_TAG=$(echo $CODEBUILD_RESOLVED_SOURCE_VERSION | cut -c 1-7)
      - echo "Image URI = $IMAGE_URI:$IMAGE_TAG"

  build:
    commands:
      - echo "Building Docker image with NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL..."
      - docker build --build-arg NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL -t $IMAGE_REPO_NAME:$IMAGE_TAG .
      - docker tag $IMAGE_REPO_NAME:$IMAGE_TAG $IMAGE_URI:$IMAGE_TAG
      - docker tag $IMAGE_REPO_NAME:$IMAGE_TAG $IMAGE_URI:latest
      - echo "Docker build successfully completed!"

  post_build:
    commands:
      - echo "Pushing Docker images to Amazon ECR..."
      - docker push $IMAGE_URI:$IMAGE_TAG
      - docker push $IMAGE_URI:latest
      - echo "Images pushed successfully!"
      - echo "Deploying container updates to EC2 via AWS SSM..."
      - |
        COMMAND_ID=$(aws ssm send-command \\
          --instance-ids "$EC2_INSTANCE_ID" \\
          --document-name "AWS-RunShellScript" \\
          --timeout-seconds 300 \\
          --parameters commands='[
            "sudo systemctl start docker",
            "aws ecr get-login-password --region ap-south-1 | sudo docker login --username AWS --password-stdin '$AWS_ACCOUNT_ID'.dkr.ecr.ap-south-1.amazonaws.com",
            "sudo docker pull '$IMAGE_URI':latest",
            "sudo docker stop project-portal || true",
            "sudo docker rm project-portal || true",
            "sudo docker network create app-network || true",
            "sudo docker network connect app-network postgres-db || true",
            "sudo docker run -d --name project-portal --network app-network -e DATABASE_URL=postgresql://postgres:postgres@postgres-db:5432/project_portal --restart unless-stopped -p 80:3000 -p 8000:8000 '$IMAGE_URI':latest",
            "sudo docker exec project-portal bash -c \"cd /app/backend && python -m alembic upgrade head\"",
            "sudo docker ps"
          ]' \\
          --region "$AWS_REGION" \\
          --query "Command.CommandId" \\
          --output text)
        echo "SSM Command ID: $COMMAND_ID"
        echo "Waiting for EC2 deployment script to complete..."
        sleep 45
        STATUS=$(aws ssm get-command-invocation --command-id "$COMMAND_ID" --instance-id "$EC2_INSTANCE_ID" --region "$AWS_REGION" --query "Status" --output text)
        echo "Deployment Status: $STATUS"

artifacts:
  files:
    - '**/*'`
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100">
      {/* Scroll Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 z-50">
        <div 
          className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-200 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Floating Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-11 h-11 bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-full shadow-lg transition-all duration-200 z-40 flex items-center justify-center font-bold text-sm cursor-pointer"
        aria-label="Scroll to top"
      >
        ↑
      </button>

      {/* Header Hero Section */}
      <header className="relative bg-slate-950 text-white py-16 px-6 sm:px-12 border-b border-slate-800">
        <div className="relative max-w-5xl mx-auto">
          <Link href="/case-studies" className="inline-flex items-center text-slate-400 hover:text-white text-sm font-medium mb-6 transition-colors">
            ← Back to Case Studies
          </Link>

          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1 rounded-md text-xs font-mono font-medium uppercase tracking-wider">
              System Architecture & DevOps
            </span>
            <span className="bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1 rounded-md text-xs font-mono font-medium">
              15 min read
            </span>
            <span className="bg-slate-800 text-slate-400 border border-slate-700 px-3 py-1 rounded-md text-xs font-mono font-medium">
              September 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 tracking-tight text-white">
            Building & Deploying a Production-Grade Collaborative Project Workspace & Submission Portal with Next.js 14, FastAPI, PostgreSQL, and AWS
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl mb-8 font-normal">
            An end-to-end engineering blueprint for building a full-stack, enterprise collaborative project workspace—featuring Kanban task boards, bug tracking, billable timesheets, S3 asset pipelines, and automated zero-downtime AWS CI/CD deployments.
          </p>

          {/* Quick Hero Actions */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href="https://drive.google.com/file/d/1G9nv4FdehkZg6pcW9DAQDTTGFvf12uxC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2.5 rounded-lg text-xs sm:text-sm shadow-sm transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Watch Video Demo</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="https://github.com/ananyashah28/project-submission-and-review-project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-4 py-2.5 rounded-lg text-xs sm:text-sm border border-slate-700 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub Repository</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-slate-800 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-bold text-sm">
                AS
              </div>
              <div>
                <div className="font-semibold text-white">Ananya Shah</div>
                <div className="text-xs text-slate-400">Software & Cloud Systems Engineer</div>
              </div>
            </div>

            <div className="flex items-center gap-6 text-slate-400 text-xs sm:text-sm">
              <ViewCounter slug="project-submission-review-portal" />
              <SocialShare title="Building & Deploying a Production-Grade Collaborative Project Workspace & Submission Portal" url="https://ananyashah.dev/case-studies/project-submission-review-portal" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Table of Contents Sticky Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24 bg-white dark:bg-slate-900/90 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 px-2">
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                      activeSection === section.id
                        ? 'bg-slate-900 text-white dark:bg-blue-600 dark:text-white font-semibold shadow-sm'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span className="truncate">{section.title}</span>
                  </button>
                ))}
              </nav>

              {/* Share & Tech Stack Badges */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs space-y-3">
                <div className="font-semibold text-slate-800 dark:text-slate-200">Technologies Featured:</div>
                <div className="flex flex-wrap gap-1.5">
                  {['Next.js 14', 'FastAPI', 'PostgreSQL', 'Kanban Board', 'Bug Tracking', 'Timesheets', 'AWS S3', 'Docker', 'Supervisor', 'CodePipeline', 'SSM', 'Elastic IP'].map(tech => (
                    <span key={tech} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded text-[11px] font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Quick Links */}
              <div className="mt-5 pt-5 border-t border-slate-200 dark:border-slate-800 space-y-2">
                <a
                  href="https://drive.google.com/file/d/1G9nv4FdehkZg6pcW9DAQDTTGFvf12uxC/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-3 rounded-lg text-xs transition-colors shadow-sm cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Watch Demo (Drive)</span>
                  <svg className="w-3 h-3 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://github.com/ananyashah28/project-submission-and-review-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold py-2 px-3 rounded-lg text-xs border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Article Main Content Body */}
          <main className="lg:col-span-9 space-y-14">

            {/* Section 1: Executive Summary */}
            <section id="executive-summary" className="scroll-mt-28 bg-white dark:bg-slate-900/80 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  Executive Summary & Introduction
                </h2>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-4 leading-relaxed">
                <p>
                  In academic institutions, bootcamp environments, and engineering teams, managing software project submissions is often surprisingly chaotic. Project reports, presentation slides, source code archives, and demo screenshots end up scattered across Google Drives, email threads, Slack channels, and local machines. Reviewers struggle to maintain context, track revision histories, or deliver structured feedback.
                </p>
                <p>
                  To solve this problem, we designed and built the <strong>Project Submission & Review Portal</strong>—a centralized, full-stack web application designed for seamlessly managing project submissions, asset uploads, and review workflows.
                </p>
                <p>
                  In this comprehensive technical case study, we walk through the entire architectural blueprint, frontend service layers, backend security flows, multi-stage Docker containerization, and automated deployment pipeline on <strong>AWS EC2</strong> using <strong>AWS CodePipeline, ECR, SSM</strong>, and <strong>Supervisor</strong>.
                </p>
              </div>

              {/* Key Pillars Grid */}
              <div className="grid sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="text-slate-400 font-mono text-[11px] uppercase tracking-wider mb-1 font-semibold">Pillar 01</div>
                  <div className="text-slate-900 dark:text-white font-bold text-sm mb-1">High Concurrency API</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Asynchronous Python FastAPI core handling high-throughput submission evaluation requests.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="text-slate-400 font-mono text-[11px] uppercase tracking-wider mb-1 font-semibold">Pillar 02</div>
                  <div className="text-slate-900 dark:text-white font-bold text-sm mb-1">Safe Cookie Auth</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">httpOnly cookies & access token refresh rotation protecting user credentials against XSS.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="text-slate-400 font-mono text-[11px] uppercase tracking-wider mb-1 font-semibold">Pillar 03</div>
                  <div className="text-slate-900 dark:text-white font-bold text-sm mb-1">Zero-Downtime AWS CI/CD</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">AWS CodePipeline & SSM orchestrating automated single-container deployment on EC2.</p>
                </div>
              </div>
            </section>

            {/* Section: Video Demo Walkthrough & UI Screenshots */}
            <section id="video-demo" className="scroll-mt-28 bg-white dark:bg-slate-900/80 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 inline-block mb-2">
                    System Walkthrough
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    Video Demo Walkthrough & Interface Screenshots
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://drive.google.com/file/d/1G9nv4FdehkZg6pcW9DAQDTTGFvf12uxC/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs px-3.5 py-2 rounded-lg transition-colors shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Open in Google Drive</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Video Player Showcase Container */}
              <div className="bg-slate-950 text-white rounded-2xl border border-slate-800 shadow-xl overflow-hidden mb-8">
                <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="text-xs font-mono text-slate-400 ml-2 font-medium">Google Drive Embedded Walkthrough Demo</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    High Definition Walkthrough
                  </span>
                </div>

                <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
                  <iframe
                    src="https://drive.google.com/file/d/1G9nv4FdehkZg6pcW9DAQDTTGFvf12uxC/preview"
                    className="w-full h-full border-0"
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                    title="Project Portal Demo Walkthrough"
                  />
                </div>

                <div className="p-5 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-300">
                  <p className="leading-relaxed max-w-2xl">
                    <strong>Demo Highlights:</strong> In-depth video walkthrough demonstrating the full application lifecycle—including student authentication, interactive Kanban task boards, bug defect tracking, billable timesheet logging, and AWS S3 asset uploads.
                  </p>
                  <div className="flex items-center gap-2.5 shrink-0">
                    <a
                      href="https://drive.google.com/file/d/1G9nv4FdehkZg6pcW9DAQDTTGFvf12uxC/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-3.5 py-2 rounded-lg transition-colors shadow-sm"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Open Drive Video</span>
                    </a>
                    <a
                      href="https://github.com/ananyashah28/project-submission-and-review-project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-3.5 py-2 rounded-lg border border-slate-700 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>GitHub Code</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* UI Screenshots Showcase Grid */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Application User Interface Screenshots</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-sm">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src="/images/case-studies/project-submission-portal/login-interface.png"
                      alt="Project Portal Login Interface"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                    <div className="font-bold text-sm text-slate-900 dark:text-white mb-1">1. User Login & Authentication Interface</div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Clean, responsive sign-in interface communicating via httpOnly cookies and Next.js App Router.</p>
                  </div>
                </div>

                <div className="group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-sm">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src="/images/case-studies/project-submission-portal/register-interface.png"
                      alt="Project Portal Registration Interface"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                    <div className="font-bold text-sm text-slate-900 dark:text-white mb-1">2. Developer Account Registration</div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Registration workflow with input validation, password verification, and RBAC onboarding.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: High-Level System Architecture */}
            <section id="system-architecture" className="scroll-mt-28 bg-white dark:bg-slate-900/80 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  High-Level System Architecture
                </h2>
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                The architecture follows a decoupled full-stack model where the Next.js frontend handles client state and rendering, communicating with a high-performance Python FastAPI backend via REST APIs. Data persistence is handled by PostgreSQL for relational state and Amazon S3 for binary asset storage.
              </p>

              {/* Visual System Architecture Diagram */}
              <div className="mb-8 p-6 bg-slate-950 text-white rounded-xl border border-slate-800 space-y-6">
                <div className="text-xs font-mono uppercase tracking-widest text-slate-400 text-center font-semibold">AWS Cloud Architecture & Data Flow</div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 text-center">
                    <div className="text-slate-400 text-xs font-mono uppercase tracking-wider font-semibold mb-2">1. Client Layer</div>
                    <div className="font-bold text-sm text-white mb-1">Next.js 14 App Router</div>
                    <div className="text-xs text-slate-400">SSR Pages • AuthContext • Axios Interceptors</div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 text-center">
                    <div className="text-slate-400 text-xs font-mono uppercase tracking-wider font-semibold mb-2">2. Runtime & Proxy</div>
                    <div className="font-bold text-sm text-white mb-1">Supervisor + FastAPI</div>
                    <div className="text-xs text-slate-400">Uvicorn Async Worker • JWT Bearer • Pydantic v2</div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 text-center">
                    <div className="text-slate-400 text-xs font-mono uppercase tracking-wider font-semibold mb-2">3. Data & Storage</div>
                    <div className="font-bold text-sm text-white mb-1">PostgreSQL + S3</div>
                    <div className="text-xs text-slate-400">SQLAlchemy 2.0 • Alembic • Boto3 Presigned Uploads</div>
                  </div>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-lg border border-slate-800">
                  <div className="text-slate-300 text-xs font-mono uppercase tracking-wider font-semibold mb-1">4. AWS CI/CD Pipeline Workflow</div>
                  <div className="text-xs text-slate-400 font-mono leading-relaxed">
                    GitHub Dev Branch Push ➔ AWS CodePipeline Webhook ➔ CodeBuild Compilation (Secrets Manager API URL Injection) ➔ AWS ECR Image Tagging ➔ AWS SSM Agent Execution ➔ EC2 Container Restart with Alembic DB Migration
                  </div>
                </div>
              </div>

              {/* Tech Stack Overview Table */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Tech Stack & Infrastructure Matrix</h3>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider">
                      <th className="p-4">Layer</th>
                      <th className="p-4">Technology</th>
                      <th className="p-4">Key Responsibility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-slate-200">Frontend</td>
                      <td className="p-4 font-mono text-xs">Next.js 14, TypeScript, Tailwind CSS</td>
                      <td className="p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">Server-rendered pages, responsive UI, client state management</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-slate-200">Backend</td>
                      <td className="p-4 font-mono text-xs">Python 3.11, FastAPI, Pydantic v2</td>
                      <td className="p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">High-concurrency REST API, business validation, auth controllers</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-slate-200">Database</td>
                      <td className="p-4 font-mono text-xs">PostgreSQL 15, SQLAlchemy 2.0, Alembic</td>
                      <td className="p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">Relational database persistence, automated migration scripts</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-slate-200">Object Storage</td>
                      <td className="p-4 font-mono text-xs">Amazon S3 (boto3)</td>
                      <td className="p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">Secure asset storage for screenshots, PDF documentation, ZIP files</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-slate-200">Authentication</td>
                      <td className="p-4 font-mono text-xs">JWT (Access + Refresh), Passlib (Bcrypt)</td>
                      <td className="p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">httpOnly cookies with refresh token rotation</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-slate-200">Orchestration</td>
                      <td className="p-4 font-mono text-xs">Docker, Supervisor (`supervisord`)</td>
                      <td className="p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">Multi-stage single-container runner for Node.js and Uvicorn</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-slate-900 dark:text-slate-200">DevOps / Hosting</td>
                      <td className="p-4 font-mono text-xs">AWS EC2, ECR, CodePipeline, CodeBuild, SSM</td>
                      <td className="p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">Automated zero-downtime CI/CD container delivery pipeline</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section: Collaborative Project Management Workspace Architecture */}
            <section id="collaborative-workspace" className="scroll-mt-28 bg-white dark:bg-slate-900/80 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 inline-block mb-2">
                  Project Workspace Suite
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  Collaborative Project Workspace Architecture (`/projects/[id]`)
                </h2>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-4 leading-relaxed mb-8">
                <p>
                  In addition to managing final deliverables and reviews, the platform functions as an <strong>enterprise-grade collaborative project workspace</strong>. Inside each project (<code>/projects/[id]</code>), teams have dedicated, modular toolsets for <strong>Task Boards</strong>, <strong>Bug Tracking</strong>, <strong>Timesheets</strong>, <strong>Activity Feeds</strong>, <strong>Milestones</strong>, and <strong>Team Assignments</strong>.
                </p>
                <p>
                  This transforms the platform from a passive "submit your files" dropbox into an <strong>active daily engineering workspace</strong> where contributors plan sprints, triage defects, record billable sessions, and monitor real-time audit updates.
                </p>
              </div>

              {/* End-to-End Real-World Flow Diagram Box */}
              <div className="mb-10 p-6 bg-slate-950 text-white rounded-xl border border-slate-800 space-y-6">
                <div className="text-xs font-mono uppercase tracking-widest text-slate-400 text-center font-semibold">
                  End-to-End Project Execution & Evaluation Lifecycle
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 text-center">
                    <div className="text-slate-400 text-xs font-mono uppercase tracking-wider font-semibold mb-2">1. Execute</div>
                    <div className="font-bold text-sm text-white mb-1">Kanban & Tasks</div>
                    <div className="text-xs text-slate-400">To Do ➔ In Progress ➔ In Review ➔ Completed • Subtasks checklist • Milestones</div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 text-center">
                    <div className="text-slate-400 text-xs font-mono uppercase tracking-wider font-semibold mb-2">2. Track & Debug</div>
                    <div className="font-bold text-sm text-white mb-1">Bug Tracker</div>
                    <div className="text-xs text-slate-400">Severity ratings • Reproduction steps • Link defects to tasks & assignees</div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 text-center">
                    <div className="text-slate-400 text-xs font-mono uppercase tracking-wider font-semibold mb-2">3. Log & Audit</div>
                    <div className="font-bold text-sm text-white mb-1">Timesheets & Feed</div>
                    <div className="text-xs text-slate-400">Billable vs non-billable • Live activity audit trail • Velocity tracking</div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 text-center">
                    <div className="text-slate-400 text-xs font-mono uppercase tracking-wider font-semibold mb-2">4. Deliver & Review</div>
                    <div className="font-bold text-sm text-white mb-1">Deliverables & Review</div>
                    <div className="text-xs text-slate-400">AWS S3 asset uploads • Formal submission • Mentor evaluation scoring</div>
                  </div>
                </div>
              </div>

              {/* 5 Core Modules of the Workspace */}
              <div className="space-y-6">

                {/* 1. Kanban Task Management */}
                <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      1. Task Management & Kanban Board (`TaskBoard.tsx`)
                    </h3>
                    <span className="text-xs font-mono text-slate-400">Module 01</span>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc pl-4 leading-relaxed">
                    <li><strong>Kanban Workflow:</strong> Organizes project work across distinct pipeline columns (<span className="font-mono text-xs bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-1.5 py-0.5 rounded">To Do</span> ➔ <span className="font-mono text-xs bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 px-1.5 py-0.5 rounded">In Progress</span> ➔ <span className="font-mono text-xs bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 px-1.5 py-0.5 rounded">In Review</span> ➔ <span className="font-mono text-xs bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.5 rounded">Completed</span>).</li>
                    <li><strong>Priority Flags & Deadlines:</strong> Assign urgency tiers (<code className="font-mono text-xs">Low</code>, <code className="font-mono text-xs">Medium</code>, <code className="font-mono text-xs">High</code>, <code className="font-mono text-xs text-rose-600 dark:text-rose-400 font-bold">Urgent</code>) paired with target calendar due dates.</li>
                    <li><strong>Member Delegation:</strong> Assign tasks to specific project contributors or lead reviewers.</li>
                    <li><strong>Nested Subtasks:</strong> Break large deliverables down into granular subtask checklist items with instant completion toggles.</li>
                    <li><strong>Direct Association:</strong> Tasks link directly to milestones, accept bug attachments, and serve as targets for logged time.</li>
                  </ul>
                </div>

                {/* 2. Bug Tracker */}
                <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      2. Bug & Issue Tracker (`BugTracker.tsx`)
                    </h3>
                    <span className="text-xs font-mono text-slate-400">Module 02</span>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc pl-4 leading-relaxed">
                    <li><strong>Dedicated Defect Tracking:</strong> Report and triage bugs tied to the overall project or linked directly to an existing task item.</li>
                    <li><strong>Severity Levels:</strong> Categorize issues by impact tiers (<code className="font-mono text-xs">Low</code>, <code className="font-mono text-xs">Medium</code>, <code className="font-mono text-xs">High</code>, <code className="font-mono text-xs text-rose-600 dark:text-rose-400 font-bold">Critical</code>).</li>
                    <li><strong>Bug State Lifecycle:</strong> Transitions through verified states: <span className="font-mono text-xs bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 px-1.5 py-0.5 rounded">Open</span> ➔ <span className="font-mono text-xs bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 px-1.5 py-0.5 rounded">In Progress</span> ➔ <span className="font-mono text-xs bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 px-1.5 py-0.5 rounded">Resolved</span> ➔ <span className="font-mono text-xs bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-1.5 py-0.5 rounded">Closed</span>.</li>
                    <li><strong>Diagnostic Detail Fields:</strong> Built-in fields for reproduction steps, expected vs. actual behavior, reporter identity, and designated fixing engineer.</li>
                  </ul>
                </div>

                {/* 3. Timesheets & Time Tracking */}
                <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      3. Timesheets & Time Tracking (`TimesheetsView.tsx`)
                    </h3>
                    <span className="text-xs font-mono text-slate-400">Module 03</span>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc pl-4 leading-relaxed">
                    <li><strong>Hour Logging:</strong> Team members record working sessions, detailed descriptions, and exact durations tied to tasks or bug resolutions.</li>
                    <li><strong>Billable vs. Non-Billable:</strong> Explicitly flags hours as billable for client invoices or non-billable for internal refactoring.</li>
                    <li><strong>Aggregated Financial & Velocity Metrics:</strong> Dynamically calculates <strong>Total Project Hours</strong>, <strong>Total Billable Hours</strong>, user-by-user contributions, and date-range logs.</li>
                    <li><strong>Enterprise Value:</strong> Crucial for freelance billing, agency client invoicing, academic effort estimation, and project velocity tracking.</li>
                  </ul>
                </div>

                {/* 4. Activity Feed & Live Audit Trail */}
                <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      4. Activity Feed & Real-Time Audit Trail (`ActivityFeedView.tsx`)
                    </h3>
                    <span className="text-xs font-mono text-slate-400">Module 04</span>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc pl-4 leading-relaxed">
                    <li><strong>Chronological Event Timeline:</strong> Full audit stream showing real-time updates as team members push changes.</li>
                    <li><strong>Automated Entity Logging:</strong> Automatically captures user actions across all entities (<code className="font-mono text-xs">task</code>, <code className="font-mono text-xs">bug</code>, <code className="font-mono text-xs">subtask</code>, <code className="font-mono text-xs">milestone</code>, <code className="font-mono text-xs">timelog</code>) with exact timestamps and descriptions.</li>
                    <li><strong>Team Transparency:</strong> Eliminates manual daily status meetings by providing an immediate, verifiable project pulse in one place.</li>
                  </ul>
                </div>

                {/* 5. Milestones & Team Collaboration */}
                <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      5. Milestones & Team Management (`MilestonesView.tsx`, `TeamView.tsx`)
                    </h3>
                    <span className="text-xs font-mono text-slate-400">Module 05</span>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-2 list-disc pl-4 leading-relaxed">
                    <li><strong>Milestones:</strong> Group related tasks under key deadlines and releases (e.g., <em>Phase 1 Alpha</em>, <em>Database Migration</em>, <em>Final Presentation</em>).</li>
                    <li><strong>Team Members:</strong> Add collaborators with defined roles and quickly assign them to tasks, bugs, and timesheets.</li>
                  </ul>
                </div>

              </div>

              {/* Data Schema Code Block */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  Workspace Relational Schema (`app/models/task.py`, `bug.py`, `timelog.py`)
                </h3>
                <CodeBlock code={codeSnippets.workspaceModels} language="python" />
              </div>
            </section>

            {/* Section 4: Core Features & Roles */}
            <section id="core-features" className="scroll-mt-28 bg-white dark:bg-slate-900/80 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 inline-block mb-2">
                  Review & Submission Engine
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  Submission Lifecycle & Evaluation Tooling
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">1. Role-Based Access Control (RBAC)</h3>
                  <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-4 leading-relaxed">
                    <li>Distinct roles: <strong>Student / Submitter</strong>, <strong>Reviewer</strong>, and <strong>Admin</strong>.</li>
                    <li>Secure access tokens paired with refresh token rotation.</li>
                    <li>Strict endpoint authorization checks based on user role context.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">2. Lifecycle State Machine</h3>
                  <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-4 leading-relaxed">
                    <li>Submission Lifecycle: <span className="font-mono text-xs bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-1.5 py-0.5 rounded">Draft</span> ➔ <span className="font-mono text-xs bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 px-1.5 py-0.5 rounded">Submitted</span> ➔ <span className="font-mono text-xs bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 px-1.5 py-0.5 rounded">Under Review</span> ➔ <span className="font-mono text-xs bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.5 rounded">Approved</span> / <span className="font-mono text-xs bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 px-1.5 py-0.5 rounded">Changes Requested</span>.</li>
                    <li>Rich project metadata: Title, description, tech stack badges, repository links, and live demo links.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">3. Cloud Asset Storage</h3>
                  <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-4 leading-relaxed">
                    <li>Drag-and-drop file uploads for screenshots, documentation PDFs/PPTs, and source ZIP files.</li>
                    <li>Amazon S3 integration with MIME validation and file size restrictions.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">4. Reviewer Evaluation Tools</h3>
                  <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 space-y-1.5 list-disc pl-4 leading-relaxed">
                    <li>Inline numerical scoring and structured feedback entries.</li>
                    <li>Resubmission workflows when revisions are requested.</li>
                  </ul>
                </div>
              </div>

              {/* Amazon S3 Bucket Console Screenshot */}
              <div className="mt-8 group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-sm">
                <div className="p-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-2 border-b border-slate-800">
                  <span className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">Amazon S3 Console Verification</span>
                  <span className="text-xs font-mono text-slate-400">Bucket: project-submission-and-review-portal-416684166855-ap-south-1-an</span>
                </div>
                <div className="relative aspect-[16/8] overflow-hidden">
                  <img
                    src="/images/case-studies/project-submission-portal/amazon-s3.png"
                    alt="Amazon S3 Console Bucket"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                  <div className="font-bold text-sm text-slate-900 dark:text-white mb-1">Amazon S3 Asset Bucket Configuration</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Live S3 bucket console verification displaying `/projects/` binary storage hierarchy for student asset uploads.</p>
                </div>
              </div>
            </section>

            {/* Section 4: Frontend Architecture */}
            <section id="frontend-architecture" className="scroll-mt-28 bg-white dark:bg-slate-900/80 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 inline-block mb-2">
                  Client Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  Frontend Architecture (Next.js 14 App Router)
                </h2>
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                The frontend uses a strict <strong>Layered Architecture Pattern</strong> separating pages, React Context state, service API callers, and raw HTTP clients.
              </p>

              {/* Layer Pattern Grid */}
              <div className="grid sm:grid-cols-4 gap-4 mb-8">
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <div className="text-slate-400 font-mono font-bold text-xs uppercase mb-1">1. Pages (app/)</div>
                  <p className="text-xs text-slate-300">Pure UI components & event triggers. No direct fetch calls.</p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <div className="text-slate-400 font-mono font-bold text-xs uppercase mb-1">2. Context</div>
                  <p className="text-xs text-slate-300">Global session state (`AuthContext.tsx`) shared via hooks.</p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <div className="text-slate-400 font-mono font-bold text-xs uppercase mb-1">3. Services</div>
                  <p className="text-xs text-slate-300">Encapsulated API callers (`authService.ts`).</p>
                </div>
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800">
                  <div className="text-slate-400 font-mono font-bold text-xs uppercase mb-1">4. Lib (axios)</div>
                  <p className="text-xs text-slate-300">Base URL, credentials, and auto 401 token refresh.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">1. Centralized Axios Interceptor (`src/lib/axios.ts`)</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                To guarantee a smooth experience without jarring re-logins, the Axios response interceptor intercepts <code className="font-mono text-xs bg-slate-200 dark:bg-slate-800 text-rose-600 dark:text-rose-400 px-1.5 py-0.5 rounded font-bold">401 Unauthorized</code> responses and transparently requests a new access token before retrying failed requests:
              </p>
              <div className="mb-8">
                <CodeBlock code={codeSnippets.axiosClient} language="typescript" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">2. Service Layer Wrapper (`src/services/authService.ts`)</h3>
              <div>
                <CodeBlock code={codeSnippets.authService} language="typescript" />
              </div>
            </section>

            {/* Section 5: Backend Deep Dive */}
            <section id="backend-deep-dive" className="scroll-mt-28 bg-white dark:bg-slate-900/80 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 inline-block mb-2">
                  Server Runtime
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  Backend & Authentication Deep Dive (FastAPI)
                </h2>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">1. httpOnly Cookie Authentication Security</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                Rather than storing JWT tokens in vulnerable browser <code className="font-mono text-xs bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded">localStorage</code>, FastAPI sets tokens in <code className="font-mono text-xs bg-slate-200 dark:bg-slate-800 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded font-bold">httpOnly</code> cookies, protecting tokens against client-side XSS attacks:
              </p>
              <div className="mb-8">
                <CodeBlock code={codeSnippets.httpOnlyCookies} language="python" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">2. Strict CORS Configuration (`app/main.py`)</h3>
              <div className="mb-8">
                <CodeBlock code={codeSnippets.corsConfig} language="python" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">3. Database Schema Design (SQLAlchemy 2.0)</h3>
              <div>
                <CodeBlock code={codeSnippets.sqlalchemyModel} language="python" />
              </div>
            </section>

            {/* Section 6: Dockerization & Multi-Process */}
            <section id="dockerization" className="scroll-mt-28 bg-white dark:bg-slate-900/80 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 inline-block mb-2">
                  Containerization
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  Dockerization & Multi-Process Orchestration
                </h2>
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                To simplify deployment on single EC2 compute instances, a <strong>multi-stage Dockerfile</strong> compiles the Next.js static build and runs both FastAPI (Uvicorn) and Next.js under <strong>Supervisor</strong> process management.
              </p>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">1. Multi-Stage Dockerfile (`Dockerfile`)</h3>
              <div className="mb-8">
                <CodeBlock code={codeSnippets.dockerfile} language="dockerfile" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">2. Supervisor Process Configuration (<code className="font-mono text-sm">supervisord.conf</code>)</h3>
              <div>
                <CodeBlock code={codeSnippets.supervisord} language="ini" />
              </div>
            </section>

            {/* Section 7: AWS CI/CD & Infrastructure */}
            <section id="aws-infrastructure" className="scroll-mt-28 bg-white dark:bg-slate-900/80 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 inline-block mb-2">
                  Automation & Cloud
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  AWS CI/CD Pipeline & Infrastructure Setup
                </h2>
              </div>

              {/* Deployment Step Timeline */}
              <div className="mb-8 bg-slate-950 text-white p-6 rounded-xl border border-slate-800 space-y-4">
                <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-2">Automated CI/CD Deployment Flow</div>
                
                <div className="grid sm:grid-cols-5 gap-3 text-center">
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <div className="font-semibold text-xs text-white">1. GitHub Push</div>
                    <div className="text-[10px] text-slate-400 font-mono">dev Branch Trigger</div>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <div className="font-semibold text-xs text-white">2. CodeBuild</div>
                    <div className="text-[10px] text-slate-400 font-mono">Inject Env & Build</div>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <div className="font-semibold text-xs text-white">3. AWS ECR</div>
                    <div className="text-[10px] text-slate-400 font-mono">Push Tagged Image</div>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <div className="font-semibold text-xs text-white">4. AWS SSM</div>
                    <div className="text-[10px] text-slate-400 font-mono">Execute Shell Script</div>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <div className="font-semibold text-xs text-white">5. AWS EC2</div>
                    <div className="text-[10px] text-slate-400 font-mono">Restart & Migrate DB</div>
                  </div>
                </div>
              </div>

              {/* AWS Infrastructure Screenshots Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-sm">
                  <div className="p-3 bg-slate-900 text-white text-xs font-mono font-medium border-b border-slate-800 flex justify-between items-center">
                    <span className="text-slate-300">AWS Secrets Manager</span>
                    <span className="text-slate-400 text-[10px]">dev/project-submission-and-review-portal</span>
                  </div>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src="/images/case-studies/project-submission-portal/aws-secrets-manager.png"
                      alt="AWS Secrets Manager Console"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                    <div className="font-bold text-sm text-slate-900 dark:text-white mb-1">AWS Secrets Manager Integration</div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Key-value store storing `NEXT_PUBLIC_API_URL` & `ALLOWED_ORIGINS` injected dynamically during CodeBuild execution.</p>
                  </div>
                </div>

                <div className="group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-sm">
                  <div className="p-3 bg-slate-900 text-white text-xs font-mono font-medium border-b border-slate-800 flex justify-between items-center">
                    <span className="text-slate-300">AWS CodePipeline</span>
                    <span className="text-emerald-400 font-semibold text-[10px]">Status: Succeeded</span>
                  </div>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src="/images/case-studies/project-submission-portal/aws-codepipeline.png"
                      alt="AWS CodePipeline Console Succeeded Execution"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                    <div className="font-bold text-sm text-slate-900 dark:text-white mb-1">AWS CodePipeline Pipeline Panel</div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Console verification showing pipeline execution state for `ProjectSubmissionAndReviewPortal` with status Succeeded.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">AWS CodeBuild Buildspec (<code className="font-mono text-sm">buildspec.yml</code>)</h3>
              <div>
                <CodeBlock code={codeSnippets.buildspec} language="yaml" />
              </div>
            </section>

            {/* Section 8: Real-World Engineering Challenges */}
            <section id="real-world-challenges" className="scroll-mt-28 bg-white dark:bg-slate-900/80 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 inline-block mb-2">
                  Post-Mortem & Incident Log
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  Real-World Engineering Challenges & Solutions
                </h2>
              </div>

              <div className="space-y-6">
                {/* Challenge 1 */}
                <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      1. Dynamic EC2 IP Drift & Client `Network Error`
                    </h3>
                    <span className="text-xs font-mono text-slate-400">Issue #01</span>
                  </div>
                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <p className="text-slate-700 dark:text-slate-300">
                      <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded border border-rose-200 dark:border-rose-800/40 mr-2">Root Cause</span>
                      Default EC2 instances change their public IP address whenever stopped/restarted. Because Next.js bakes <code className="font-mono text-xs bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded">NEXT_PUBLIC_API_URL</code> into client JavaScript bundles at <strong>build time</strong>, frontend requests failed with a `Network Error`.
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/40 mr-2">Resolution</span>
                      Allocated a static <strong>AWS Elastic IP</strong> (<code className="font-mono text-xs font-semibold">35.154.152.233</code>) attached directly to the EC2 instance, guaranteeing IP stability across reboots.
                    </p>
                  </div>
                </div>

                {/* Challenge 2 */}
                <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      2. Stale Secrets in AWS Secrets Manager
                    </h3>
                    <span className="text-xs font-mono text-slate-400">Issue #02</span>
                  </div>
                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <p className="text-slate-700 dark:text-slate-300">
                      <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded border border-rose-200 dark:border-rose-800/40 mr-2">Root Cause</span>
                      AWS CodeBuild pulled old server IP references from Secrets Manager during container image compilation.
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/40 mr-2">Resolution</span>
                      Updated secrets in AWS Secrets Manager to target the Elastic IP:
                      <span className="block font-mono text-xs text-slate-600 dark:text-slate-400 mt-1 pl-2 border-l-2 border-slate-300 dark:border-slate-700 space-y-0.5">
                        <span>• NEXT_PUBLIC_API_URL ➔ http://35.154.152.233:8000</span>
                        <br />
                        <span>• ALLOWED_ORIGINS ➔ http://35.154.152.233,http://35.154.152.233:8000,http://localhost:3000</span>
                      </span>
                    </p>
                  </div>
                </div>

                {/* Challenge 3 */}
                <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      3. Windows Path Incompatibility (`Zone.Identifier` Colons)
                    </h3>
                    <span className="text-xs font-mono text-slate-400">Issue #03</span>
                  </div>
                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <p className="text-slate-700 dark:text-slate-300">
                      <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded border border-rose-200 dark:border-rose-800/40 mr-2">Root Cause</span>
                      <code className="font-mono text-xs bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded">git clone</code> failed on Windows with <code className="font-mono text-xs bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded">invalid path 'Docs/...:Zone.Identifier'</code> due to NTFS stream specifiers.
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/40 mr-2">Resolution</span>
                      Configured sparse checkout to filter Zone.Identifier metadata files:
                      <code className="block font-mono text-xs bg-slate-900 text-slate-200 p-2.5 rounded-lg mt-2 border border-slate-800">
                        git config core.protectNTFS false<br />
                        git config core.sparseCheckout true<br />
                        echo -e "/*\n!*:*\n!*Zone.Identifier*" &gt; .git/info/sparse-checkout<br />
                        git restore --staged .
                      </code>
                    </p>
                  </div>
                </div>

                {/* Challenge 4 */}
                <div className="bg-slate-50 dark:bg-slate-800/40 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      4. Local Database Port Collision (5432 vs 5433)
                    </h3>
                    <span className="text-xs font-mono text-slate-400">Issue #04</span>
                  </div>
                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <p className="text-slate-700 dark:text-slate-300">
                      <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-2 py-0.5 rounded border border-rose-200 dark:border-rose-800/40 mr-2">Root Cause</span>
                      Local <code className="font-mono text-xs bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded">docker compose up -d db</code> failed with <code className="font-mono text-xs bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded">Bind for 0.0.0.0:5432 failed: port is already allocated</code>.
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/40 mr-2">Resolution</span>
                      Remapped local host port in <code className="font-mono text-xs bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded">docker-compose.yml</code> to <code className="font-mono text-xs font-semibold">"5433:5432"</code> while maintaining internal container resolution on port <code className="font-mono text-xs">5432</code> inside <code className="font-mono text-xs">app-network</code>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Diagnostic Commands */}
            <section id="diagnostic-commands" className="scroll-mt-28 bg-white dark:bg-slate-900/80 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 inline-block mb-2">
                  Operations Guide
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  Operational & Diagnostic Cheat Sheet
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <p>Run these diagnostic commands directly on EC2 via AWS SSM or SSH for instant troubleshooting:</p>

                <div className="bg-slate-950 text-slate-200 p-5 rounded-xl border border-slate-800 font-mono text-xs space-y-3">
                  <div>
                    <span className="text-slate-500 font-semibold"># 1. Inspect running containers</span>
                    <div className="text-slate-200 mt-0.5">sudo docker ps</div>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold"># 2. View live container output logs</span>
                    <div className="text-slate-200 mt-0.5">sudo docker logs -f project-portal --tail 100</div>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold"># 3. View Supervisor backend error logs</span>
                    <div className="text-slate-200 mt-0.5">sudo docker exec project-portal cat /var/log/supervisor/backend.err.log | tail -50</div>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold"># 4. Trigger Alembic database migrations manually</span>
                    <div className="text-slate-200 mt-0.5">sudo docker exec project-portal bash -c "cd /app/backend && python -m alembic upgrade head"</div>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold"># 5. Access interactive PostgreSQL database shell</span>
                    <div className="text-slate-200 mt-0.5">sudo docker exec -it postgres-db psql -U postgres -d project_portal</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Conclusion & Next Steps */}
            <section id="conclusion" className="scroll-mt-28 bg-white dark:bg-slate-900/80 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 inline-block mb-2">
                  Summary
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  Conclusion & Architectural Takeaways
                </h2>
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                Building the <strong>Project Submission & Review Portal</strong> demonstrates a production-tested blueprint for full-stack system engineering on AWS:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-8 list-disc pl-5 leading-relaxed">
                <li><strong>FastAPI</strong> provides robust asynchronous REST endpoints with high throughput and strict Pydantic contract validation.</li>
                <li><strong>Next.js 14</strong> delivers modern server-rendered performance and smooth React client state workflows.</li>
                <li><strong>Amazon S3 & PostgreSQL</strong> deliver reliable separation between relational metadata and binary asset storage.</li>
                <li><strong>AWS CodePipeline, ECR, Elastic IP, and SSM</strong> enable repeatable, zero-downtime continuous deployment on containerized EC2 instances.</li>
              </ul>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Future Enhancements</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
                  <div className="font-bold text-slate-900 dark:text-white mb-1">Real-time WebSockets</div>
                  <p className="text-slate-600 dark:text-slate-400">Instant push notifications when a reviewer submits evaluation scores.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
                  <div className="font-bold text-slate-900 dark:text-white mb-1">In-Browser PDF Viewer</div>
                  <p className="text-slate-600 dark:text-slate-400">Embedded PDF document preview for project reports without manual downloads.</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
                  <div className="font-bold text-slate-900 dark:text-white mb-1">OAuth2 SSO</div>
                  <p className="text-slate-600 dark:text-slate-400">Single Sign-On integration with Google Workspace and GitHub OAuth providers.</p>
                </div>
              </div>

              {/* Project Links & Codebase Access */}
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                <div className="bg-slate-950 text-white rounded-xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
                  <div className="space-y-1.5">
                    <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold">Source Code & Demonstration</div>
                    <h3 className="text-xl font-bold text-white">Explore the Architecture on GitHub & Google Drive</h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                      Inspect the complete full-stack source code, multi-stage Dockerfiles, Supervisor configuration, and automated AWS CI/CD pipelines on GitHub, or stream the recorded video walkthrough on Google Drive.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0">
                    <a
                      href="https://drive.google.com/file/d/1G9nv4FdehkZg6pcW9DAQDTTGFvf12uxC/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-xl shadow-sm transition-all text-sm group cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Watch Demo (Drive)</span>
                      <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>

                    <a
                      href="https://github.com/ananyashah28/project-submission-and-review-project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-5 py-3 rounded-xl border border-slate-700 transition-all text-sm group cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>Explore GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>



          </main>
        </div>
      </div>
    </div>
  );
}
