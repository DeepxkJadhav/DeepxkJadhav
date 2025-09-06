<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deepak Jadhav - AI/ML Developer</title>
    <style>
        :root {
            --primary: #1a1b26;
            --secondary: #24283b;
            --accent: #bb9af7;
            --text: #c0caf5;
            --highlight: #7aa2f7;
            --green: #9ece6a;
            --red: #f7768e;
            --yellow: #e0af68;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: var(--primary);
            color: var(--text);
            line-height: 1.6;
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        header {
            text-align: center;
            padding: 40px 20px;
            position: relative;
            overflow: hidden;
        }
        
        .header-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            z-index: -1;
        }
        
        h1 {
            font-size: 3rem;
            margin-bottom: 10px;
            color: var(--accent);
            text-shadow: 0 0 10px rgba(187, 154, 247, 0.5);
        }
        
        h2 {
            font-size: 1.8rem;
            margin: 20px 0;
            color: var(--highlight);
        }
        
        h3 {
            font-size: 1.5rem;
            margin: 15px 0;
            color: var(--green);
        }
        
        p {
            margin-bottom: 15px;
        }
        
        .subtitle {
            font-size: 1.2rem;
            color: var(--yellow);
            margin-bottom: 30px;
        }
        
        .quote-container {
            background-color: var(--secondary);
            border-left: 4px solid var(--accent);
            padding: 20px;
            margin: 30px 0;
            border-radius: 0 8px 8px 0;
        }
        
        .quote {
            font-style: italic;
            color: var(--text);
        }
        
        .quote-author {
            text-align: right;
            margin-top: 10px;
            color: var(--accent);
        }
        
        .section {
            background-color: var(--secondary);
            padding: 30px;
            border-radius: 12px;
            margin-bottom: 30px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        
        .skill-item {
            background-color: rgba(122, 162, 247, 0.1);
            padding: 12px;
            border-radius: 8px;
            text-align: center;
            transition: transform 0.3s ease;
        }
        
        .skill-item:hover {
            transform: translateY(-5px);
            background-color: rgba(122, 162, 247, 0.2);
        }
        
        .project-card {
            background-color: rgba(36, 40, 59, 0.8);
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            border: 1px solid rgba(122, 162, 247, 0.2);
        }
        
        .project-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
        }
        
        .project-link {
            color: var(--accent);
            text-decoration: none;
            padding: 5px 10px;
            border: 1px solid var(--accent);
            border-radius: 5px;
            transition: all 0.3s ease;
        }
        
        .project-link:hover {
            background-color: var(--accent);
            color: var(--primary);
        }
        
        .timeline {
            position: relative;
            padding-left: 30px;
            margin: 30px 0;
        }
        
        .timeline::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 4px;
            background-color: var(--accent);
        }
        
        .timeline-item {
            margin-bottom: 30px;
            position: relative;
        }
        
        .timeline-item::before {
            content: '';
            position: absolute;
            left: -38px;
            top: 5px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: var(--primary);
            border: 4px solid var(--accent);
        }
        
        .timeline-year {
            color: var(--yellow);
            font-weight: bold;
            margin-bottom: 5px;
        }
        
        .stats-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }
        
        .stat-card {
            background-color: rgba(36, 40, 59, 0.8);
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }
        
        .stat-number {
            font-size: 2.5rem;
            font-weight: bold;
            color: var(--green);
            margin: 10px 0;
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 30px 0;
        }
        
        .social-btn {
            display: inline-block;
            padding: 12px 25px;
            background-color: var(--secondary);
            color: var(--text);
            text-decoration: none;
            border-radius: 8px;
            transition: all 0.3s ease;
            border: 1px solid var(--highlight);
        }
        
        .social-btn:hover {
            background-color: var(--highlight);
            color: var(--primary);
            transform: translateY(-3px);
        }
        
        footer {
            text-align: center;
            margin-top: 50px;
            padding: 20px;
            color: var(--text);
            opacity: 0.7;
        }
        
        @media (max-width: 768px) {
            h1 {
                font-size: 2.2rem;
            }
            
            .skills-grid {
                grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            }
            
            .stats-container {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="header-bg"></div>
        <h1>Deepak Jadhav</h1>
        <p class="subtitle">AI/ML Developer & Researcher</p>
        <p>コードこそが術だ | Code is my jutsu</p>
    </header>

    <div class="quote-container">
        <p class="quote">"People live their lives bound by what they accept as correct and true. That's how they define 'reality'. But what does it mean to be 'correct' or 'true'? Merely vague concepts... Their 'reality' may all be a mirage. Can we consider them to be simply living in their own world, shaped by their beliefs?"</p>
        <p class="quote-author">- Itachi Uchiha</p>
    </div>

    <div class="section">
        <h2>About Me</h2>
        <p>I'm an AI/ML Developer specializing in building intelligent systems that bridge the gap between cutting-edge research and real-world applications. My expertise spans LLMs, computer vision, and distributed systems for machine learning.</p>
        
        <p>Currently, I'm focused on developing efficient real-time inference systems and exploring the frontiers of agent-based AI and multi-modal learning. I believe in creating technology that enhances human capabilities while maintaining aesthetic elegance in implementation.</p>
        
        <div class="skills-grid">
            <div class="skill-item">Python</div>
            <div class="skill-item">PyTorch</div>
            <div class="skill-item">TensorFlow</div>
            <div class="skill-item">FastAPI</div>
            <div class="skill-item">Docker</div>
            <div class="skill-item">LLMs</div>
            <div class="skill-item">Computer Vision</div>
            <div class="skill-item">RAG Systems</div>
            <div class="skill-item">HuggingFace</div>
            <div class="skill-item">OpenCV</div>
            <div class="skill-item">Git</div>
            <div class="skill-item">Linux</div>
        </div>
    </div>

    <div class="section">
        <h2>Featured Projects</h2>
        
        <div class="project-card">
            <div class="project-title">
                <h3>NeuroNosh</h3>
                <a href="https://github.com/DeepxkJadhav/NeuroNosh" class="project-link">View Project</a>
            </div>
            <p>A real-time LLM-based diagnostic assistant capable of processing and analyzing medical queries with contextual understanding. Built with a custom-tuned model for specialized domain knowledge.</p>
        </div>
        
        <div class="project-card">
            <div class="project-title">
                <h3>GhostVision</h3>
                <a href="https://github.com/DeepxkJadhav/GhostVision" class="project-link">View Project</a>
            </div>
            <p>Lightweight object detection framework optimized for edge devices. Implements efficient model architectures with minimal computational footprint while maintaining high accuracy.</p>
        </div>
        
        <div class="project-card">
            <div class="project-title">
                <h3>Sentient-Ui</h3>
                <a href="https://github.com/DeepxkJadhav/Sentient-Ui" class="project-link">View Project</a>
            </div>
            <p>Audio-driven generative synthesis tool that creates visual artwork based on audio input. Combines signal processing with generative adversarial networks for cross-modal creativity.</p>
        </div>
    </div>

    <div class="section">
        <h2>Professional Journey</h2>
        
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-year">2022</div>
                <p>Established foundation in computer science fundamentals and software engineering principles.</p>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-year">2023</div>
                <p>Developed interest in AI/ML, focusing on practical implementations and building initial projects.</p>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-year">2024</div>
                <p>Created production-ready AI tools utilizing FastAPI and HuggingFace ecosystem. Expanded into deployment and scalability challenges.</p>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-year">2025</div>
                <p>Focused on agent-based AI systems and multi-modal machine learning approaches. Working on cutting-edge research applications.</p>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>GitHub Statistics</h2>
        
        <div class="stats-container">
            <div class="stat-card">
                <h3>Repository Contributions</h3>
                <div class="stat-number">42+</div>
                <p>Projects and contributions</p>
            </div>
            
            <div class="stat-card">
                <h3>Technologies Mastered</h3>
                <div class="stat-number">15+</div>
                <p>Frameworks and tools</p>
            </div>
            
            <div class="stat-card">
                <h3>Community Impact</h3>
                <div class="stat-number">100%</div>
                <p>Open-source dedication</p>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>Connect With Me</h2>
        
        <div class="social-links">
            <a href="https://www.linkedin.com/in/deepak-jadhav-9aa508336/" class="social-btn">LinkedIn</a>
            <a href="https://github.com/DeepxkJadhav" class="social-btn">GitHub</a>
            <a href="https://www.instagram.com/deepxk_jadhav" class="social-btn">Instagram</a>
        </div>
        
        <p style="text-align: center; margin-top: 20px;">Open to collaborations on innovative AI projects and research opportunities.</p>
    </div>

    <footer>
        <p>© 2023 Deepak Jadhav | AI/ML Developer</p>
        <p>Last updated: December 2023</p>
    </footer>
</body>
</html>
