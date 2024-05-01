import axios from "axios"

export default axios.create({

baseURL:"http://localhost/midterm/backend/public/api/",
headers: {
    "Content-type": "application/json"
}

}) 
