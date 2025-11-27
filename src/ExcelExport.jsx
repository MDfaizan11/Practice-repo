import React, { useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";

const ExcelExport = () => {
  const tableRef = useRef(null);

  const data = [
    { name: "John", age: 28, city: "New York" },
    { name: "Jane", age: 34, city: "Los Angeles" },
  ];

  return (
    <div className="p-4">
      <DownloadTableExcel
        filename="UserData"
        sheet="users"
        currentTableRef={tableRef.current}
      >
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Export to Excel
        </button>
      </DownloadTableExcel>

      <table ref={tableRef} className="mt-4 border-collapse w-full">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td className="border p-2">{row.name}</td>
              <td className="border p-2">{row.age}</td>
              <td className="border p-2">{row.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExcelExport;
