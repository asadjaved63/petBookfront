import React, { useState, useEffect, lazy } from 'react'
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
  CFormInput, CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilDrop,
  cilPencil,
  cilTrash
} from '@coreui/icons'
import { cilList, cilShieldAlt } from '@coreui/icons';
import { Link, useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import CategoriesDataService from "../../../services/categories.service";
const List = () => {
  let navigate = useNavigate();
  const [visible, setVisible] = useState(false)
  const [catgoriesdata, setCatgoriesdata] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [filteredData, setFilteredData] = useState(catgoriesdata);
  useEffect(() => {
    retrieveCatgories();
  }, []);

  const retrieveCatgories = () => {
    CategoriesDataService.getAll()
      .then(response => {
        setCatgoriesdata(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const EditCategory = (id) => {
    navigate({
      pathname: "/panel/category/edit/"+id
    });
  }
  const deleteCategory = (id) => {
    CategoriesDataService.delete(id)
    .then(response => {
      retrieveCatgories()
    })
    .catch(e => {
      console.log(e);
    });
  }
  const SearchResult = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = catgoriesdata.filter((data) => {
      return data.cat_name.toLowerCase().search(value) != -1;
    });
    setFilteredData(result);
  }
  return (
    <CRow>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Categories</strong> <small>list</small>
            <Link to="/panel/category/add">
              <CButton color="primary" className="float-end">
                Add New Category
              </CButton>
            </Link>
          </CCardHeader>
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
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">image</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {
                  catgoriesdata.map((item, i) =>
                    <CTableRow key={i}>
                      <CTableHeaderCell scope="row">{item.cat_id}</CTableHeaderCell>
                      <CTableDataCell>{item.cat_name}</CTableDataCell>
                      <CTableDataCell><img width={100} src={require(`../../../assets/uploads/${item.cat_img}`)} /></CTableDataCell>
                      <CTableDataCell >
                        <span className="m-1" ><CIcon onClick={()=>EditCategory(item.cat_id)} icon={cilPencil} size="md"/></span>
                        <span className="m-1" ><CIcon onClick={()=>deleteCategory(item.cat_id)} icon={cilTrash} size="md"/></span>
                      </CTableDataCell>
                    </CTableRow>
                  )
                }
              </CTableBody>
            </CTable>

          </CCardBody>
        </CCard>
      </CCol>

    </CRow>
  )
}

export default List
