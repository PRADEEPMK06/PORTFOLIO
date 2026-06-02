# Deployment Guide

This guide provides step-by-step instructions to deploy your portfolio to various platforms.

## 🚀 Deploy to Render (Recommended)

### Step 1: Prepare Your Repository
- Ensure all code is committed and pushed to GitHub
- No uncommitted changes in the repository

### Step 2: Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with your GitHub account
3. Authorize Render to access your repositories

### Step 3: Create a New Web Service
1. Click "New +" → "Web Service"
2. Select your portfolio repository
3. Configure the following:

| Setting | Value |
|---------|-------|
| **Name** | portfolio (or your preferred name) |
| **Environment** | Node |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` |
| **Node Version** | 18.17.0 (or higher) |

### Step 4: Configure Environment Variables
If needed, add any environment variables:
- Click "Environment" in the dashboard
- Add variables (refer to `.env.example`)

### Step 5: Deploy
- Click "Create Web Service"
- Render will automatically build and deploy your site
- Your portfolio will be live at: `https://your-service-name.onrender.com`

### Step 6: Custom Domain (Optional)
1. Go to "Settings" → "Custom Domain"
2. Add your domain (e.g., `portfolio.com`)
3. Follow DNS configuration instructions
4. Wait for SSL certificate to be issued

---

## 📦 Deploy to Vercel (Alternative)

### Quick Deploy
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel auto-detects Next.js and configures everything
4. Click "Deploy"

**Benefits:** Free tier with better performance, automatic previews for PRs

---

## 🐳 Deploy to Docker (Advanced)

Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application
COPY . .

# Build Next.js
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## ✅ Pre-Deployment Checklist

- [ ] All code committed and pushed
- [ ] `npm run build` runs successfully locally
- [ ] No console errors or warnings
- [ ] `npm run lint` passes
- [ ] Environment variables documented in `.env.example`
- [ ] Images optimized and properly placed in `/public`
- [ ] Contact form (if any) configured properly
- [ ] Links and navigation working correctly
- [ ] Mobile responsive design verified
- [ ] Meta tags and SEO optimized

---

## 🔍 Post-Deployment Testing

After deployment:
1. **Functionality** - Test all links, forms, and interactions
2. **Performance** - Check using [PageSpeed Insights](https://pagespeed.web.dev/)
3. **SEO** - Verify meta tags with tools like [SEO Checker](https://seochecker.com/)
4. **Mobile** - Test on various devices and screen sizes
5. **Accessibility** - Run through [WAVE](https://wave.webaim.org/)

---

## 🆘 Troubleshooting

### Build Fails
- Check Node version compatibility
- Verify all dependencies in `package.json`
- Run `npm install` locally to ensure no missing packages

### Site Shows Blank Page
- Check browser console for errors
- Verify build command was successful
- Check environment variables are set correctly

### Performance Issues
- Optimize images in `/public`
- Enable Render's automatic optimization
- Check network tab for large assets
- Use Next.js Analytics

### Custom Domain Not Working
- Verify DNS records are correctly configured
- Wait for DNS propagation (up to 48 hours)
- Check SSL certificate status
- Ensure CNAME/A records match platform requirements

---

## 📞 Support

- **Render Support:** [help.render.com](https://help.render.com)
- **Next.js Documentation:** [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Repository:** [your-repo-url]

---

**Deployment successful? Share your portfolio link and celebrate! 🎉**
