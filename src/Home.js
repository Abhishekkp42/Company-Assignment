import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useEffect, useState } from 'react';
import MissionPieChart from './PieChart';

function Home({ handleLogout }) {
    const [rowData, setRowData] = useState([]);

    // Column Definitions: Defines & controls grid columns.
    const [colDefs, setColDefs] = useState([
        { field: "company" },
        { field: "date" },
        { field: "location" },
        { field: "mission" },
        { field: "price" },
        { field: "rocket" },
        { field: "successful" },
        { field: "time" }
    ]);

    const getData = () => {
        fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setRowData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])

    console.log("xx", rowData)


    return (
        <div className="ag-theme-quartz" style={{ height: 400 }} >
            <button onClick={handleLogout}>Logout</button>
            <AgGridReact rowData={rowData} columnDefs={colDefs} />
            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
                <MissionPieChart data={rowData} />
            </div>

        </div >
    );
}

export default Home;
