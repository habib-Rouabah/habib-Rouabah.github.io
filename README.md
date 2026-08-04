# Portfolio — Hadj Habib Rouabah

Personal portfolio website showcasing AI Engineering projects and experience.

## 🚀 Deployment on GitHub Pages

### Step 1: Create a GitHub repository
```bash
cd ~/Desktop/portfolio
git init
git add .
git commit -m "Initial portfolio commit"
```

### Step 2: Push to GitHub
```bash
# Create a repo named "hrouabah.github.io" on GitHub, then:
git remote add origin https://github.com/hrouabah/hrouabah.github.io.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repo **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / root
4. Save

Your portfolio will be live at: **https://hrouabah.github.io**

## 🔗 Add to LinkedIn

1. Go to your LinkedIn profile → **Edit intro** → **Contact info**
2. Add your website: `https://hrouabah.github.io`
3. In your **Featured** section, click **+ Add** → **Link** → paste the URL
4. Update your headline to include "Portfolio: hrouabah.github.io"

## 📝 Customization

- **Photo**: Replace `assets/profile.jpg` with your professional photo
- **Links**: Update GitHub/LinkedIn URLs in `index.html`
- **Content**: Edit text directly in `index.html`
- **Colors**: Modify CSS variables in `style.css` (`:root` section)

## 📁 Structure
```
portfolio/
├── index.html      # Main page
├── style.css       # Styles
├── script.js       # Interactions
├── assets/         # Images
│   └── profile.jpg # Your photo
└── README.md       # This file
```
