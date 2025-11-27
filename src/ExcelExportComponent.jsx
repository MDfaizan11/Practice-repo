import React from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

const ExcelExportComponent = () => {
  // Sample data for the table
  const tableData = [
    { id: 1, name: "John Doe", age: 30, city: "New York" },
    { id: 2, name: "Jane Smith", age: 25, city: "Los Angeles" },
    { id: 3, name: "Bob Johnson", age: 35, city: "Chicago" },
  ];

  const exportToExcel = async () => {
    // Create a new workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");

    // Define columns
    worksheet.columns = [
      { header: "ID", key: "id", width: 10 },
      { header: "Name", key: "name", width: 20 },
      { header: "Age", key: "age", width: 10 },
      { header: "City", key: "city", width: 20 },
    ];

    // Add rows
    tableData.forEach((row) => {
      worksheet.addRow(row);
    });

    // Style the header
    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FF4CAF50" },
      };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });

    // Generate Excel file
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "table_data.xlsx");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Export Table to Excel</h2>
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-green-500 text-white">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Age</th>
            <th className="border border-gray-300 p-2">City</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td className="border border-gray-300 p-2">{row.id}</td>
              <td className="border border-gray-300 p-2">{row.name}</td>
              <td className="border border-gray-300 p-2">{row.age}</td>
              <td className="border border-gray-300 p-2">{row.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={exportToExcel}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Export to Excel
      </button>
    </div>
  );
};

export default ExcelExportComponent;
