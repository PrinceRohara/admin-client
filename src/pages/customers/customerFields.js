export const customerFields = [
  {
    field: "fullName",
    headerName: "Name",
    width: 170,
    valueGetter: (params) =>
      `${params.row.first_name || ""} ${params.row.last_name || ""} `,
  },
  {
    field: "email",
    headerName: "email",
    width: 250,
  },

  {
    field: "registered_via",
    headerName: "Regd Via",
    width: 130,
  },

  {
    field: "mobile",
    headerName: "Contact ",
    width: 140,
  },
  {
    field: "date_joined",
    headerName: "Regd On",
    width: 140,
    valueGetter: (params) =>
      `${new Date(params.row.date_joined).toLocaleDateString("en-US")}`,
  },
  {
    field: "is_active",
    headerName: "Status",
    width: 120,
    valueGetter: (params) => `${params.row.is_active && `Active`}`,
  },
  {
    field: "order_count",
    headerName: "Booking Status",
    width: 130,
  },
];
