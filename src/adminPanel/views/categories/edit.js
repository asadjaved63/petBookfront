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
  CRow,
} from '@coreui/react'
import { useParams, useNavigate } from 'react-router-dom';
import CategoriesDataService from "../../../services/categories.service";
import FileUploadService from "../../../services/img-upload.service";
const Edit = (props) => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [categoryState, setCategoryState] = useState({});
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    if (id)
      getCategory(id);
  }, [id]);

  const getCategory = id => {
    CategoriesDataService.get(id)
      .then(response => {
        setCategoryState(response.data);
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
        cat_name: categoryState.cat_name,
        cat_desc: categoryState.cat_desc,
      };
      CategoriesDataService.update(id, data)
        .then(response => {
          if(file){
            let { cat_id } = response.data;
            FileUploadService.upload(file, id, 'categories').then((response) => {
              console.log(response)
              navigate('/panel/category/list')
            }).catch((err) => {
              console.log('err-->', err)
            });
          }else{
            navigate('/panel/category/list')
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
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Category</strong> <small>Information</small>
          </CCardHeader>
          <CCardBody>
            <CForm
              className="row g-3 needs-validation"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1"> Category name</CFormLabel>
                <CFormInput
                  id="exampleFormControlInput1"
                  placeholder="Category Name"
                  name='cat_name'
                  defaultValue={categoryState.cat_name}
                  onChange={(event) => {
                    const cat_name = event.target.value;
                    setCategoryState({ ...categoryState, ...{ cat_name } });
                  }}
                  required
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">Category Description</CFormLabel>
                <CFormTextarea id="exampleFormControlTextarea1" rows="3"
                  name='cat_desc'
                  defaultValue={categoryState.cat_desc}
                  onChange={(event) => {
                    const cat_desc = event.target.value;
                    setCategoryState({ ...categoryState, ...{ cat_desc } });
                  }}
                  required
                ></CFormTextarea>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="formFile">Category Image</CFormLabel>
                <CFormInput
                  type="file"
                  id="formFile"
                  onChange={(e) => uploadFile(e)}
                />
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
