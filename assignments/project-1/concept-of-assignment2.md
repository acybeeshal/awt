### **1. Prisma ORM**

**What I did:**

* Defined a model (`Quote`) in `schema.prisma`
* Used `prisma.generate()` to create client functions
* Used `prisma.quote.findMany()` and `quote.create()` to fetch and add data

**Thought process:**

I learned that Prisma helps connect to MongoDB using a JavaScript-friendly syntax. Instead of writing raw queries, I can use Prisma methods. This made my backend code shorter and cleaner.

---

### **2. MongoDB vs SQL**

**What I did:**

* Used MongoDB as my database
* Noted that it doesn't need structured tables like SQL

**Thought process:**

MongoDB stores data in flexible JSON-like documents, so it's great for APIs. Prisma helped manage this non-relational database more easily. Compared to SQL (which needs fixed tables and relations), MongoDB was faster to set up for this project.

---

### **3. Express Routing**

**What I did:**

* Created `GET /api/quotes` to fetch all quotes
* Created `POST /api/quotes` to add new quotes

**Thought process:**

I learned how routes handle requests from the frontend. `GET` sends data, `POST` receives data. Express makes it easy to manage both. Middleware like `express.json()` helped parse incoming JSON bodies from fetch requests.

---

### **4. JSON API**

**What I did:**

* Sent and received data in JSON format between backend and frontend
* Used `res.json()` and `fetch().then(res => res.json())`

**Thought process:**

JSON is the standard for web APIs. It's human-readable and works naturally with JavaScript. I used it to return all quotes to the frontend and receive new ones via POST. JSON helped keep things consistent across client-server.

---

### **5. Fetch() API (Frontend)**

**What I did:**

* Used `fetch('/api/quotes')` to get quote list
* Used `fetch(..., {method: 'POST', body: JSON.stringify()})` to submit new data

**Thought process:**

I used fetch to connect my HTML with the backend. It was asynchronous, so I used `async/await`. After fetching the quotes, I looped through them and added them to the page dynamically. This showed me how frontend and backend can stay in sync without page reloads.

---


---
