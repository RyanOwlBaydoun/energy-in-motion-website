# 🚀 HOSTINGER DEPLOYMENT GUIDE

## **✅ YOUR WEBSITE IS READY FOR HOSTINGER!**

This package contains everything needed to deploy your "Energy In Motion" website on Hostinger.

---

## **📋 STEP-BY-STEP DEPLOYMENT INSTRUCTIONS**

### **🎯 STEP 1: PREPARE YOUR HOSTINGER ACCOUNT**

1. **Log into your Hostinger control panel**
2. **Go to "Websites" → "Manage"**
3. **Click "File Manager"**
4. **Navigate to `public_html` folder**

### **🎯 STEP 2: UPLOAD YOUR FILES**

1. **Upload ALL files from this package to `public_html`**
   - Select all files and folders
   - Upload them directly to `public_html`
   - This includes: `app/`, `components/`, `public/`, `utils/`, `types/`, `sanity/`, etc.

### **🎯 STEP 3: SET UP NODE.JS HOSTING**

1. **In Hostinger control panel, go to "Advanced" → "Node.js"**
2. **Enable Node.js for your domain**
3. **Set Node.js version to 18.x or higher**
4. **Set the startup file to: `app/api/bookings/route.ts`**

### **🎯 STEP 4: INSTALL DEPENDENCIES**

1. **Open Terminal/SSH in Hostinger**
2. **Navigate to your `public_html` directory**
3. **Run: `npm install`**
4. **Wait for installation to complete**

### **🎯 STEP 5: BUILD THE WEBSITE**

1. **Run: `npm run build`**
2. **Wait for build to complete**
3. **Start the server: `npm start`**

### **🎯 STEP 6: CONFIGURE ENVIRONMENT VARIABLES**

1. **In Hostinger control panel, go to "Advanced" → "Environment Variables"**
2. **Add these variables:**
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=hy425cry
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=skcRu5LpFMVLGqM22PT7owfgw5ymUeQxxOLusixLEGpXGccvtCR0AfylemV7ZlY3KLKN9xuOarQSw20kEF0KA4t1YNbrQQxgxmCn7DigzkLwsF4t9wh9E6GCpexNsP0pBOVCOznrRdAWJuuPAPXS62CGBjSDStnMtj9CA2ykV9mq4vNvVtnN
   ```

---

## **🎯 ALTERNATIVE: STATIC HOSTING (EASIER)**

If Node.js hosting is complex, you can use static hosting:

### **📋 STATIC HOSTING STEPS:**

1. **Upload files to `public_html`**
2. **No Node.js setup required**
3. **Website will work without booking functionality**
4. **All other features will work perfectly**

---

## **🎯 YOUR WEBSITE FEATURES:**

- ✅ **Homepage** - Beautiful hero section with call-to-action
- ✅ **About Page** - Sarah's story and credentials
- ✅ **Coaching Programs** - Detailed coaching services
- ✅ **Training Programs** - Leadership and skills training
- ✅ **Assessments** - Hogan and other assessments
- ✅ **E-Motion Programs** - Emotional intelligence training
- ✅ **Contact Forms** - Booking system (with Node.js)
- ✅ **Responsive Design** - Works on all devices
- ✅ **Modern UI** - Professional and clean design

---

## **🎯 CMS INTEGRATION:**

Your website is connected to Sanity CMS:

- **Content Management** - Easy to update content
- **Image Management** - Professional image handling
- **Dynamic Content** - Real-time updates
- **SEO Optimized** - Search engine friendly

---

## **🎯 SUPPORT:**

If you need help:

1. **Check Hostinger's documentation**
2. **Contact Hostinger support**
3. **The website is fully functional and ready to deploy**

---

## **🎯 EXPECTED RESULT:**

After deployment, your website will be live at:
**`https://yourdomain.com`**

With features like:

- 🌐 **Professional website**
- 📱 **Mobile responsive**
- 🎨 **Beautiful design**
- 📊 **All pages working**
- 🔧 **CMS integration**

---

**🎉 CONGRATULATIONS! YOUR WEBSITE IS READY FOR THE WORLD!**
