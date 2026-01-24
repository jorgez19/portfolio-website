'use client';

import { useEffect } from 'react';
import Aurora from '@/components/Aurora';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Aurora Background */}
      <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: -1, backgroundColor: '#020617' }}>
        <Aurora
          colorStops={["#3b82f6", "#2563eb", "#4f46e5"]}
          amplitude={1}
          blend={0.5}
        />
      </div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto w-full">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mb-8">

            <div className="max-w-3xl">
              <div className="mb-4">
                <span className="text-red-500 text-lg font-mono">
                  Hi, my name is
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold text-slate-100 mb-4">
                Jorge Zavala.
              </h1>

              <h2 className="text-4xl md:text-6xl font-bold text-slate-400">
                I build scalable backend systems and custom AI solutions.
              </h2>
            </div>

            <Image
              src="/profilepic.png"
              alt="Jorge Zavala"
              width={192}
              height={192}
              className="rounded-full border-4 border-blue-500/50 object-cover shrink-0 md:-translate-x-20"
              priority
            />
          </div>
          <p className="text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
            I'm a backend developer from Montana, USA specializing in databases, APIs, and AI integration.
            I've worked with over 100 clients to design robust architectures that power modern applications.
          </p>

          {/* 5-Star Fiverr Rating Badge */}
          <div className="flex items-center gap-4 mb-12 flex-wrap">
            <div className="flex items-center gap-3 bg-slate-800/50 px-5 py-3 rounded-lg border border-slate-700/50">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-slate-300 font-semibold">5.0 on Fiverr</span>
                <span className="text-slate-500 text-xs">~100 reviews</span>
              </div>
            </div>
            <a
              href="https://www.fiverr.com/jorgez19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-red-500 transition-all text-sm flex items-center gap-1"
            >
              See Fiverr Profile
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#about"
              className="inline-block px-8 py-4 bg-red-500 text-white rounded hover:bg-red-600 transition-all font-mono"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="inline-block px-8 py-4 border-2 border-red-500 text-red-500 rounded hover:bg-red-500/10 transition-all font-mono"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-4">
            <span className="text-red-500 font-mono text-2xl">01.</span>
            About Me
            <span className="flex-1 h-px bg-slate-700 ml-4"></span>
          </h2>
          <div className="text-slate-400 space-y-4 text-lg">
            <p>
              Hello! I'm Jorge, a backend developer who enjoys creating efficient, scalable systems.
              My journey in software development has been driven by a passion for solving complex problems
              through clean, maintainable code.
            </p>
            <p>
              I specialize in building robust APIs, optimizing database performance, and
              integrating AI capabilities into production applications. Having worked with over 100 clients,
              I've learned to deliver solutions that not only work but scale with business growth.
            </p>
            <p>Here are some technologies I've been working with:</p>
            <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
              <li className="flex items-center gap-2">
                <span className="text-red-500">▹</span> Python / FastAPI
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">▹</span> Node.js / Express
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">▹</span> PostgreSQL / MongoDB
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">▹</span> Google Gemini
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">▹</span> OpenAI / Stable Diffusion
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">▹</span> Docker / AWS
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Certifications Section */}
      <section id="certifications" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-4">
            Certifications
            <span className="flex-1 h-px bg-slate-700 ml-4"></span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Google Cybersecurity */}
            <a
              href="https://coursera.org/share/b8ba05e6f07eae4248817f52bfc4c01f"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-red-500/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <Image
                    src="/googlelogo.png"
                    alt="Google"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100 mb-1">Google Cybersecurity</h3>
                  <p className="text-slate-400 text-sm">Coursera Professional Certificate</p>
                </div>
              </div>
            </a>

            {/* AWS DevOps */}
            <a
              href="https://coursera.org/share/54cd7643794a39e1d2a5f0af62af168e"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-red-500/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <Image
                    src="/awslogo.png"
                    alt="AWS"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100 mb-1">DevOps on AWS</h3>
                  <p className="text-slate-400 text-sm">Coursera Professional Certificate</p>
                </div>
              </div>
            </a>

            {/* Google Data Analytics */}
            <a
              href="https://coursera.org/share/80b43fff531c244f7695b4db176aa08d"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-red-500/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <Image
                    src="/googlelogo.png"
                    alt="Google"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100 mb-1">Google Data Analytics</h3>
                  <p className="text-slate-400 text-sm">Coursera Professional Certificate</p>
                </div>
              </div>
            </a>

            {/* Google IT Automation with Python */}
            <a
              href="https://coursera.org/share/34222449028f74294ec00b1274229936"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-red-500/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <Image
                    src="/googlelogo.png"
                    alt="Google"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100 mb-1">IT Automation with Python</h3>
                  <p className="text-slate-400 text-sm">Coursera • Google Certificate</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-4">
            <span className="text-red-500 font-mono text-2xl">02.</span>
            Things I've Built
            <span className="flex-1 h-px bg-slate-700 ml-4"></span>
          </h2>

          <div className="space-y-24">
            {/* Project 1 - Image Prompt Optimizer */}
            <div className="relative">
              <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-slate-700/50 hover:border-red-500/50 transition-all">
                <div className="mb-4">
                  <span className="text-red-500 font-mono text-sm">Featured Project</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-4 text-center">
                  Image Prompt Optimizer
                </h3>

                {/* Video Demo */}
                <div className="mb-6 rounded-lg overflow-hidden border border-slate-700/50 max-w-3xl mx-auto">
                  <video
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full opacity-80 hover:opacity-100 transition"
                  >
                    <source src="/ImagePromptDemo720.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="bg-slate-900/80 rounded p-6 mb-6">
                  <p className="text-slate-400 leading-relaxed">
                    An AI-powered image generation tool that solves the common problem of prompt
                    iteration—users typically adjust prompts 5+ times before getting their desired
                    result. Uses GPT-4o-mini to analyze and optimize prompts upfront with intelligent
                    recommendations. Users select or customize descriptions, which are formatted as
                    JSON and sent to GPT Image for precise, high-quality results on the first try.
                  </p>
                </div>
                <ul className="flex flex-wrap gap-3 mb-6 font-mono text-sm text-slate-400">
                  <li className="px-3 py-1 rounded border border-slate-700/50">Python</li>
                  <li className="px-3 py-1 rounded border border-slate-700/50">Streamlit</li>
                  <li className="px-3 py-1 rounded border border-slate-700/50">OpenAI API</li>
                  <li className="px-3 py-1 rounded border border-slate-700/50">GPT-4o-mini</li>
                  <li className="px-3 py-1 rounded border border-slate-700/50">GPT Image</li>
                  <li className="px-3 py-1 rounded border border-slate-700/50">SQLite</li>
                  <li className="px-3 py-1 rounded border border-slate-700/50">Hugging Face Spaces</li>
                </ul>
                <div className="flex gap-6 flex-wrap justify-center">
                  <a

                    href="https://github.com/jorgez19/image-prompt-optimizer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-red-500 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="font-mono text-sm">View Repo</span>
                  </a>

                  <a
                    href="https://jorgez19-imagepromptgenerator.hf.space/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all font-mono text-sm"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Try Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 - API Gateway */}
            <div className="relative">
              <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-slate-700/50 hover:border-red-500/50 transition-all">
                <div className="mb-4">
                  <span className="text-red-500 font-mono text-sm">Featured Project</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-4">
                  High-Performance API Gateway
                </h3>
                <div className="bg-slate-900/80 rounded p-6 mb-6">
                  <p className="text-slate-400 leading-relaxed">
                    Designed and implemented a RESTful API gateway handling 10k+ requests per minute
                    for multiple clients. Built with FastAPI featuring JWT authentication, rate limiting,
                    caching strategies, and comprehensive error handling. Optimized response times to
                    under 100ms for 95% of requests through strategic database indexing and query optimization.
                  </p>
                </div>
                <ul className="flex flex-wrap gap-3 mb-6 font-mono text-sm text-slate-400">
                  <li className="px-3 py-1 rounded border border-slate-700/50">Python</li>
                  <li className="px-3 py-1 rounded border border-slate-700/50">FastAPI</li>
                  <li className="px-3 py-1 rounded border border-slate-700/50">PostgreSQL</li>
                  <li className="px-3 py-1 rounded border border-slate-700/50">Docker</li>
                  <li className="px-3 py-1 rounded border border-slate-700/50">JWT</li>
                  <li className="px-3 py-1 rounded border border-slate-700/50">AWS</li>
                </ul>

              </div>
            </div>

            {/* Project 3 - Database Optimization */}
            <div className="relative">
              <div className="bg-slate-800/50 rounded-lg p-8 backdrop-blur-sm border border-slate-700/50 hover:border-red-500/50 transition-all">
                <div className="mb-4">
                  <span className="text-red-500 font-mono text-sm">Featured Project</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-4">
                  Database Optimization System
                </h3>
                <div className="bg-slate-900/80 rounded p-6 mb-6">
                  <p className="text-slate-400 leading-relaxed">
                    Optimized database schema and queries for a system managing 50M+ records across
                    multiple client projects. Implemented indexing strategies, query optimization, and
                    connection pooling that reduced average query time by 70%. Designed efficient data
                    models with proper normalization and denormalization strategies based on access patterns.
                  </p>
                </div>
                <ul className="flex flex-wrap gap-3 mb-6 font-mono text-sm text-slate-400">
                  <li className="px-3 py-1 rounded border border-slate-700/50">PostgreSQL</li>
                  <li className="px-3 py-1 rounded border border-slate-700/50">MongoDB</li>
                  <li className="px-3 py-1 rounded border border-slate-700/50">Node.js</li>
                  <li className="px-3 py-1 rounded border border-slate-700/50">SQL</li>
                  <li className="px-3 py-1 rounded border border-slate-700/50">Performance Tuning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-red-500 font-mono text-lg">03. What's Next?</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            I'm open to freelance projects and full-time roles focused on backend development.
            If you need someone to build scalable APIs or optimize your database, let's talk!
          </p>
          <a
            href="mailto:jorgezavala14@hotmail.com"
            className="inline-block px-8 py-4 border-2 border-red-500 text-red-500 rounded hover:bg-red-500/10 transition-all font-mono"
          >
            Say Hello
          </a>

          <div className="mt-16 flex justify-center gap-8">
            <a
              href="https://github.com/jorgez19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-red-500 transition"
              aria-label="GitHub"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/jorge-zavala-468130a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-red-500 transition"
              aria-label="LinkedIn"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.fiverr.com/jorgez19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-red-500 transition font-semibold"
              aria-label="Fiverr"
            >
              Fiverr
            </a>
            <a
              href="mailto:jorgezavala14@hotmail.com"
              className="text-slate-400 hover:text-red-500 transition"
              aria-label="Email"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-slate-500 text-sm font-mono">
        <p>Built with Next.js & Tailwind CSS</p>
      </footer>
    </main >
  );
}