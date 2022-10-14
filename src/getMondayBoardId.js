//const { default: client } = require('./authMonday')
import  { client } from "./authMonday.js"

//Create query to send to Monday.com's API
const query = ` query {boards {id, name} }`;

function mondayBoardId (id, callback) {
    client.request(query).then((data) => {
    
        const filterValue = (value,callback) => {

            return  data["boards"].filter((object) => {
       
                if (object["name"] == value) {
                    callback(object.id)
                }
            })
            
        }
        filterValue(id, (mondayID) => {
            callback (mondayID)
        })
    })
}

export default {
 mondayBoardId 
}
