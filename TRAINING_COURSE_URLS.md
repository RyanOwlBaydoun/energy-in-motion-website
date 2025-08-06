# 🔗 ALL TRAINING COURSE URLs FOR TESTING

## 📋 **INDIVIDUAL COURSE PAGE URLs**

Copy-paste these URLs to test each training course page:

### **Main Training Page**

```
http://localhost:3000/training
```

### **Individual Course Pages (/training/[slug])**

1. **Mastering EQ (Levels 1 & 2)**

   ```
   http://localhost:3000/training/mastering-eq-levels-1-2
   ```

2. **Self-Confidence & Leadership**

   ```
   http://localhost:3000/training/self-confidence-leadership
   ```

3. **Empathy & Leadership**

   ```
   http://localhost:3000/training/empathy-leadership
   ```

4. **Smart Heart (Healthcare EQ)**

   ```
   http://localhost:3000/training/smart-heart-healthcare-eq
   ```

5. **Speak Up: Public Speaking**

   ```
   http://localhost:3000/training/speak-up-public-speaking
   ```

6. **Beauty & Beyond (Women Empowerment)**

   ```
   http://localhost:3000/training/beauty-beyond-women-empowerment
   ```

7. **Confidence Catalyst**

   ```
   http://localhost:3000/training/confidence-catalyst
   ```

8. **The Power of We (Team Building)**

   ```
   http://localhost:3000/training/power-of-we-team-building
   ```

9. **Teamwork & Leadership**

   ```
   http://localhost:3000/training/teamwork-leadership
   ```

10. **Problem Solving & Decision Making**

    ```
    http://localhost:3000/training/problem-solving-decision-making
    ```

11. **Communication Skills**
    ```
    http://localhost:3000/training/communication-skills
    ```

### **Testing URLs**

```
http://localhost:3000/test-cms
http://localhost:3000/api/training-courses
```

---

## 🧪 **TESTING PROCESS**

### **After Adding Each Course in Sanity:**

1. **Visit Test Page**: `http://localhost:3000/test-cms`
2. **Click "Fetch Sanity Data"** → Course count should increase
3. **Test Individual Page**: Visit the specific `/training/[slug]` URL
4. **Check Main Training Page**: `http://localhost:3000/training` → Should show new course

### **What Should Happen:**

- ✅ Course appears in sidebar
- ✅ Individual course page loads with CMS content
- ✅ Main training page shows updated course list
- ✅ All dynamic content working

---

## 📊 **CURRENT STATUS CHECK**

**Before adding courses** - Test these URLs:

- Only "OUga Bouga" should appear in sidebar
- Only 1 course in test-cms page

**After adding each course**:

- Course count increases
- New courses appear in sidebar
- Individual URLs work with CMS content

---

## 🎯 **QUICK TEST COMMANDS**

```bash
# Test API directly
start http://localhost:3000/api/training-courses

# Test CMS integration
start http://localhost:3000/test-cms

# Test main training page
start http://localhost:3000/training

# Test specific course (after adding to CMS)
start http://localhost:3000/training/mastering-eq-levels-1-2
```
