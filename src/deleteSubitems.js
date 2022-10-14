import  { client } from "./authMonday.js"

function readSubItemCount(query ) {
    return new Promise((resolve) => {
      setTimeout(() => {

        client.request(query).then((data) => {
            try {
                var subitemCount = 0

                if(data.boards[0].items[0].subitems!=null) {
                    subitemCount = data.boards[0].items[0].subitems.length
                } 
                
                resolve ( data)
            } catch (e) {
                console.log(e)
            }
        })

      }, 100);
    });
  }

function deleteSubItems (id) {
    const query = 'mutation { \
        delete_item (item_id: ' + id + ') { \
            id \
        } \
    }' 

    client.request(query)

}

async function getSubitems(query, grouping, subcount) {
    const subitemData = new Object
    var subitems = await readSubItemCount (query);

    var subitemCount = 0
    if(subitems.boards[0].items[0].subitems!=null) {
        subitemCount = subitems.boards[0].items[0].subitems.length
    } 

    while (subcount != subitemCount) {
    
        subitems = await readSubItemCount (query);
        if(subitems.boards[0].items[0].subitems!=null) {
            subitemCount = subitems.boards[0].items[0].subitems.length
        } 
     }
    
      //Remove Subitems where the groupings don't match
    for (var i=0; i<subcount; i++) {
        const subitemId = subitems.boards[0].items[0].subitems[i].id
        const subitemGrouping = subitems.boards[0].items[0].subitems[i].column_values[0].text
        if(grouping !== subitemGrouping) {           
            console.log('Delete ' + subitemId + ' (' + grouping + '/' + subitemGrouping + ')')    
            deleteSubItems(subitemId)
        }
            
    }

    return subitemCount
}

function tidySubitems (id, boardId, grouping, subcount, callback) {
     const query = ' { \
        boards(ids: [' + boardId + ']) { \
          items(ids: [' + id + ']) { \
            id \
            subitems { \
              id \
              column_values(ids: ["text"]) { \
                text \
              } \
            } \
          } \
        } \
      }'
       
    const subItems = getSubitems (query, grouping, subcount)
    
}

export default {
 tidySubitems
}
