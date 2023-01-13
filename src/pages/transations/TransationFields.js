export const TransationFields = [
  {
    field: "trans_id",
    headerName: "Transaction Id",
    width: 170,
  },
  {
    field: "order_id",
    headerName: "Booking no",
    width: 150,
  },
  {
    field: "customer",
    headerName: "Customer Name",
    width: 190,
  },
  {
    field: "shop_name",
    headerName: "Shop Name",
    width: 150,
  },
  {
    field: "payment_mode",
    headerName: "Mode of Payment",
    width: 150,
  },

  {
    field: "created",
    headerName: "Date",
    width: 160,
    valueGetter: (params) =>
      `${new Date(params.row.created).toLocaleDateString("en-US")}`,
  },

  {
    field: "total_paid",
    headerName: "Total Paid",
    width: 130,
  },
];
