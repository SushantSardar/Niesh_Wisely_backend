const CallModel = require("../../models/callModel");
const pdfMake = require("pdfmake/build/pdfmake");
const vfsFonts = require("pdfmake/build/vfs_fonts");

// Load the PDFMake fonts
pdfMake.vfs = vfsFonts.pdfMake.vfs;

const generatePDF = (data, productName, res) => {
  const content = [];

  content.push({
    image:
      "data:image/jpeg;base64,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",
    width: 200, // adjust the width as needed
  });
  // content.push({ text: 'Total P&L', style: 'subheader' });
  // content.push({ text: 'Accuracy', style: 'subheader' });
  // content.push({ text: 'Total calls', style: 'subheader' });
  const details = [
    "Niveshartha Private Limited",
    "Research Analyst",
    "Contact: +91 8884014014",
    "Reg Address: No. 576/B, 4th Floor, 6th Sector, HSR",
    "Layout, Bengaluru - 560068, Karnataka, India",
    "SEBI Registration No.: INH000010919",
    "CIN No: U74140KA2022PTC159121",
    "Website: www.niveshartha.com",
  ];

  // Add details to the content on the right side

  //   content.push({ text: ` Product - ${productName}`, style: "subheader" });
  //   content.push("\n");

  const tableData = [];
  tableData.push([
    "Date",
    { text: "Script", width: 200 },
    "Deal Type",
    "Quantity",
    "Price",
    "Target",
    "Stop Loss",
    "Status",
    "P&L",
  ]);

  // Filter data where statusValue is not "Executed" and "Avoid"
  const filteredData = data.filter(
    ({ statusValue }) => statusValue !== "Executed" && statusValue !== "Avoid"
  );

  let totalCalls = 0;
  let targetHitCount = 0;
  let customizeCount = 0;
  let stopLossCount = 0;
  let totalPnl = 0;

  // Add filtered data with occurrence calculation
  filteredData.forEach(
    ({
      updatedAt,
      script,
      dealType,
      quantity,
      price1,
      target,
      stopLoss,
      statusValue,
      pnl,
    }) => {
      const formattedDate = updatedAt.toISOString().split("T")[0];
      tableData.push([
        formattedDate,
        script,
        dealType,
        quantity,
        price1,
        target,
        stopLoss,
        statusValue,
        pnl,
      ]);

      totalCalls++;
      totalPnl += pnl;

      // Calculate occurrences
      if (statusValue === "Target HIT" && pnl > 0) {
        targetHitCount++;
      } else if (statusValue === "Customize" && pnl > 0) {
        customizeCount++;
      } else if (statusValue === "Stop Loss" && pnl > 0) {
        stopLossCount++;
      }
    }
  );

  // content.push(`Total P&L: ${totalPnl}`);
  const accuracy =
    ((targetHitCount + customizeCount + stopLossCount) / totalCalls) * 100;

  const leftContent = [
    {
      image:
        "data:image/jpeg;base64,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",
      width: 200,
    },
    "\n",
    "\n",
    "\n",
    { text: `Product - ${productName}`, style: "subheader" },
    "\n",
    `Total P&L: ${totalPnl}`,
    "\n",
    `Accuracy: ${accuracy.toFixed(2)}%`,
    "\n",
    `Total calls: ${totalCalls}`,
  ];

  // Add calculated values to the content

  //   content.push(`Accuracy: ${accuracy.toFixed(2)}%`);
  //   content.push(`Total calls: ${totalCalls}`);
  //   content.push("\n");
  const combinedContent = [
    // Left column
    {
      width: "auto", // Adjust as needed
      columns: [
        { width: "*", text: leftContent },
        // Right column with details
        { width: "auto", text: details.join("\n"), alignment: "left" },
      ],
    },
  ];

  content.push(combinedContent);
  content.push("\n");
  content.push({
    table: {
      headerRows: 1,
      body: tableData,
    },
    layout: "lightHorizontalLines",
  });

  

  content.push("\n");
  content.push(
    `Compliance officer : Balram Jena , Contact : +91 8884014014 , Email : info@niveshartha.com​`
  );


  content.push("\n");
  content.push(
    `Standard warning : “Investment in securities market are subject to market risks. Read all the related documents carefully  before investing.”`
  );

  content.push("\n");
  content.push(
    `Disclaimer : “Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors”`
  );

  // Define styles for the PDF
  const styles = {
    header: {
      fontSize: 18,
      bold: true,
      margin: [0, 0, 0, 10],
    },
    subheader: {
      fontSize: 14,
      bold: true,
      margin: [0, 10, 0, 5],
    },
  };

  // Create the PDF document with landscape orientation
  const docDefinition = {
  
    content,
    styles,
    pageOrientation: "landscape", // Set the orientation to landscape
  
  };

  // Set the content type and headers for the response
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=${productName}_factsheet.pdf`
  );

  // Generate and send the PDF file
  pdfMake.createPdf(docDefinition).getBuffer((buffer) => {
    res.end(buffer);
    //res.json({ buffer, accuracy });
  });
};

const ShowFactSheetInAPP = async (req, res) => {
  try {
    // Fetch data from the database
    const { productName } = req.query;

    // console.log("productName",productName)
    const regex = new RegExp(productName, "i");

    // Construct the query to match records where the script contains the product name
    const query = productName ? { productName: { $regex: regex } } : {};
    // console.log("query",query)
    const data = await CallModel.find(
      query,
      "updatedAt script dealType quantity price1 target stopLoss statusValue pnl"
    );

    // Generate and send the PDF file
    generatePDF(data, productName, res);
  } catch (error) {
    console.error("Error fetching data from the database:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = ShowFactSheetInAPP;
