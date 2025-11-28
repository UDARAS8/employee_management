const employees = [
  { name: "Udara", email: "udara@maya.lk", department: "development" },
  { name: "Nipuni", email: "nipuni@maya.lk", department: "development" },
  { name: "Udara", email: "udara@maya.lk", department: "design" }
];

// GET /employees
export async function getEmployees(request) {
  const url = new URL(request.url);
  const department = url.searchParams.get("department");

  let filtered = employees;

  if (department) {
    filtered = employees.filter(e => e.department === department);
  }

  return Response.json({ employees: filtered });
}

// POST /employees
export async function addEmployee(request) {
  const body = await request.json();

  console.log("New Employee Created:", body);

  return Response.json({
    status: "Successful",
    message: "record saved successfully"
  });
}
