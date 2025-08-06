# 📝 **BOOKING SYSTEM SETUP GUIDE**

## **🔧 CURRENT ISSUE**

The booking form is showing "Failed to submit booking" because the Sanity API token is not configured.

## **✅ SOLUTION**

### **Step 1: Get Your Sanity API Token**

1. **Go to Sanity Management**: https://www.sanity.io/manage/project/hy425cry
2. **Navigate to API**: Click on "API" in the left sidebar
3. **Create Token**: Click "Add API token"
4. **Configure Token**:
   - **Name**: `Booking System Token`
   - **Role**: `Editor` (or `Writer` if available)
   - **Permissions**: Should include `create` and `write` permissions
5. **Copy Token**: Copy the generated token (starts with `sk...`)

### **Step 2: Create Environment File**

Create a file called `.env.local` in your project root with:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=hy425cry
NEXT_PUBLIC_SANITY_DATASET=production

# Required for writing data (bookings, etc.)
SANITY_API_TOKEN=sk_your_token_here
```

**Replace `sk_your_token_here` with your actual token from Step 1.**

### **Step 3: Restart Your Server**

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

### **Step 4: Test the Booking Form**

1. Go to any page with the booking form
2. Fill out the form with test data
3. Submit - you should see a success message
4. Check your CMS at `http://localhost:3000/studio` → "Booking" section

## **🔍 TROUBLESHOOTING**

### **If you still get errors:**

1. **Check Token Permissions**: Make sure your token has `create` and `write` permissions
2. **Verify Environment File**: Ensure `.env.local` is in the project root
3. **Restart Server**: Always restart after adding environment variables
4. **Check Console**: Look for specific error messages in the browser console

### **Common Issues:**

- **"Missing API token"**: You haven't created the `.env.local` file
- **"Unauthorized"**: Your token doesn't have write permissions
- **"Network error"**: Check your internet connection

## **📊 WHAT HAPPENS AFTER SETUP**

✅ **Form submissions** will be saved to your CMS  
✅ **Admin can view** all bookings in the CMS  
✅ **Status tracking** (New → Confirmed → Completed → Cancelled)  
✅ **Source tracking** (which page the booking came from)  
✅ **Email notifications** can be added later

## **🎯 NEXT STEPS**

Once the booking system is working:

1. **Test thoroughly** on all pages
2. **Set up email notifications** (optional)
3. **Configure admin notifications** (optional)
4. **Add booking management** features (optional)

---

**Need help?** Check the browser console for specific error messages and let me know what you see!
