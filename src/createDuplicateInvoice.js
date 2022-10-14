import  { client } from "./authMonday.js"

function duplicateItem (id, boardId, callback) {
     const query = ' mutation { \
                        duplicate_item(board_id: ' + boardId + ', item_id: ' + id + ', with_updates: true) { \
                            id \
                            } \
                        }'
    
    
    client.request(query).then((data) => {
        //console.log(data.duplicate_item.id)
        callback (data.duplicate_item.id)
    })
}

export default {
 duplicateItem
}
