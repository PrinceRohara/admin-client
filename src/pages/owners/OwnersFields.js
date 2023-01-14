export const OwnersFields = [
  // { field: "id", valueGetter: (params) => `${params.row.contact_no}` },
  {
    field: "fullName",
    headerName: "Full Name",
    width: 250,
    valueGetter: (params) =>
      `${params.row.first_name || ""} ${params.row.last_name}`,
  },
  // {
  //   field: "first_name",
  //   headerName: "Name",
  //   width: 220,
  // },
  // {
  //   field: "last_name",
  //   headerName: "last name",
  //   width: 180,
  // },
  {
    field: "email",
    headerName: "Email",
    width: 280,
  },
  {
    field: "is_active",
    headerName: "Status",
    width: 210,
    valueGetter: (params) =>
      `${params.row.is_active ? "REGISTERED" : "NOT REGISTERED"}`,
  },

  {
    field: "created_on",
    headerName: "Registration Date",
    width: 210,
    valueGetter: (params) =>
      `${new Date(params.row.created_on).toLocaleDateString()}`,
  },

  {
    field: "action",
    headerName: "Action",
    width: 210,
  },
];
