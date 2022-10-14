import  { client } from "./authMonday.js"

function mondayItem (id, boardId, callback) {
     const query = ' query { \
            boards(ids: [' + boardId + ']) { \
                id \
                name \
                items(ids: [' + id + ']) { \
                    subitems { \
                        id \
                        name \
                        column_values(ids: ["text"]) { \
                            text \
                        } \
                    } \
                } \
            } \
        }'
    
    
    client.request(query).then((data) => {
        callback (data)
    })
}

export default {
 mondayItem
}


