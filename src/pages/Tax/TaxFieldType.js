export const taxType = [
  {
    field: "tax_name",
    headerName: "Name",
    width: 270,
  },
  {
    field: "tax_type",
    headerName: "Type",
    width: 170,
  },

  {
    field: "created",
    headerName: "CreatedOn",
    width: 440,
    valueGetter: (params) =>
      `${new Date(params.row.created).toLocaleDateString()} `,
  },
  {
    field: "tax_rate",
    headerName: "Rate",
    width: 170,
  },
];
