import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExcelDataComponent = () => {

const [excelData, setExcelData] = useState([]);

useEffect(() =>{
    const fetchData = async () =>{
        try{
            const response = await axios.get('http://localhost:3001/datos')
            setExcelData(response.data);
        }catch (error){
            console.error('Error fetching Excel data', error);
        }
    };

    fetchData();
},[]);

return (
    <div>
      <h1>Excel Data</h1>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Tipo de Transacción</th>
            <th>Número de Cliente</th>
            {/* Aquí puedes añadir más encabezados según tus datos */}
          </tr>
        </thead>
        <tbody>
          {excelData.map((dataItem) => (
            <tr key={dataItem.id}>
              <td>{dataItem.FECHA}</td>
              <td>{dataItem['TIPO DE TRANSACCION']}</td>
              <td>{dataItem['NRO. DEL CLIENTE']}</td>
              {/* Aquí puedes añadir más celdas según tus datos */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExcelDataComponent;