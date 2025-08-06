# 🎯 CMS Integration Testing Guide

## Phase 4 Complete: Training Course Prototype Ready! ✅

### 🏗️ What We've Built

1. **✅ Sanity CMS Setup**
   - Project ID: `hy425cry`
   - Dataset: `production`
   - Training Course schema created
   - Studio running at `http://localhost:3333`

2. **✅ Integration Layer**
   - Sanity client configured
   - GROQ queries for data fetching
   - TypeScript types with legacy compatibility
   - Migration scripts ready

3. **✅ Test Components**
   - `TestSanityCMSSection` for validation
   - Side-by-side comparison (legacy vs CMS)
   - Real-time testing capabilities

---

## 🧪 How to Test the Integration

### Step 1: Access Sanity Studio

```bash
# Studio should already be running at:
http://localhost:3333
```

### Step 2: Add Sample Training Courses

1. Open Sanity Studio
2. Click "Training Course"
3. Add a few sample courses:
   - **Title**: "Test Leadership Course"
   - **Slug**: "test-leadership-course"
   - **Description**: "A test course for CMS validation"
   - **Category**: "Training - Leadership"
   - Fill in other fields as desired

### Step 3: Test Data Fetching

```bash
# Run migration script (optional)
npx tsx scripts/test-migration.ts

# Or visit test page directly:
http://localhost:3000/test-cms
```
### Step 4: Validate Integration

- ✅ Check if CMS data appears
- ✅ Compare with legacy data structure
- ✅ Verify all fields are mapped correctly
- ✅ Test error handling
---

## 📊 Current Status

### ✅ Completed

- [x] Sanity project created (`hy425cry`)
- [x] Training course schema defined
- [x] Client configuration setup
- [x] Test components created
- [x] Migration scripts prepared
- [x] Legacy compatibility maintained

### 🔄 Ready for Testing

- [ ] Add sample data in Sanity Studio
- [ ] Run test-cms page validation
- [ ] Verify data fetching works
- [ ] Confirm type safety

### 📋 Next Steps (After Validation)

1. **Update Real Components**: Replace static imports with CMS calls
2. **Scale to Other Content**: Coaching, E-Motion, Assessments
3. **Add Testimonials & Blog**: Complete content management
4. **Production Deployment**: Environment variables & optimization

---

## 🛠️ Commands Reference

```bash
# Start main Next.js app
npm run dev

# Start Sanity Studio (in energy-in-motion folder)
cd energy-in-motion && npm run dev

# Run test migration
npx tsx scripts/test-migration.ts

# Run full migration (after validation)
npx tsx scripts/migrate-training-courses.ts
```

---

## 🔍 Troubleshooting

### If Sanity Studio won't start:

```bash
cd energy-in-motion
npm install --legacy-peer-deps
npm run dev
```

### If data doesn't appear:

1. Check Sanity Studio has content
2. Verify project ID in `.env.local`
3. Check browser console for errors
4. Confirm API permissions

### Environment Issues:

```bash
# Create .env.local with:
NEXT_PUBLIC_SANITY_PROJECT_ID=hy425cry
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-token-here
```

---

## 🎉 Success Criteria

**✅ Phase 4 Complete When:**

- Training courses display from Sanity CMS
- Data matches legacy format exactly
- No breaking changes to existing components
- Type safety maintained
- Performance is acceptable

**Ready for Phase 5:** Scale to entire website! 🚀

---

## 📞 Quick Test Checklist

- [ ] Sanity Studio accessible at `localhost:3333`
- [ ] Can create training courses in studio
- [ ] Test page loads at `/test-cms`
- [ ] "Fetch Sanity Data" button works
- [ ] Data appears in correct format
- [ ] No console errors
- [ ] Legacy data still works

**Once all boxes are checked, the prototype is successful!** ✨
