import React, {useState, useEffect, lazy} from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormInput
} from '@coreui/react'


const List = () => {
  const [visible, setVisible] = useState(false)
  const [userdata, setUserData] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [filteredData,setFilteredData] = useState(userdata);
  const [userId,setUserId] = useState('');
  const SearchResult = (event)=>{
    let value = event.target.value.toLowerCase();
    let result = [];
    result = userdata.filter((data) => {
      return data.name.toLowerCase().search(value) != -1;
    });
    setFilteredData(result);
  }
  return (
    <CRow>
     
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
          <CTable caption="top" striped className="tblClickable">
          <CTableCaption><CFormInput
                type="text"
                size="sm"
                placeholder="Search"
                aria-label="sm input example"
                onKeyUp={e => (SearchResult(e))}
              /></CTableCaption>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                    <CTableDataCell>Mark</CTableDataCell>
                    <CTableDataCell>Otto</CTableDataCell>
                    <CTableDataCell>@mdo</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                    <CTableDataCell>Jacob</CTableDataCell>
                    <CTableDataCell>Thornton</CTableDataCell>
                    <CTableDataCell>@fat</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                    <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                    <CTableDataCell>@twitter</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
          
          </CCardBody>
        </CCard>
      </CCol>
    
    </CRow>
  )
}

export default List
