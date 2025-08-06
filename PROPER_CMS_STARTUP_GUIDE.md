# 🎯 **PROPER CMS STARTUP GUIDE**

_Establishing Strong Foundation Habits_

## ✅ **CORRECT STARTUP SEQUENCE**

### **🧹 STEP 1: COMPLETE CLEANUP**

```bash
# Kill all Node processes
taskkill /F /IM node.exe

# Clear Next.js build cache (fixes bootstrap errors)
Remove-Item -Recurse -Force .next

# Navigate to root directory
cd C:\Users\ryann\my_code\Website_Development_Rasha\Energy_In_Motion\Energy_In_Motion_Website\Energy_In_Motion_Website
```

### **🚀 STEP 2: START NEXT.JS (MAIN WEBSITE)**

```bash
# From root directory
npm run dev

# IMPORTANT: Note the ACTUAL port in terminal output!
# Don't assume port 3000 - it might be 3001, 3002, etc.
```

### **🎨 STEP 3: START SANITY STUDIO (CMS)**

```bash
# CRITICAL: Start Sanity FROM energy-in-motion directory in separate window
start powershell -ArgumentList "-NoExit", "-Command", "cd energy-in-motion; npm run dev"

# This will run on http://localhost:3333
```

### **🔍 STEP 4: VERIFY PORTS**

```bash
# Check what ports are actually listening
netstat -an | findstr :3000
netstat -an | findstr :3001
netstat -an | findstr :3333
```

### **🌐 STEP 5: OPEN CORRECT URLS**

```bash
# Open URLs based on ACTUAL ports from terminal output
start http://localhost:[ACTUAL_NEXTJS_PORT]
start http://localhost:3333
```

---

## ❌ **COMMON MISTAKES TO AVOID**

### **🚨 MISTAKE 1: Wrong Directory for Sanity**

```bash
# WRONG:
npm run dev  # (from root directory for Sanity)

# CORRECT:
cd energy-in-motion
npm run dev
```

### **🚨 MISTAKE 2: Assuming Port Numbers**

```bash
# WRONG:
start http://localhost:3000  # (without checking actual port)

# CORRECT:
# Check terminal output first, then use actual port
start http://localhost:[ACTUAL_PORT]
```

### **🚨 MISTAKE 3: Not Clearing Cache**

```bash
# WRONG:
# Starting services with corrupted .next cache

# CORRECT:
Remove-Item -Recurse -Force .next  # Clear cache first
```

### **🚨 MISTAKE 4: Background Process Directory Reset**

```bash
# WRONG:
cd energy-in-motion
npm run dev  # (as background - directory context is lost!)

# CORRECT:
start powershell -ArgumentList "-NoExit", "-Command", "cd energy-in-motion; npm run dev"
# (cd and npm run dev in SAME command)
```

---

## 🎯 **VERIFICATION CHECKLIST**

### **✅ NEXT.JS WEBSITE:**

- [ ] No "missing bootstrap script" errors
- [ ] Homepage loads properly
- [ ] Training page shows all 12 courses
- [ ] Individual course pages work
- [ ] No hydration errors in console

### **✅ SANITY STUDIO:**

- [ ] localhost:3333 loads properly
- [ ] Can see "Training Course" in left sidebar
- [ ] Can view all 12 courses
- [ ] Can edit course content
- [ ] Can upload images
- [ ] Changes sync to website instantly

---

## 🚀 **DAILY WORKFLOW**

### **🌅 STARTING WORK:**

1. Kill all Node processes: `taskkill /F /IM node.exe`
2. Clear .next cache: `Remove-Item -Recurse -Force .next`
3. Start Next.js from root: `start powershell -ArgumentList "-NoExit", "-Command", "npm run dev"`
4. Start Sanity Studio: `start powershell -ArgumentList "-NoExit", "-Command", "cd energy-in-motion; npm run dev"`
5. Verify both services: Check ports 3000 and 3333
6. Open URLs: `start http://localhost:3000` and `start http://localhost:3333`

### **🌙 ENDING WORK:**

```bash
# Clean shutdown
taskkill /F /IM node.exe
```

---

## 🔧 **TROUBLESHOOTING**

### **🚨 "Missing Bootstrap Script" Error:**

```bash
# Solution:
taskkill /F /IM node.exe
Remove-Item -Recurse -Force .next
npm run dev
```

### **🚨 "localhost:3333 Can't Be Reached":**

```bash
# Solution: MUST start Sanity from energy-in-motion directory
start powershell -ArgumentList "-NoExit", "-Command", "cd energy-in-motion; npm run dev"

# CRITICAL: The cd and npm run dev must be in SAME command
# Background processes reset directory context!
```

### **🚨 "Port Already in Use":**

```bash
# Check what's using the port:
netstat -an | findstr :[PORT]

# Use the actual port Next.js chooses
```

---

## 🎊 **SUCCESS CRITERIA**

**✅ Strong Foundation Achieved When:**

- Both services start reliably every time
- No manual trial-and-error needed
- URLs open on correct ports automatically
- All CMS functionality works seamlessly
- Zero errors in browser console
- Content changes sync instantly

---

_This guide ensures consistent, professional CMS development workflow_ 🚀
