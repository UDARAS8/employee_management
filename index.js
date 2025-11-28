import { serve } from "bun";
import { homeRoute } from "./routes/home.js";
import { getEmployees, addEmployee } from "./routes/employees.js";

serve({
  port: 3000,
  fetch(request) {
    const url = new URL(request.url);
    const method = request.method;

    // Home
    if (url.pathname === "/") return homeRoute();

    // GET employees with optional department filter
    if (url.pathname === "/employees" && method === "GET") {
      return getEmployees(request);
    }

    // POST employees
    if (url.pathname === "/employees" && method === "POST") {
      return addEmployee(request);
    }

    
  },
});