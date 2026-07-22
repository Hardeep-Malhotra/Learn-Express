# 🚀 Learn-Express — Complete Express.js Practical Reference

A comprehensive, example-driven repository that documents and demonstrate's **almost every core method, property, middleware, router utility, request & response helper provided by Express.js**.

This repository acts as a **hands-on reference book** to understand how Express works internally — beyond building CRUD apps.

💡 **Learn Express by running and reading real examples — function by function.**

---

## 🧭 What This Repository Helps You Master
![Learn-Express](https://iq.opengenus.org/content/images/2019/08/Add-a-subheading--2-.png)
![Learn-Express](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes/mvc_express.png)

- Error handling patterns (**sync, async, custom, default**)  
- All major **app.\*** application methods  
- Built-in **express.\*** middlewares  
- Deep dive into **req (Request) object**  
- Deep dive into **res (Response) object**  
- Router methods and routing patterns  
- Middleware types and execution flow  
- JWT authentication with middleware  
- Session expiry logic  
- Route parameters handling  

---

## ❗ Error Handling in Express (Complete Coverage)

You implemented examples for:

- Synchronous error handling  
- Asynchronous error handling  
- Custom error-handling middleware  
- Default Express error handler  
- Using `next(err)` correctly  

This section builds a **strong mental model** of Express error flow.

---

## ⚙️ Express Application Methods — `app.*`

Practical files demonstrating:

- `app.all()`  
- `app.delete()`  
- `app.enable()` / `app.disable()`  
- `app.engine()`  
- `app.locals`  
- `app.param()`  
- `app.path()`  
- Mount events and behaviors  

Covers **rarely discussed methods** most developers never explore.

---

## 🧩 Built-in Express Middlewares — `express.*`

Examples for:

- `express.json()`  
- `express.urlencoded()`  
- `express.raw()`  
- `express.text()`  
- `express.static()`  
- `express.Router()`  

This builds clarity on **how request body parsing actually works**.

---

## 📥 Deep Dive — Request Object (`req`)

Runnable examples for nearly every property:

- `req.body`, `req.params`, `req.query`  
- `req.cookies`, `req.signedCookies`  
- `req.ip`, `req.ips`  
- `req.path`, `req.originalUrl`, `req.baseUrl`  
- `req.protocol`, `req.secure`  
- `req.get()`, `req.is()`  
- `req.xhr`, `req.fresh`, `req.stale`  
- `req.accepts*()` family  

This is **advanced Express knowledge**, covering request flow in depth.

---

## 📤 Deep Dive — Response Object (`res`)

Examples include:

- `res.cookie()`  
- `res.download()`  
- `res.redirect()`  
- `res.sendFile()`  
- `res.format()`  
- `res.links()`  
- `res.location()`  
- Headers & status helpers  
- `res.locals`  

Covers how the server **actually sends responses in different formats**.

---

## 🛣️ Router Methods — `router.*`

- `router.use()`  
- `router.METHOD()`  
- `router.param()`  
- `router.route()`  
- `router.all()`  

Clear understanding of **modular routing** in Express apps.

---

## 🧠 Middleware in Express

Dedicated examples showing:

- Application-level middleware  
- Router-level middleware  
- Error middleware  
- Built-in middleware  
- Custom middleware  

Covers **execution order and real use cases**.

---

## 🔐 JWT Authentication Example

Practical implementation of **JWT authentication** using middleware and a user model, showing **how protected routes are built**.

---

## ⏳ Session Expiry Logic

Example showing how to **expire Express session after inactivity**.

---

## 🎯 Purpose of This Repository

This repo serves as:

- 📘 Express.js **revision notebook**  
- 🧪 Experiment ground for every Express feature  
- 🧠 Deep understanding of **request-response lifecycle**  
- 🛠️ **Interview preparation material**  
- 📚 **Practical reference** instead of theory  

---

## ▶️ How to Use This Repo

```bash
npm install
node <filename>.js
Steps:

Open any topic folder

Run the example .js file

Read the corresponding .txt explanation

💡 Tip: Always run examples to understand real behavior of Express features.

🧠 Who Is This For?
Beginners learning Express

Developers revising Express deeply

Students preparing for backend interviews

Anyone wanting clarity on Express internals

⭐ Why This Repo Is Unique
Most tutorials teach how to build apps.
This repository teaches how Express actually works under the hood — method by method, property by property.

📂 Project Structure — Learn-Express (In-Depth)
Learn-Express/
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── public/
│   └── image.png
├── Error Handling in Express/
│   ├── Asynchronous_Error_Handling.js
│   ├── Custom Error-Handling Middleware.js
│   ├── Default_Error_Handler.js
│   ├── Handling Errors with next(err).js
│   ├── Synchronous Error Handling.js
│   └── Introduction to Error Handling in Express.txt
├── Expire Express.js Session After 1 Minute of Inactivity/
│   └── Expire Express.js Session.js
├── Express Applications Function/
│   ├── Express.js app.delete().js
│   ├── Express.js Mount Event.js
│   ├── Express.js app.all() Funciton.js
│   ├── Express.js app.disable().js
│   ├── Express.js app.disabled().js
│   ├── Express.js app.enable().js
│   ├── Express.js app.enabled().js
│   ├── Express.js app.engine().js
│   ├── Express.js app.locals Property.js
│   ├── Express.js app.method().js
│   ├── Express.js app.mountpath.js
│   └── Express.js app.param().js
├── Express Functions/
│   ├── Express.js express.raw() .js
│   ├── ExpressJS express.json().js
│   ├── express.Router().js
│   ├── express.static() .JS
│   ├── express.text().js
│   └── express.urlencoded() .js
├── Express Requests Function/
│   └── (All req.* examples and corresponding .txt files)
├── Express Response Function/
│   └── (All res.* examples and corresponding .txt files)
├── Express Router Function/
│   └── (All router.* examples and corresponding .txt files)
├── Handle Route Parameters in Express/
│   └── (Route parameters examples)
├── Implement JWT Authentication in Express App/
│   ├── JWT_Authentication.js
│   ├── userModel.js
│   └── Introduction To Implement JWT Authentication in Express App.txt
├── Middleware in Express/
│   ├── All_Types_Of_Middleware_In_Express.js
│   └── Introduction to Middleware in Express.js.txt
└── Routing in Express.js/
    ├── 01_understand_Routing.js
    ├── HowRountingWorks.txt
    └── Types_of_Routes.js
👨‍💻 Author
Hardeep Singh
Backend Developer | MERN Stack Learner | Express.js Explorer

