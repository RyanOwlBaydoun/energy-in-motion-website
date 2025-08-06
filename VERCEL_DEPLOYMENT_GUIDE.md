# 🚀 **COMPLETE VERCEL DEPLOYMENT GUIDE**

## **📋 PREREQUISITES**

1. **GitHub Account** (free) - [Sign up here](https://github.com)
2. **Vercel Account** (free) - [Sign up here](https://vercel.com)
3. **Your website files** (already ready!)

---

## **🎯 STEP 1: CREATE GITHUB REPOSITORY**

### **1.1 Go to GitHub**

- Visit [github.com](https://github.com)
- Sign in to your account

### **1.2 Create New Repository**

- Click the **"+"** button in the top right
- Select **"New repository"**
- Repository name: `energy-in-motion-website`
- Description: `Energy In Motion - Professional Coaching Website`
- Make it **Public** (free)
- **Don't** initialize with README (we already have files)
- Click **"Create repository"**

### **1.3 Upload Your Code**

After creating the repository, GitHub will show you commands. Use these:

```bash
# In your local project directory (where you are now)
git remote add origin https://github.com/YOUR_USERNAME/energy-in-motion-website.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

---

## **🎯 STEP 2: SET UP VERCEL**

### **2.1 Sign Up for Vercel**

- Visit [vercel.com](https://vercel.com)
- Click **"Sign Up"**
- Choose **"Continue with GitHub"**
- Authorize Vercel to access your GitHub account

### **2.2 Import Your Project**

- Click **"New Project"**
- Find your `energy-in-motion-website` repository
- Click **"Import"**

### **2.3 Configure Project Settings**

- **Project Name**: `energy-in-motion-website` (or your preferred name)
- **Framework Preset**: `Next.js` (should auto-detect)
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (should auto-detect)
- **Output Directory**: `.next` (should auto-detect)
- **Install Command**: `npm install` (should auto-detect)

### **2.4 Environment Variables**

**IMPORTANT**: Add these environment variables in Vercel:

1. Click **"Environment Variables"** section
2. Add these variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID = hy425cry
NEXT_PUBLIC_SANITY_DATASET = production
SANITY_API_TOKEN = skcRu5LpFMVLGqM22PT7owfgw5ymUeQxxOLusixLEGpXGccvtCR0AfylemV7ZlY3KLKN9xuOarQSw20kEF0KA4t1YNbrQQxgxmCn7DigzkLwsF4t9wh9E6GCpexNsP0pBOVCOznrRdAWJuuPAPXS62CGBjSDStnMtj9CA2ykV9mq4vNvVtnN
```

3. Click **"Add"** for each variable
4. Make sure they're set for **Production**, **Preview**, and **Development**

### **2.5 Deploy**

- Click **"Deploy"**
- Wait for the build to complete (usually 2-5 minutes)

---

## **🎯 STEP 3: CONFIGURE CUSTOM DOMAIN (OPTIONAL)**

### **3.1 Add Your Domain**

- In your Vercel dashboard, go to your project
- Click **"Settings"** tab
- Click **"Domains"** in the left sidebar
- Click **"Add Domain"**
- Enter your domain (e.g., `yourdomain.com`)
- Follow the DNS configuration instructions

### **3.2 DNS Configuration**

If you have a domain, you'll need to update your DNS settings:

**For Hostinger:**

1. Go to Hostinger control panel
2. Navigate to **"Domains"** → **"Manage"**
3. Click **"DNS"** tab
4. Add these records:

```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
TTL: 3600
```

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

---

## **🎯 STEP 4: VERIFY DEPLOYMENT**

### **4.1 Check Your Website**

- Your website will be available at: `https://your-project-name.vercel.app`
- Test all pages and functionality
- Check that the booking form works
- Verify all images load correctly

### **4.2 Test Booking System**

1. Go to any page with the booking form
2. Fill out the form
3. Submit it
4. Check that you get a success message
5. Verify the booking appears in your Sanity CMS

---

## **🎯 STEP 5: AUTOMATIC DEPLOYMENTS**

### **5.1 How It Works**

- Every time you push changes to GitHub, Vercel automatically deploys
- You get a new URL for each deployment
- Production deployments go to your main URL

### **5.2 Making Updates**

1. Make changes to your code locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```
3. Vercel automatically builds and deploys
4. Your website updates in 2-5 minutes

---

## **🎯 STEP 6: MONITORING & ANALYTICS**

### **6.1 Vercel Analytics**

- Go to your project dashboard
- Click **"Analytics"** tab
- View page views, performance, and user data

### **6.2 Performance Monitoring**

- Vercel automatically monitors your site performance
- You'll get alerts if something goes wrong
- Check the **"Functions"** tab for API performance

---

## **🎯 TROUBLESHOOTING**

### **Common Issues:**

**1. Build Fails**

- Check the build logs in Vercel
- Make sure all dependencies are in `package.json`
- Verify environment variables are set correctly

**2. Environment Variables Not Working**

- Make sure they're set for all environments (Production, Preview, Development)
- Check that the variable names match exactly
- Redeploy after adding variables

**3. Images Not Loading**

- Make sure all images are in the `public` folder
- Check that image paths are correct
- Verify file permissions

**4. Booking Form Not Working**

- Check that `SANITY_API_TOKEN` is set correctly
- Verify the API route is working
- Check browser console for errors

---

## **🎯 NEXT STEPS**

### **1. SEO Optimization**

- Add meta tags to your pages
- Set up Google Analytics
- Submit your sitemap to search engines

### **2. Performance Optimization**

- Optimize images
- Enable caching
- Monitor Core Web Vitals

### **3. Security**

- Set up HTTPS (automatic with Vercel)
- Regular security updates
- Monitor for vulnerabilities

---

## **🎯 SUPPORT**

### **Vercel Support**

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [Vercel Support](https://vercel.com/support)

### **GitHub Support**

- [GitHub Documentation](https://docs.github.com)
- [GitHub Community](https://github.com/orgs/community/discussions)

---

## **🎯 SUCCESS CHECKLIST**

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Environment variables configured
- [ ] Website deployed successfully
- [ ] All pages working correctly
- [ ] Booking form functional
- [ ] Images loading properly
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Analytics set up
- [ ] Performance optimized

---

**🎉 Congratulations! Your website is now live and ready for the world!**
