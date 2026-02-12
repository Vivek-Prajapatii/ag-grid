import { AllCommunityModule } from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import { useEffect, useMemo, useState } from "react";
import { employeeColumns, employeeData } from "../../employee.config";

export default function AgGrid() {
  // Column Definitions
  const [colDefs] = useState(employeeColumns);

  // Row Data
  const [rowData] = useState(employeeData?.employees);
  const [loading, setLoading] = useState(true); 
  const modules = [AllCommunityModule];

  const defaultColDef = useMemo(() => {
    return {
      filter: "agTextColumnFilter",
      floatingFilter: true,
    };
  }, []);

  const rowSelection = {
    mode: "multiRow",
    headerCheckbox: true,
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);


  return (
    <AgGridProvider modules={modules}>
      <div style={{ height: "650px", width: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={15}
          paginationPageSizeSelector={[10, 15, 20]}
          rowSelection={rowSelection}
          loading={loading}
        />
      </div>
    </AgGridProvider>
  );
}
