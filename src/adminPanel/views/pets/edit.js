import React, { useEffect, useState } from 'react'
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,CFormSelect
} from '@coreui/react'
import { useParams, useNavigate } from 'react-router-dom';
import CategoriesDataService from "../../../services/categories.service";
import FileUploadService from "../../../services/img-upload.service";
import PetDataService from "../../../services/pet.service";
const Edit = (props) => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [petState, setPetState] = useState({});
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [catgoriesdata, setCatgoriesdata] = useState([]);
  useEffect(() => {
    if (id)
      getPetbyID(id);
      retrieveCatgories();
  }, [id]);
  const retrieveCatgories = () => {
    CategoriesDataService.getAll()
      .then(response => {
        setCatgoriesdata(response.data);
        //console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  const getPetbyID = id => {
    PetDataService.get(id)
      .then(response => {
        setPetState(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleSubmit = async event => {
    const form = event.currentTarget
    event.preventDefault()
    if (form.checkValidity() === false) {
      event.stopPropagation()
      setValidated(false)
    } else {
      var data = {
        pet_name: petState.pet_name,
        pet_desc: petState.pet_desc,
        cat_id: petState.cat_id,
      };
      PetDataService.update(id, data)
        .then(response => {
          if(file){
            let { cat_id } = response.data;
            FileUploadService.upload(file, id, 'pets').then((response) => {
              console.log(response)
              navigate('/panel/pet/list')
            }).catch((err) => {
              console.log('err-->', err)
            });
          }else{
            navigate('/panel/pet/list')
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
    setValidated(true)
  }
  const uploadFile = async (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  let categorySelected = (e) => {
    const cat_id = e.target.value;
    setPetState({ ...petState, ...{ cat_id } });
  }
  
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Pet</strong> <small>Information</small>
          </CCardHeader>
          <CCardBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1"> Pet name</CFormLabel>
                <CFormInput
                  id="exampleFormControlInput1"
                  placeholder="Pet Name"
                  name='pet_name'
                  defaultValue={petState.pet_name}
                  onChange={(event) => {
                    const pet_name = event.target.value;
                    setPetState({ ...petState, ...{ pet_name } });
                  }}
                  required
                />
              </div>
             
                <CFormLabel htmlFor="validationBillingCycle">Categories</CFormLabel>
                <CFormSelect aria-label="Default select example" onChange={(e) => categorySelected(e)} value={petState.cat_id}>
                <option>Open this select menu</option>
                {
                  catgoriesdata.map((item, i) =>
                  <option key={i} value={item.cat_id}>{item.cat_name}</option> 
                  )
                }
              </CFormSelect>
              <div className="mb-3">
                <CFormLabel htmlFor="formFile">Pet Image</CFormLabel>
                <CFormInput
                  type="file"
                  id="formFile"
                  onChange={(e) => uploadFile(e)}
                />
              </div>
             
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Pet Description</CFormLabel>
                <CFormTextarea id="exampleFormControlTextarea1" rows="3"
                  name='cat_desc'
                  defaultValue={petState.pet_desc}
                  onChange={(event) => {
                    const pet_desc = event.target.value;
                    setPetState({ ...petState, ...{ pet_desc } });
                  }}
                  required
                ></CFormTextarea>
              </div>
            
              <CCol xs="12">
                <CButton color="primary" type="submit">
                  Submit form
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Edit