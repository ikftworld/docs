export default [
  {
    type: "file",
    input: "./apis/tenant.yaml",
    path: "/docs/tenant",
    categories: [{ label: "Admin", tags: ["Tenant"] }],
  },
  {
    type: "file",
    input: "./apis/customer.yaml",
    path: "/docs/customer",
    categories: [{ label: "Ledger", tags: ["Customer"] }],
  },
]
