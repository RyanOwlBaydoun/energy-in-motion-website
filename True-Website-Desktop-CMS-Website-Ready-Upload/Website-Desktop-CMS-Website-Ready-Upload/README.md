# 🎯 **Energy In Motion - Professional Website**

## **📋 PROJECT OVERVIEW**

This is a **complete, production-ready website** for Energy In Motion, featuring:

✅ **Full CMS Integration** - All content managed through Sanity CMS  
✅ **Dynamic Content** - Every page, section, and component is CMS-powered  
✅ **Booking System** - Functional appointment booking with CMS storage  
✅ **Responsive Design** - Mobile-first, modern UI with Tailwind CSS  
✅ **SEO Optimized** - Meta tags, structured data, and performance optimized  
✅ **TypeScript** - Type-safe, maintainable codebase

## **🚀 QUICK START**

### **Prerequisites**

- Node.js 18+
- npm or yarn
- Sanity CMS account

### **Installation**

1. **Extract the package** to your desired location
2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the root directory:

   ```env
   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=hy425cry
   NEXT_PUBLIC_SANITY_DATASET=production

   # Required for writing data (bookings, etc.)
   SANITY_API_TOKEN=your_sanity_api_token_here
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser**: `http://localhost:3000`

## **📁 PROJECT STRUCTURE**

```
Website-Desktop-CMS-Website-Ready-Upload/
├── app/                          # Next.js 14 App Router
│   ├── page.tsx                  # Home page
│   ├── about/                    # About pages
│   ├── coaching/                 # Coaching pages
│   ├── training/                 # Training pages
│   ├── e-motion/                 # E-Motion pages
│   ├── assessments/              # Assessment pages
│   ├── api/                      # API routes (bookings)
│   └── studio/                   # Sanity Studio
├── components/                   # React components
│   ├── *CMS.tsx                 # CMS-powered components
│   └── *.tsx                    # Static components
├── public/                       # Static assets
│   └── images/                   # Images and media
├── utils/                        # Utility functions
├── types/                        # TypeScript types
├── energy-in-motion/             # CMS schemas
│   └── schemaTypes/              # Sanity content types
└── sanity.config.ts             # Sanity configuration
```

## **🎨 FEATURES**

### **CMS-Powered Content**

- **Home Page**: Hero, services, programs, testimonials, insights
- **About Pages**: Company info, team, mission/vision
- **Service Pages**: Coaching, training, e-motion programs
- **Assessment Pages**: Professional assessments
- **Dynamic Content**: All text, images, and links managed via CMS

### **Booking System**

- **Functional Forms**: Appointment booking on all pages
- **CMS Storage**: All bookings saved to Sanity CMS
- **Status Tracking**: New → Confirmed → Completed → Cancelled
- **Source Tracking**: Which page booking came from

### **Modern Design**

- **Responsive**: Mobile-first design
- **Accessible**: WCAG compliant
- **Performance**: Optimized images and code splitting
- **SEO**: Meta tags, structured data, sitemap

## **🔧 CMS MANAGEMENT**

### **Accessing the CMS**

1. **Development**: `http://localhost:3000/studio`
2. **Production**: `https://your-domain.com/studio`

### **Content Types Available**

- **Home Main Page**: Complete home page content
- **About Main Page**: About page content
- **Sarah Main Page**: Sarah's personal page
- **Coaching Main Page**: Coaching services
- **Training Main Page**: Training programs
- **E-Motion Main Page**: E-Motion programs
- **Assessment Main Page**: Assessment services
- **Booking**: Appointment submissions
- **Testimonials**: Client testimonials
- **Training Courses**: Individual training courses
- **Coaching Programs**: Individual coaching programs
- **E-Motion Programs**: Individual e-motion programs
- **Assessments**: Individual assessments

## **📊 BOOKING SYSTEM**

### **How It Works**

1. **User fills form** on any page
2. **Data validated** and sent to API
3. **Stored in CMS** with status tracking
4. **Admin notified** via CMS dashboard

### **Managing Bookings**

1. **Access CMS**: `http://localhost:3000/studio`
2. **Go to "Booking" section**
3. **View all submissions** with details
4. **Update status** as needed
5. **Add admin notes** for internal communication

## **🚀 DEPLOYMENT**

### **Vercel (Recommended)**

1. **Connect repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on push

### **Other Platforms**

- **Netlify**: Compatible with Next.js
- **AWS**: Use Amplify or custom setup
- **DigitalOcean**: App Platform support

### **Environment Variables Required**

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=hy425cry
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_api_token_here
```

## **🔍 TROUBLESHOOTING**

### **Common Issues**

**Booking System Not Working**

- Check if `SANITY_API_TOKEN` is set
- Verify token has write permissions
- Restart development server

**CMS Not Loading**

- Check internet connection
- Verify Sanity project ID
- Clear browser cache

**Build Errors**

- Run `npm install` to ensure dependencies
- Check Node.js version (18+ required)
- Clear `.next` cache: `rm -rf .next`

## **📞 SUPPORT**

### **Technical Support**

- **Documentation**: Check this README first
- **Issues**: Review troubleshooting section
- **CMS Issues**: Check Sanity documentation

### **Client Support**

- **Content Updates**: Use CMS at `/studio`
- **New Features**: Contact development team
- **Training**: Schedule CMS training session

## **🎯 NEXT STEPS**

### **For Client**

1. **Review content** in CMS
2. **Customize branding** if needed
3. **Set up email notifications** (optional)
4. **Train team** on CMS usage

### **For Developer**

1. **Deploy to production**
2. **Set up monitoring**
3. **Configure backups**
4. **Performance optimization**

---

## **✅ DELIVERY CHECKLIST**

- [x] **Complete website** with all pages
- [x] **CMS integration** fully functional
- [x] **Booking system** working
- [x] **Responsive design** tested
- [x] **SEO optimization** implemented
- [x] **Performance optimization** completed
- [x] **Documentation** provided
- [x] **Environment setup** configured

**🎉 Website is ready for production!**
