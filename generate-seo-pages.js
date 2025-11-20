import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Функция для парсинга YAML frontmatter
function parseFrontmatter(content) {
    const metadata = {};
    
    if (content.startsWith('---')) {
        const endIndex = content.indexOf('---', 3);
        if (endIndex !== -1) {
            const frontmatter = content.slice(3, endIndex);
            
            frontmatter.split('\n').forEach(line => {
                const [key, ...valueParts] = line.split(':');
                if (key && valueParts.length > 0) {
                    const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
                    if (key.trim() === 'title') metadata.title = value;
                    if (key.trim() === 'keywords') metadata.keywords = value;
                    if (key.trim() === 'description') metadata.description = value;
                }
            });
        }
    }
    
    return metadata;
}

// Функция для генерации SEO HTML
function generateSEOHTML(slug, metadata) {
    const template = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8" />
    
    <!-- Основные мета-теги -->
    <title>${metadata.title || 'Статья'} | Lama.School</title>
    <meta name="description" content="${metadata.description || 'Статья о искусственном интеллекте'}" />
    ${metadata.keywords ? `<meta name="keywords" content="${metadata.keywords}" />` : ''}
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://lama.school/articles/${slug}" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${metadata.title || 'Статья'}" />
    <meta property="og:description" content="${metadata.description || 'Статья о искусственном интеллекте'}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://lama.school/articles/${slug}" />
    <meta property="og:site_name" content="Lama.School" />
    <meta property="og:image" content="https://lama.school/image/${slug}.webp" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${metadata.title || 'Статья'}" />
    <meta name="twitter:description" content="${(metadata.description || 'Статья о искусственном интеллекте').substring(0, 160)}" />
    <meta name="twitter:image" content="https://lama.school/image/${slug}.webp" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="theme-color" content="#F56C07" />
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Lama.School" />
    
    <style>
        body { 
            margin: 0; 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            background: #f8f9fa;
            text-align: center;
            padding: 50px 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        h1 {
            color: #333;
            margin-bottom: 20px;
        }
        p {
            color: #666;
            line-height: 1.6;
            margin-bottom: 15px;
        }
        img {
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            margin: 20px 0;
        }
        a {
            color: #F56C07;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
    
    <!-- Автоматическое перенаправление на React приложение -->
    <script>
        // Перенаправляем на главную страницу через 2 секунды
        setTimeout(() => {
            window.location.href = '/';
        }, 2000);
    </script>
</head>
<body>
    <div class="container">
        <h1>${metadata.title || 'Статья'}</h1>
        <p>${metadata.description || 'Статья о искусственном интеллекте'}</p>
        <img src="/image/${slug}.webp" alt="${metadata.title || 'Картинка статьи'}" />
        <p><a href="/">← Перейти на главную страницу Lama.School</a></p>
        <p><em>Перенаправление на полную статью...</em></p>
    </div>
    
    <noscript>
        <div style="padding: 20px; background: #fff; border-radius: 8px; margin-top: 20px;">
            <p><strong>Для просмотра полной статьи необходимо включить JavaScript.</strong></p>
            <p><a href="/">← Вернуться на главную</a></p>
        </div>
    </noscript>
</body>
</html>`;
    
    return template;
}

// Функция для загрузки списка статей из JSON
function loadArticlesList() {
    try {
        const articlesListPath = path.join(__dirname, 'public', 'data', 'articlesList.json');
        if (fs.existsSync(articlesListPath)) {
            const content = fs.readFileSync(articlesListPath, 'utf-8');
            return JSON.parse(content);
        }
        return [];
    } catch (error) {
        console.error('Ошибка загрузки списка статей:', error);
        return [];
    }
}

// Основная функция генерации
function generateSEOPages() {
    console.log('🚀 Генерация SEO страниц...');
    
    const contentDir = path.join(__dirname, 'public', 'content');
    const articlesDir = path.join(__dirname, 'public', 'articles');
    const dataDir = path.join(__dirname, 'dist', 'data');
    
    // Создаем папки если их нет
    if (!fs.existsSync(articlesDir)) {
        fs.mkdirSync(articlesDir, { recursive: true });
    }
    
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Читаем все .md файлы
    const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));
    
    console.log(`📝 Найдено ${files.length} статей`);
    
    files.forEach(file => {
        const slug = path.basename(file, '.md');
        const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
        const metadata = parseFrontmatter(content);
        
        const htmlContent = generateSEOHTML(slug, metadata);
        const htmlPath = path.join(articlesDir, `${slug}.html`);
        
        fs.writeFileSync(htmlPath, htmlContent);
        console.log(`✅ Создан: articles/${slug}.html - "${metadata.title || 'Без заголовка'}"`);
    });
    
    // Создаем index.html для /articles
    const articlesIndexHTML = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8" />
    <title>Статьи | Lama.School</title>
    <meta name="description" content="Мы подготовили интересные и полезные статьи о искусственном интеллекте для школьников" />
    <link rel="canonical" href="https://lama.school/articles" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="Статьи | Lama.School" />
    <meta property="og:description" content="Мы подготовили интересные и полезные статьи о искусственном интеллекте для школьников" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://lama.school/articles" />
    <meta property="og:site_name" content="Lama.School" />
    <meta property="og:image" content="https://lama.school/image/1.webp" />
    
    <!-- Мгновенное перенаправление на React приложение -->
    <script>
        window.location.href = '/';
    </script>
</head>
<body>
    <div style="text-align: center; padding: 50px;">
        <h1>Статьи</h1>
        <p>Перенаправление на страницу статей...</p>
        <p><a href="/">Если перенаправление не работает, нажмите здесь</a></p>
    </div>
</body>
</html>`;
    
    fs.writeFileSync(path.join(articlesDir, 'index.html'), articlesIndexHTML);
    console.log('✅ Создан: articles/index.html');
    
    // Копируем articlesList.json в dist для редактирования
    const sourceJsonPath = path.join(__dirname, 'public', 'data', 'articlesList.json');
    const distJsonPath = path.join(dataDir, 'articlesList.json');
    
    if (fs.existsSync(sourceJsonPath)) {
        fs.copyFileSync(sourceJsonPath, distJsonPath);
        console.log('✅ Скопирован: dist/data/articlesList.json');
    }
    
    console.log('🎯 Генерация завершена!');
}

// Запускаем генерацию
if (import.meta.url === `file://${process.argv[1]}`) {
    generateSEOPages();
}

export { generateSEOPages };
