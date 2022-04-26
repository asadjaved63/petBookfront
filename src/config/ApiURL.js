const url =() => window.location.hostname == 'localhost' ? 'http://localhost:3000/api': 'https://message.aovatalk.com/api'

export const ApiURL = url();
const documentUrl = () => window.location.hostname == 'localhost' ? 'http://localhost:3000/api': '/'

export const DocumentUrl =documentUrl();
export const PostMethod = async (controller,formData) => {
  return await fetch(ApiURL + "/" +controller, {method: 'POST', body: formData}).then(res => res.json())
}
export const PutMethod = async (controller,id,formData) => {
  return await fetch(ApiURL + "/" +controller+"/"+id, {method: 'POST', body: formData}).then(res => res.json())
}
export const getMethod = async (controller) => {
  return await fetch(ApiURL + "/"+controller).then(res => res.json());
}
export const getMethodByID = async (controller,id) => {
  return await fetch(ApiURL + "/"+controller+"/"+id).then(res => res.json());
}
export const DeleteMethod = async (controller,id) => {
  return await fetch(ApiURL + "/" +controller+"/"+id, {method: 'DELETE'}).then(res => res.json())
}

