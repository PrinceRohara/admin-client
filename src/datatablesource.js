export const userColumns = [
  // { field: "id", headerName: "ID", width: 70 },
  {
    field: "salonname",
    headerName: "Salon Name",
    width: 400, //230
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "address",
    headerName: "Salon Address",
    width: 330,
  },

  {
    field: "excel",
    headerName: "Excel Sheet",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const serviceColumns = [
  // { field: "id", headerName: "ID", width: 70 },
  {
    field: "typename",
    headerName: "Type Name",
    width: 400, //230
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.username}
        </div>
      );
    },
  },

  {
    field: "Type",
    headerName: "Type",
    width: 150,
  },
  {
    field: "Tax",
    headerName: "Tax",
    width: 150,
  },
];
//temporary data
export const userRows = [
  {
    id: 1,
    username: "Test Salon",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    address: "delhi",
    excel: "Booking",
  },
  {
    id: 2,
    salonname: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    address: "delhi",
    status: "passive",
    excel: "Booking",
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    address: "delhi",
    status: "pending",
    excel: "Booking",
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    address: "delhi",
    status: "active",
    excel: "Booking",
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    excel: "Booking",
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    address: "delhi",
    status: "active",
    excel: "Booking",
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    address: "delhi",
    status: "passive",
    excel: "Booking",
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    address: "delhi",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    address: "705 sector 5, delhi",
    status: "pending",
    excel: "Booking",
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    address: "delhi",
    status: "active",
    excel: "Booking",
  },
];

export const services = [
  {
    id: 1,
    salonname: "Test Salon",

    type: "Digital",
    tax: "",
  },
  {
    id: 2,
    salonname: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    address: "delhi",
    status: "passive",
    excel: "Booking",
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    address: "delhi",
    status: "pending",
    excel: "Booking",
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    address: "delhi",
    status: "active",
    excel: "Booking",
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    excel: "Booking",
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    address: "delhi",
    status: "active",
    excel: "Booking",
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    address: "delhi",
    status: "passive",
    excel: "Booking",
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    address: "delhi",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    address: "705 sector 5, delhi",
    status: "pending",
    excel: "Booking",
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    address: "delhi",
    status: "active",
    excel: "Booking",
  },
];

export const bookings = [
  {
    field: "id",
    headerName: "Appointment Id",
    width: 170,
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
  },

  {
    field: "name",
    headerName: "Costomer",
    width: 170,
  },
  {
    field: "shopname",
    headerName: "Shop Name",
    width: 170,
  },
  {
    field: "paymentstatus",
    headerName: "Payment Status",
    width: 160,
  },
  {
    field: "bookingstatus",
    headerName: "Booking Status",
    width: 150,
  },
  {
    field: "total",
    headerName: "Total",
    width: 150,
  },
];

export const bookingsData = [
  {
    id: 5454545664461,
    date: "jan 3 2023",

    name: "Govind",
    shopname: "Cuttind edge salon",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
  {
    id: 545442361661,
    date: "jan 3 2023",

    name: "Govind",
    shopname: "Cuttind edge salon",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
  {
    id: 616965986266,
    date: "jan 3 2023",

    name: "Govind",
    shopname: "Cuttind edge salon",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
  {
    id: 545454522663331661,
    date: "jan 3 2023",

    name: "Govind",
    shopname: "Cuttind edge salon",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
  {
    id: 545454261661,
    date: "jan 3 2023",

    name: "Govind",
    shopname: "Cuttind edge salon",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
  {
    id: 54544661661,
    date: "jan 3 2023",

    name: "Govind",
    shopname: "Cuttind edge salon",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
  {
    id: 545451661,
    date: "jan 3 2023",

    name: "Govind",
    shopname: "Cuttind edge salon",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
  {
    id: 546661661,
    date: "jan 3 2023",

    name: "Govind",
    shopname: "Cuttind edge salon",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
  {
    id: 54545456631661,
    date: "jan 3 2023",

    name: "Govind",
    shopname: "Cuttind edge salon",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
  {
    id: 54545451515661,
    date: "jan 3 2023",

    name: "Govind",
    shopname: "Cuttind edge salon",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
];

export const cancelledData = [
  {
    id: 5454545661661,
    date: "jan 3 2023",

    name: "mahesh babu",
    shopname: "Cuttind edge salon",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
  {
    id: 5454545661661,
    date: "jan 3 2023",

    name: "jackie",
    shopname: "Cuttind edge salon",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
  {
    id: 5454545661661,
    date: "jan 3 2023",

    name: "Govind",
    shopname: "Cuttind edge salon",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
  {
    id: 5454545661661,
    date: "jan 3 2023",

    name: "Govind",
    shopname: "Cuttind edge salon",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
  {
    id: 5454545661661,
    date: "jan 3 2023",

    name: "Govind",
    shopname: "Cuttind edge salon",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
  {
    id: 5454545661661,
    date: "jan 3 2023",

    name: "Govind",
    shopname: "Cuttind edge salon",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
  {
    id: 9455566661,
    date: "jan 3 2023",

    name: "tom",
    shopname: "Cuttind edge salon",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
  {
    id: 5454545661661,
    date: "jan 3 2023",

    name: "Govind",
    shopname: "jackie",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
  {
    id: 5454545661661,
    date: "jan 3 2023",

    name: "Govind",
    shopname: "Cuttind edge salon",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
  {
    id: 5454545661661,
    date: "jan 3 2023",

    name: "Govind",
    shopname: "Cuttind edge salon",
    paymentstatus: "Full Charged",
    bookingstatus: "Expired",
    total: "235.5",
  },
];
