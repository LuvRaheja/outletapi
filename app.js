const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Define a route to serve the outlet details form
app.get('/getoutletform', (req, res) => {
  res.json({
    form: {
      outletName: {
        label: "Outlet Name",
        type: "text",
        required: true,
        placeholder: "Enter Outlet Name"
    //   },
    //   outletAddress: {
    //     label: "Outlet Address",
    //     type: "text",
    //     required: true,
    //     placeholder: "Enter Outlet Address"
    //   },
    //   outletID: {
    //     label: "Outlet ID",
    //     type: "text",
    //     required: true,
    //     placeholder: "Enter Outlet ID"
       }
    }
  });
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});