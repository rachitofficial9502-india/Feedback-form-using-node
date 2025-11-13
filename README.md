# 📝 Feedback Form Server (PBL Project #3)

A simple backend system built with **pure Node.js** (no Express) that accepts feedback from a form, sanitizes user input, stores the data in a file, and redirects the user back to the homepage.

This project teaches:
- How POST requests work  
- How to parse HTTP request bodies manually  
- How to sanitize user input  
- How to write to files  
- How to redirect users (302)  
- How to structure real backend routes  

---

## 🌟 Features

- 📩 Accepts form submissions via POST  
- 🔐 Sanitizes input to remove malicious HTML (prevents XSS)  
- 💾 Saves feedback to `feedback.txt`  
- 🔁 Redirects users back to the homepage after submitting  
- ⚙️ Serves static HTML/CSS files  
- 🚫 Returns proper 404 errors when a file doesn’t exist  
- 💡 Built without Express — fully manual routing + parsing  

---
