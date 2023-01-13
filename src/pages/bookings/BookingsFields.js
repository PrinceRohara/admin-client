export const bookingsFields = [
  {
    field: "order_id",
    headerName: "Appointment Id",
    width: 120,
    valueGetter: (params) => `${params.row.order_id.replace("SPA000-", "")}`,
  },
  {
    field: "created",
    headerName: "Date",
    width: 120,
    valueGetter: (params) =>
      `${new Date(params.row.created).toLocaleDateString("en-US")}`,
  },

  {
    field: "customer",
    headerName: "Costomer",
    width: 160,
  },
  {
    field: "shop_name",
    headerName: "Shop Name",
    width: 180,
  },
  {
    field: "payment_status",
    headerName: "Payment Status",
    width: 150,
  },
  {
    field: "booking_status",
    headerName: "Booking Status",
    width: 130,
  },
  {
    field: "order_amount",
    headerName: "Total",
    width: 110,
  },
];
