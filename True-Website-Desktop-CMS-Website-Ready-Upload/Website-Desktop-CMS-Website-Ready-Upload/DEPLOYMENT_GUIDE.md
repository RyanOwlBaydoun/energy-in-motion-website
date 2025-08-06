# 🚀 **DEPLOYMENT GUIDE**

## **📋 PRE-DEPLOYMENT CHECKLIST**

### **✅ Essential Requirements**

- [ ] **Node.js 18+** installed
- [ ] **npm or yarn** package manager
- [ ] **Sanity CMS account** with project access
- [ ] **Domain name** (optional but recommended)
- [ ] **Hosting platform** account (Vercel, Netlify, etc.)

### **✅ Environment Variables**

- [ ] **SANITY_API_TOKEN** with write permissions
- [ ] **NEXT_PUBLIC_SANITY_PROJECT_ID** configured
- [ ] **NEXT_PUBLIC_SANITY_DATASET** set to production

## **🎯 RECOMMENDED: VERCEL DEPLOYMENT**

### **Step 1: Prepare Your Code**

1. **Zip the package**:

   ```bash
   # In the Website-Desktop-CMS-Website-Ready-Upload directory
   zip -r energy-in-motion-website.zip .
   ```

2. **Or use Git** (recommended):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Energy In Motion Website"
   git branch -M main
   git remote add origin https://github.com/your-username/energy-in-motion-website.git
   git push -u origin main
   ```

### **Step 2: Deploy to Vercel**

1. **Go to**: https://vercel.com
2. **Sign up/Login** with GitHub, GitLab, or Bitbucket
3. **Click "New Project"**
4. **Import your repository** or upload the zip file
5. **Configure project**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (if using zip)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### **Step 3: Set Environment Variables**

1. **Go to Project Settings** → **Environment Variables**
2. **Add the following**:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=hy425cry
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_sanity_api_token_here
   ```
3. **Click "Save"**

### **Step 4: Deploy**

1. **Click "Deploy"**
2. **Wait for build** (2-5 minutes)
3. **Test the website** at the provided URL

## **🌐 ALTERNATIVE: NETLIFY DEPLOYMENT**

### **Step 1: Prepare for Netlify**

1. **Create `netlify.toml`** in the root:

   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

2. **Update `package.json`** scripts:
   ```json
   {
     "scripts": {
       "build": "next build",
       "export": "next export"
     }
   }
   ```

### **Step 2: Deploy to Netlify**

1. **Go to**: https://netlify.com
2. **Sign up/Login**
3. **Click "New site from Git"**
4. **Connect your repository**
5. **Configure build settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. **Set environment variables** in Netlify dashboard
7. **Deploy**

## **☁️ CLOUD HOSTING OPTIONS**

### **AWS Amplify**

1. **Go to AWS Amplify Console**
2. **Connect repository**
3. **Configure build settings**
4. **Set environment variables**
5. **Deploy**

### **DigitalOcean App Platform**

1. **Create new app**
2. **Connect Git repository**
3. **Select Node.js environment**
4. **Configure build settings**
5. **Deploy**

### **Google Cloud Run**

1. **Create Dockerfile**:
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```
2. **Build and deploy** to Cloud Run

## **🔧 POST-DEPLOYMENT SETUP**

### **Step 1: Verify Deployment**

1. **Test all pages** work correctly
2. **Check CMS access** at `/studio`
3. **Test booking system** functionality
4. **Verify responsive design** on mobile

### **Step 2: Configure Domain**

1. **Add custom domain** in hosting platform
2. **Configure DNS** records
3. **Set up SSL certificate** (automatic on most platforms)
4. **Test domain** access

### **Step 3: Set Up Monitoring**

1. **Enable error tracking** (Sentry, LogRocket)
2. **Set up analytics** (Google Analytics, Plausible)
3. **Configure uptime monitoring** (UptimeRobot, Pingdom)
4. **Set up backup** strategy

## **📊 PRODUCTION CHECKLIST**

### **✅ Performance**

- [ ] **Lighthouse score** > 90
- [ ] **Core Web Vitals** optimized
- [ ] **Image optimization** enabled
- [ ] **Code splitting** working

### **✅ Security**

- [ ] **HTTPS** enabled
- [ ] **Environment variables** secured
- [ ] **API routes** protected
- [ ] **CORS** configured

### **✅ SEO**

- [ ] **Meta tags** configured
- [ ] **Sitemap** generated
- [ ] **Robots.txt** set up
- [ ] **Structured data** implemented

### **✅ Functionality**

- [ ] **CMS** accessible and working
- [ ] **Booking system** functional
- [ ] **All pages** loading correctly
- [ ] **Forms** submitting properly

## **🔍 TROUBLESHOOTING**

### **Common Deployment Issues**

**Build Failures**

```bash
# Check Node.js version
node --version

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npx tsc --noEmit
```

**Environment Variables**

- Verify all required variables are set
- Check variable names match exactly
- Restart deployment after adding variables

**CMS Issues**

- Verify Sanity project ID is correct
- Check API token has proper permissions
- Test CMS access locally first

**Performance Issues**

- Enable Next.js optimization
- Optimize images and assets
- Use CDN for static files

## **📞 SUPPORT**

### **Deployment Support**

- **Vercel**: Excellent Next.js support
- **Netlify**: Good documentation and support
- **AWS**: Enterprise-level support
- **Community**: Stack Overflow, GitHub issues

### **Emergency Contacts**

- **Technical Issues**: Check hosting platform support
- **CMS Issues**: Sanity support documentation
- **Domain Issues**: Domain registrar support

---

## **🎉 SUCCESS!**

Your Energy In Motion website is now live and ready for your clients!

**Next Steps:**

1. **Train your team** on CMS usage
2. **Set up content workflows**
3. **Monitor performance** and analytics
4. **Plan future updates** and features

**🎯 Website is production-ready!**
