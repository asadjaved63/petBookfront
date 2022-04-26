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
import PetDataService from "../../../services/pet.service";
const List = () => {
  let navigate = useNavigate();
  const [visible, setVisible] = useState(false)
  const [petdata, setPetdata] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [filteredData, setFilteredData] = useState(petdata);
  useEffect(() => {
    checkUserRole()
  }, []);


  const checkUserRole = () => {
    const userStr = sessionStorage.getItem('user');
  if (userStr){
    const user = JSON.parse(userStr);
    const{id,roles}=user;
      if(user.roles === 'admin'){
        retrievePets()
      }else{
        console.log(roles)
        retrievePetsByUsr(id)
      }

  }
}
  const retrievePetsByUsr = (id) => {
    PetDataService.getAllByUserId(id)
      .then(response => {
        setPetdata(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const retrievePets = () => {
    PetDataService.getAll()
      .then(response => {
        setPetdata(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const EditPet = (id) => {
    navigate({
      pathname: "/panel/pet/edit/" + id
    });
  }
  const deletePet = (id) => {
    PetDataService.delete(id)
      .then(response => {
        retrievePets()
      })
      .catch(e => {
        console.log(e);
      });
  }
  const SearchResult = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = petdata.filter((data) => {
      return data.cat_name.toLowerCase().search(value) != -1;
    });
    setFilteredData(result);
  }
  return (
    <CRow>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Pets</strong> <small>list</small>
            <Link to="/panel/pet/add">
              <CButton color="primary" className="float-end">
                Add New Pet
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
                  <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                  <CTableHeaderCell scope="col">User</CTableHeaderCell>
                  <CTableHeaderCell scope="col">image</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Opration</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {
                  petdata.map((item, i) =>
                    <CTableRow key={i}>
                      <CTableHeaderCell scope="row">{item.pet_id}</CTableHeaderCell>
                      <CTableDataCell>{item.pet_name}</CTableDataCell>
                      <CTableDataCell>{item.cat_name}</CTableDataCell>
                      <CTableDataCell>{item.username}</CTableDataCell>
                      <CTableDataCell><img width={100} src={require(`../../../assets/uploads/${item.pet_img_1}`)} /></CTableDataCell>
                      <CTableDataCell >
                        <span className="m-1" ><CIcon onClick={() => EditPet(item.pet_id)} icon={cilPencil} size="md" /></span>
                        <span className="m-1" ><CIcon onClick={() => deletePet(item.pet_id)} icon={cilTrash} size="md" /></span>
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
