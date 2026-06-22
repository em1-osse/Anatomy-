// ============================================
// تطبيق المنصة التعليمية
// Learning Platform Application
// ============================================

const app = {
    state: {
        lang: 'ar',
        view: 'home',
        courseId: null,
        lectureId: null,
        quizState: {},
        searchOpen: false,
        menuOpen: false
    },

    // ============================================
    // Helpers
    // ============================================
    t(ar, en) {
        return this.state.lang === 'ar' ? ar : en;
    },

    getText(obj) {
        if (typeof obj === 'string') return obj;
        return obj ? (obj[this.state.lang] || obj.ar || obj.en || '') : '';
    },

    getCourse(id) {
        return platformData.courses.find(c => c.id === id);
    },

    getLecture(courseId, lectureId) {
        const course = this.getCourse(courseId);
        if (!course) return null;
        return course.lectures.find(l => l.id === lectureId);
    },

    // ============================================
    // Initialization
    // ============================================
    init() {
        // Load saved language preference
        const savedLang = localStorage.getItem('platform-lang');
        if (savedLang) {
            this.state.lang = savedLang;
            document.body.classList.toggle('ltr', savedLang === 'en');
        }
        
        // Check URL hash for deep linking
        this.handleHash();
        window.addEventListener('hashchange', () => this.handleHash());
        
        this.renderHome();
        this.renderMenu();
        this.updateStaticText();
    },

    handleHash() {
        const hash = window.location.hash.replace('#', '');
        if (!hash) return;
        
        const parts = hash.split('/');
        if (parts[0] === 'course' && parts[1]) {
            this.renderCourse(parts[1]);
        } else if (parts[0] === 'lecture' && parts[1] && parts[2]) {
            this.renderLecture(parts[1], parts[2], parts[3] || 'content');
        }
    },

    updateStaticText() {
        document.title = this.getText(platformData.siteTitle);
        document.getElementById('nav-title').textContent = this.getText(platformData.siteTitle);
        document.getElementById('menu-title').textContent = this.state.lang === 'ar' ? 'القائمة' : 'Menu';
        document.getElementById('footer-text').textContent = this.getText(platformData.footerText);
        document.getElementById('print-text').textContent = this.state.lang === 'ar' ? 'طباعة' : 'Print';
        document.getElementById('home-text').textContent = this.state.lang === 'ar' ? 'الرئيسية' : 'Home';
        document.getElementById('search-input').placeholder = this.state.lang === 'ar' 
            ? 'ابحث في الدروس والمحاضرات...' 
            : 'Search courses and lectures...';
        document.documentElement.lang = this.state.lang;
    },

    // ============================================
    // Navigation
    // ============================================
    goHome() {
        this.state.view = 'home';
        this.state.courseId = null;
        this.state.lectureId = null;
        window.location.hash = '';
        this.renderHome();
        window.scrollTo(0, 0);
    },

    renderHome() {
        this.state.view = 'home';
        const main = document.getElementById('main-content');
        const lang = this.state.lang;
        const courses = platformData.courses;
        
        let totalLectures = 0;
        courses.forEach(c => totalLectures += c.lectures.length);
        
        main.innerHTML = `
            <div class="hero fade-in">
                <div class="hero-content">
                    <h1>${this.getText(platformData.siteTitle)}</h1>
                    <p>${this.getText(platformData.siteSubtitle)}</p>
                    <button class="btn btn-primary" onclick="app.scrollToCourses()">
                        <i class="fas fa-book-open"></i>
                        <span>${lang === 'ar' ? 'استعرض الدورات' : 'Browse Courses'}</span>
                    </button>
                    <div class="hero-stats">
                        <div class="hero-stat">
                            <span class="number">${courses.length}</span>
                            <span class="label">${lang === 'ar' ? 'دورة' : 'Courses'}</span>
                        </div>
                        <div class="hero-stat">
                            <span class="number">${totalLectures}</span>
                            <span class="label">${lang === 'ar' ? 'محاضرة' : 'Lectures'}</span>
                        </div>
                        <div class="hero-stat">
                            <span class="number">∞</span>
                            <span class="label">${lang === 'ar' ? 'إمكانية التوسع' : 'Expandable'}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="container section" id="courses-section">
                <h2 class="section-title">${lang === 'ar' ? 'الدورات المتاحة' : 'Available Courses'}</h2>
                <p class="section-subtitle">${lang === 'ar' ? 'اختر دورة لبدء التعلم' : 'Choose a course to start learning'}</p>
                <div class="courses-grid">
                    ${courses.map(course => this.renderCourseCard(course)).join('')}
                </div>
            </div>
            
            <div class="container section">
                <div class="summary-card">
                    <h3 class="summary-title">
                        <i class="fas fa-lightbulb"></i>
                        ${lang === 'ar' ? 'كيف تستخدم المنصة؟' : 'How to use the platform?'}
                    </h3>
                    <div class="summary-grid">
                        <div class="summary-item">
                            <div class="icon">📖</div>
                            <h4>${lang === 'ar' ? 'اقرأ المحاضرات' : 'Read Lectures'}</h4>
                            <p>${lang === 'ar' ? 'محتوى منظم مع صور وجداول ونقاط تفصيلية' : 'Organized content with images, tables, and detailed points'}</p>
                        </div>
                        <div class="summary-item">
                            <div class="icon">🔊</div>
                            <h4>${lang === 'ar' ? 'استمع للنطق' : 'Listen to Pronunciation'}</h4>
                            <p>${lang === 'ar' ? 'اضغط على أيقونة الصوت لسماع النطق الصحيح' : 'Click the audio icon to hear correct pronunciation'}</p>
                        </div>
                        <div class="summary-item">
                            <div class="icon">❓</div>
                            <h4>${lang === 'ar' ? 'اختبر نفسك' : 'Test Yourself'}</h4>
                            <p>${lang === 'ar' ? 'اختبارات تفاعلية لكل محاضرة' : 'Interactive quizzes for each lecture'}</p>
                        </div>
                        <div class="summary-item">
                            <div class="icon">🖨️</div>
                            <h4>${lang === 'ar' ? 'اطبع الملخصات' : 'Print Summaries'}</h4>
                            <p>${lang === 'ar' ? 'احفظ المحتوى PDF أو اطبعه للمراجعة' : 'Save as PDF or print for review'}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.updateStaticText();
        this.renderMenu();
    },

    renderCourseCard(course) {
        const lang = this.state.lang;
        const title = this.getText(course.title);
        const subtitle = this.getText(course.subtitle);
        const description = this.getText(course.description);
        const badge = this.getText(course.badge);
        const lecturesCount = course.lectures.length;
        
        return `
            <div class="course-card fade-in" onclick="app.renderCourse('${course.id}')">
                <img src="${course.image}" alt="${title}" class="course-image" loading="lazy">
                <div class="course-body">
                    <span class="course-badge">${badge}</span>
                    <h3 class="course-title">${title}</h3>
                    <p class="course-subtitle" style="color: var(--primary-color); font-weight: 600; margin-bottom: 0.5rem;">${subtitle}</p>
                    <p class="course-description">${description}</p>
                    <div class="course-meta">
                        <span><i class="fas fa-video"></i> ${lecturesCount} ${lang === 'ar' ? 'محاضرة' : 'Lectures'}</span>
                        <span><i class="fas fa-graduation-cap"></i> ${this.getText(platformData.professor)}</span>
                    </div>
                    <div class="lecture-action">
                        <span>${lang === 'ar' ? 'عرض المحاضرات' : 'View Lectures'}</span>
                        <i class="fas fa-arrow-${lang === 'ar' ? 'left' : 'right'}"></i>
                    </div>
                </div>
            </div>
        `;
    },

    scrollToCourses() {
        document.getElementById('courses-section').scrollIntoView({ behavior: 'smooth' });
    },

    // ============================================
    // Course Detail
    // ============================================
    renderCourse(courseId) {
        const course = this.getCourse(courseId);
        if (!course) return this.goHome();
        
        this.state.view = 'course';
        this.state.courseId = courseId;
        window.location.hash = `course/${courseId}`;
        
        const main = document.getElementById('main-content');
        const lang = this.state.lang;
        
        main.innerHTML = `
            <div class="hero fade-in">
                <div class="hero-content">
                    <div class="lecture-back" onclick="app.goHome()">
                        <i class="fas fa-arrow-${lang === 'ar' ? 'right' : 'left'}"></i>
                        <span>${lang === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}</span>
                    </div>
                    <h1>${this.getText(course.title)}</h1>
                    <p>${this.getText(course.subtitle)}</p>
                    <p>${this.getText(course.description)}</p>
                </div>
            </div>
            
            <div class="container section">
                <h2 class="section-title">${lang === 'ar' ? 'المحاضرات' : 'Lectures'}</h2>
                <p class="section-subtitle">${lang === 'ar' ? 'اضغط على أي محاضرة للانتقال إلى تفاصيلها' : 'Click any lecture to view details'}</p>
                <div class="lectures-grid">
                    ${course.lectures.map((lecture, index) => this.renderLectureCard(courseId, lecture, index)).join('')}
                </div>
            </div>
            
            ${this.renderSummary(course.summary)}
        `;
        
        this.updateStaticText();
        this.renderMenu();
        window.scrollTo(0, 0);
    },

    renderLectureCard(courseId, lecture, index) {
        const title = this.getText(lecture.title);
        const topics = lecture.topics.map(t => `<span class="lecture-topic">${this.getText(t)}</span>`).join('');
        const lang = this.state.lang;
        
        return `
            <div class="lecture-card fade-in" onclick="app.renderLecture('${courseId}', '${lecture.id}', 'content')">
                <div class="lecture-icon">${lecture.icon}</div>
                <div class="lecture-number">${lang === 'ar' ? 'المحاضرة' : 'Lecture'} ${index + 1}</div>
                <h3 class="lecture-title">${title}</h3>
                <div class="lecture-topics">${topics}</div>
                <div class="lecture-action">
                    <span>${lang === 'ar' ? 'عرض التفاصيل' : 'View Details'}</span>
                    <i class="fas fa-arrow-${lang === 'ar' ? 'left' : 'right'}"></i>
                </div>
            </div>
        `;
    },

    // ============================================
    // Lecture Detail
    // ============================================
    renderLecture(courseId, lectureId, activeTab = 'content') {
        const course = this.getCourse(courseId);
        const lecture = this.getLecture(courseId, lectureId);
        if (!course || !lecture) return this.goHome();
        
        this.state.view = 'lecture';
        this.state.courseId = courseId;
        this.state.lectureId = lectureId;
        window.location.hash = `lecture/${courseId}/${lectureId}/${activeTab}`;
        
        const main = document.getElementById('main-content');
        const lang = this.state.lang;
        const title = this.getText(lecture.title);
        
        // Initialize quiz state
        if (!this.state.quizState[`${courseId}-${lectureId}`]) {
            this.state.quizState[`${courseId}-${lectureId}`] = {
                currentQuestion: 0,
                score: 0,
                answered: false,
                finished: false
            };
        }
        
        let tabContent = '';
        if (activeTab === 'content') {
            tabContent = lecture.sections.map(section => this.renderSection(section)).join('');
        } else if (activeTab === 'quiz') {
            tabContent = this.renderQuiz(courseId, lectureId);
        } else if (activeTab === 'summary') {
            tabContent = course.summary ? this.renderSummary(course.summary, true) : '<p>No summary available</p>';
        }
        
        main.innerHTML = `
            <div class="lecture-header fade-in">
                <div class="lecture-header-content">
                    <div class="lecture-back" onclick="app.renderCourse('${courseId}')">
                        <i class="fas fa-arrow-${lang === 'ar' ? 'right' : 'left'}"></i>
                        <span>${lang === 'ar' ? 'العودة للدورة' : 'Back to Course'}</span>
                    </div>
                    <h1>${lecture.icon} ${title}</h1>
                    <p class="en-title">${this.getText({ ar: '', en: lecture.title.en })}</p>
                </div>
            </div>
            
            <div class="container">
                <div class="lecture-tabs fade-in">
                    <button class="lecture-tab ${activeTab === 'content' ? 'active' : ''}" onclick="app.renderLecture('${courseId}', '${lectureId}', 'content')">
                        <i class="fas fa-book"></i> ${lang === 'ar' ? 'المحتوى' : 'Content'}
                    </button>
                    <button class="lecture-tab ${activeTab === 'quiz' ? 'active' : ''}" onclick="app.renderLecture('${courseId}', '${lectureId}', 'quiz')">
                        <i class="fas fa-question-circle"></i> ${lang === 'ar' ? 'اختبار' : 'Quiz'}
                    </button>
                    <button class="lecture-tab ${activeTab === 'summary' ? 'active' : ''}" onclick="app.renderLecture('${courseId}', '${lectureId}', 'summary')">
                        <i class="fas fa-clipboard-list"></i> ${lang === 'ar' ? 'ملخص' : 'Summary'}
                    </button>
                </div>
                
                <div class="lecture-content fade-in">
                    ${tabContent}
                </div>
            </div>
        `;
        
        this.updateStaticText();
        this.renderMenu();
        window.scrollTo(0, 0);
    },

    renderSection(section) {
        const title = this.getText(section.title);
        
        switch (section.type) {
            case 'intro':
                return `
                    <div class="content-section">
                        <h2>${title}</h2>
                        <p>${this.getText(section.content)}</p>
                    </div>
                `;
            
            case 'text':
                return `
                    <div class="content-section">
                        <h2>${title}</h2>
                        <p>${this.getText(section.content)}</p>
                    </div>
                `;
            
            case 'images':
                const images = section.images.map(img => `
                    <figure class="image-card">
                        <img src="${img.src}" alt="${this.getText(img.caption)}" loading="lazy">
                        <figcaption>${this.getText(img.caption)}</figcaption>
                    </figure>
                `).join('');
                return `
                    <div class="content-section">
                        <h2>${title}</h2>
                        <div class="images-gallery">${images}</div>
                    </div>
                `;
            
            case 'terms':
                const terms = section.terms.map(term => `
                    <div class="content-section" style="margin-top: 1.5rem;">
                        <h3>
                            ${term.ar}
                            <button class="audio-btn" onclick="app.speak('${term.enPronunciation || term.en}')" title="Listen">
                                <i class="fas fa-volume-up"></i>
                            </button>
                        </h3>
                        <p class="english-note">${term.en}</p>
                        <p>${this.getText(term.description)}</p>
                    </div>
                `).join('');
                return `
                    <div class="content-section">
                        <h2>${title}</h2>
                        ${terms}
                    </div>
                `;
            
            case 'table':
                const lang = this.state.lang;
                const headers = (section.headers[lang] || section.headers.ar).map(h => `<th>${h}</th>`).join('');
                const rows = section.rows.map(row => `
                    <tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>
                `).join('');
                return `
                    <div class="content-section">
                        <h2>${title}</h2>
                        <table class="data-table">
                            <thead><tr>${headers}</tr></thead>
                            <tbody>${rows}</tbody>
                        </table>
                    </div>
                `;
            
            case 'bones':
                const bones = section.bones.map(bone => `
                    <div class="bone-card">
                        ${bone.image ? `<img src="${bone.image}" alt="${this.getText({ ar: bone.ar, en: bone.en })}" class="bone-card-image" loading="lazy">` : ''}
                        <div class="bone-card-body">
                            <span class="bone-card-count">${bone.count}</span>
                            <h3>
                                ${bone.icon || ''} ${this.state.lang === 'ar' ? bone.ar : bone.en}
                                <button class="audio-btn" onclick="app.speak('${bone.en}')" title="Listen">
                                    <i class="fas fa-volume-up"></i>
                                </button>
                            </h3>
                            <h4>${this.state.lang === 'ar' ? bone.en : bone.ar}</h4>
                            <ul>
                                ${bone.points.map(p => `<li>${this.getText(p)}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('');
                return `
                    <div class="content-section">
                        <h2>${title}</h2>
                        <div class="bone-cards">${bones}</div>
                    </div>
                `;
            
            default:
                return '';
        }
    },

    // ============================================
    // Quiz
    // ============================================
    renderQuiz(courseId, lectureId) {
        const lecture = this.getLecture(courseId, lectureId);
        if (!lecture.quiz || lecture.quiz.length === 0) {
            return `
                <div class="empty-state">
                    <i class="fas fa-clipboard-check"></i>
                    <h3>${this.state.lang === 'ar' ? 'لا يوجد اختبار لهذه المحاضرة' : 'No quiz for this lecture'}</h3>
                </div>
            `;
        }
        
        const key = `${courseId}-${lectureId}`;
        const state = this.state.quizState[key];
        
        if (state.finished) {
            return this.renderQuizResult(courseId, lectureId);
        }
        
        const question = lecture.quiz[state.currentQuestion];
        const progress = ((state.currentQuestion) / lecture.quiz.length) * 100;
        const letters = ['A', 'B', 'C', 'D', 'E'];
        const lang = this.state.lang;
        
        return `
            <div class="quiz-container">
                <div class="quiz-progress">
                    <span>${lang === 'ar' ? 'السؤال' : 'Question'} ${state.currentQuestion + 1} ${lang === 'ar' ? 'من' : 'of'} ${lecture.quiz.length}</span>
                    <div class="progress-bar"><div class="progress-fill" style="width: ${progress}%"></div></div>
                    <span>${Math.round(progress)}%</span>
                </div>
                <div class="quiz-question">${this.getText(question.question)}</div>
                <div class="quiz-options">
                    ${question.options.map((opt, index) => `
                        <button class="quiz-option ${state.answered && index === question.correct ? 'correct' : ''} ${state.answered && index === state.selectedAnswer && index !== question.correct ? 'wrong' : ''}" 
                                onclick="app.answerQuiz('${courseId}', '${lectureId}', ${index})" 
                                ${state.answered ? 'disabled' : ''}>
                            <span class="quiz-option-letter">${letters[index]}</span>
                            <span>${this.getText(opt)}</span>
                        </button>
                    `).join('')}
                </div>
                ${state.answered ? `
                    <div style="text-align: center; margin-top: 1.5rem;">
                        <button class="btn btn-primary" onclick="app.nextQuiz('${courseId}', '${lectureId}')">
                            ${state.currentQuestion + 1 < lecture.quiz.length 
                                ? (lang === 'ar' ? 'السؤال التالي' : 'Next Question')
                                : (lang === 'ar' ? 'عرض النتيجة' : 'Show Results')}
                            <i class="fas fa-arrow-${lang === 'ar' ? 'left' : 'right'}"></i>
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
    },

    answerQuiz(courseId, lectureId, answerIndex) {
        const key = `${courseId}-${lectureId}`;
        const state = this.state.quizState[key];
        if (state.answered) return;
        
        const lecture = this.getLecture(courseId, lectureId);
        const question = lecture.quiz[state.currentQuestion];
        
        state.answered = true;
        state.selectedAnswer = answerIndex;
        
        if (answerIndex === question.correct) {
            state.score++;
            this.showToast(this.state.lang === 'ar' ? 'إجابة صحيحة! ✅' : 'Correct! ✅', 'success');
        } else {
            this.showToast(this.state.lang === 'ar' ? 'إجابة خاطئة، حاول مرة أخرى' : 'Wrong answer, try again', 'error');
        }
        
        this.renderLecture(courseId, lectureId, 'quiz');
    },

    nextQuiz(courseId, lectureId) {
        const key = `${courseId}-${lectureId}`;
        const state = this.state.quizState[key];
        const lecture = this.getLecture(courseId, lectureId);
        
        state.currentQuestion++;
        state.answered = false;
        state.selectedAnswer = null;
        
        if (state.currentQuestion >= lecture.quiz.length) {
            state.finished = true;
        }
        
        this.renderLecture(courseId, lectureId, 'quiz');
    },

    renderQuizResult(courseId, lectureId) {
        const key = `${courseId}-${lectureId}`;
        const state = this.state.quizState[key];
        const lecture = this.getLecture(courseId, lectureId);
        const total = lecture.quiz.length;
        const percentage = Math.round((state.score / total) * 100);
        const lang = this.state.lang;
        
        let message = '';
        if (percentage >= 80) message = lang === 'ar' ? 'ممتاز! 🎉' : 'Excellent! 🎉';
        else if (percentage >= 60) message = lang === 'ar' ? 'جيد! 👍' : 'Good! 👍';
        else message = lang === 'ar' ? 'استمر بالمراجعة 📚' : 'Keep reviewing 📚';
        
        return `
            <div class="quiz-container">
                <div class="quiz-result">
                    <h3>${message}</h3>
                    <div class="score">${state.score}/${total}</div>
                    <p>${percentage}% ${lang === 'ar' ? 'من الإجابات صحيحة' : 'correct answers'}</p>
                    <div style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                        <button class="btn btn-primary" onclick="app.resetQuiz('${courseId}', '${lectureId}')">
                            <i class="fas fa-redo"></i> ${lang === 'ar' ? 'إعادة الاختبار' : 'Retry Quiz'}
                        </button>
                        <button class="btn btn-secondary" onclick="app.renderLecture('${courseId}', '${lectureId}', 'content')">
                            <i class="fas fa-book"></i> ${lang === 'ar' ? 'مراجعة المحتوى' : 'Review Content'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    resetQuiz(courseId, lectureId) {
        const key = `${courseId}-${lectureId}`;
        this.state.quizState[key] = {
            currentQuestion: 0,
            score: 0,
            answered: false,
            finished: false
        };
        this.renderLecture(courseId, lectureId, 'quiz');
    },

    // ============================================
    // Summary
    // ============================================
    renderSummary(summary, inline = false) {
        if (!summary) return '';
        const items = summary.items.map(item => `
            <div class="summary-item">
                <div class="icon">${item.icon}</div>
                <h4>${this.getText(item.title)}</h4>
                <p>${this.getText(item.value)}</p>
            </div>
        `).join('');
        
        return `
            <div class="${inline ? '' : 'container section'}">
                <div class="summary-card">
                    <h3 class="summary-title">
                        <i class="fas fa-star"></i>
                        ${this.getText(summary.title)}
                    </h3>
                    <p style="margin-bottom: 1.5rem; color: var(--text-medium);">${this.getText(summary.description)}</p>
                    <div class="summary-grid">${items}</div>
                </div>
            </div>
        `;
    },

    // ============================================
    // Language
    // ============================================
    toggleLang() {
        this.state.lang = this.state.lang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('platform-lang', this.state.lang);
        document.body.classList.toggle('ltr', this.state.lang === 'en');
        document.documentElement.dir = this.state.lang === 'ar' ? 'rtl' : 'ltr';
        
        // Re-render current view
        if (this.state.view === 'home') {
            this.renderHome();
        } else if (this.state.view === 'course' && this.state.courseId) {
            this.renderCourse(this.state.courseId);
        } else if (this.state.view === 'lecture' && this.state.courseId && this.state.lectureId) {
            // Extract active tab from hash
            const hash = window.location.hash.replace('#', '');
            const parts = hash.split('/');
            const tab = parts[3] || 'content';
            this.renderLecture(this.state.courseId, this.state.lectureId, tab);
        }
        
        this.showToast(this.state.lang === 'ar' ? 'تم تغيير اللغة إلى العربية' : 'Language changed to English', 'success');
    },

    // ============================================
    // Search
    // ============================================
    toggleSearch() {
        const searchBar = document.getElementById('search-bar');
        const app = document.getElementById('app');
        this.state.searchOpen = !this.state.searchOpen;
        
        if (this.state.searchOpen) {
            searchBar.classList.remove('hidden');
            app.classList.add('search-active');
            setTimeout(() => document.getElementById('search-input').focus(), 100);
        } else {
            searchBar.classList.add('hidden');
            app.classList.remove('search-active');
            document.getElementById('search-input').value = '';
            document.getElementById('search-results').innerHTML = '';
        }
    },

    handleSearch(query) {
        const resultsContainer = document.getElementById('search-results');
        if (!query.trim()) {
            resultsContainer.innerHTML = '';
            return;
        }
        
        const lang = this.state.lang;
        const lowerQuery = query.toLowerCase();
        const results = [];
        
        platformData.courses.forEach(course => {
            const courseTitle = this.getText(course.title).toLowerCase();
            const courseDesc = this.getText(course.description).toLowerCase();
            
            if (courseTitle.includes(lowerQuery) || courseDesc.includes(lowerQuery)) {
                results.push({
                    type: 'course',
                    courseId: course.id,
                    title: this.getText(course.title),
                    subtitle: this.getText(course.subtitle)
                });
            }
            
            course.lectures.forEach(lecture => {
                const lectureTitle = this.getText(lecture.title).toLowerCase();
                const topics = lecture.topics.map(t => this.getText(t).toLowerCase()).join(' ');
                
                if (lectureTitle.includes(lowerQuery) || topics.includes(lowerQuery)) {
                    results.push({
                        type: 'lecture',
                        courseId: course.id,
                        lectureId: lecture.id,
                        title: this.getText(lecture.title),
                        subtitle: this.getText(course.title)
                    });
                }
            });
        });
        
        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="empty-state" style="grid-column: 1/-1;">
                    <i class="fas fa-search"></i>
                    <h3>${lang === 'ar' ? 'لا توجد نتائج' : 'No results found'}</h3>
                    <p>${lang === 'ar' ? 'جرب كلمة بحث أخرى' : 'Try a different search term'}</p>
                </div>
            `;
            return;
        }
        
        resultsContainer.innerHTML = results.map(r => `
            <div class="lecture-card" onclick="app.${r.type === 'course' ? `renderCourse('${r.courseId}')` : `renderLecture('${r.courseId}', '${r.lectureId}', 'content')`}; app.toggleSearch();">
                <div class="lecture-title">${r.title}</div>
                <div class="lecture-title-en">${r.subtitle}</div>
                <div class="lecture-action">
                    <span>${lang === 'ar' ? (r.type === 'course' ? 'عرض الدورة' : 'عرض المحاضرة') : (r.type === 'course' ? 'View Course' : 'View Lecture')}</span>
                    <i class="fas fa-arrow-${lang === 'ar' ? 'left' : 'right'}"></i>
                </div>
            </div>
        `).join('');
    },

    // ============================================
    // Mobile Menu
    // ============================================
    toggleMenu() {
        const menu = document.getElementById('mobile-menu');
        this.state.menuOpen = !this.state.menuOpen;
        menu.classList.toggle('hidden', !this.state.menuOpen);
    },

    renderMenu() {
        const menu = document.getElementById('menu-courses');
        const lang = this.state.lang;
        
        menu.innerHTML = platformData.courses.map(course => `
            <div class="menu-course">
                <div class="menu-course-title" onclick="app.renderCourse('${course.id}'); app.toggleMenu();">
                    <i class="fas fa-book"></i> ${this.getText(course.title)}
                </div>
                ${course.lectures.map(lecture => `
                    <div class="menu-lecture" onclick="app.renderLecture('${course.id}', '${lecture.id}', 'content'); app.toggleMenu();">
                        <i class="fas fa-chevron-${lang === 'ar' ? 'left' : 'right'}"></i>
                        ${lecture.icon} ${this.getText(lecture.title)}
                    </div>
                `).join('')}
            </div>
        `).join('');
    },

    // ============================================
    // Audio
    // ============================================
    speak(text) {
        if (!window.speechSynthesis) {
            this.showToast(this.state.lang === 'ar' ? 'متصفحك لا يدعم النطق' : 'Your browser does not support speech', 'error');
            return;
        }
        
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        utterance.pitch = 1;
        
        utterance.onerror = () => {
            this.showToast(this.state.lang === 'ar' ? 'حدث خطأ في النطق' : 'Speech error', 'error');
        };
        
        window.speechSynthesis.speak(utterance);
        this.showToast(this.state.lang === 'ar' ? `جاري النطق: ${text}` : `Speaking: ${text}`, 'success');
    },

    // ============================================
    // Print
    // ============================================
    printCurrent() {
        window.print();
    },

    // ============================================
    // Toast Notifications
    // ============================================
    showToast(message, type = '') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
};

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
