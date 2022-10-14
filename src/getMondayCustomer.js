import  { client } from "./authMonday.js"

function mondayCustomerItem (id, callback) {
    const query = '{ \
      items(ids: [' + id + ']) { \
        name \
        column_values(ids: ["text9", "connect_boards", "mirror4", "mirror9", "mirror", "mirror6", "text34", "text7"]) { \
          id \
          text \
          title \
        } \
      } \
    }'
       
    //   client.request(query).then((error, {data}) => {
    //     if (error) {
    //       callback('Unable to find Customer details', undefined)
    //     } else {
    //       callback(undefined, {
    //           eventId: data.items[0].column_values[0].text,
    //           contact: data.items[0].column_values[1].text,
    //           company:  data.items[0].column_values[2].text,
    //           contactType:  data.items[0].column_values[3].text,
    //           contactEmail:  data.items[0].column_values[4].text,
    //           invoiceTo:  data.items[0].column_values[5].text,
    //           invoiceNo:  data.items[0].column_values[6].text
    //         }
    //       )
    //     }
    //   }
    // )

     client.request(query).then((error, {data}) => {   
      if (error) {
        callback('unable to get item', undefined)
      } else {
        callback (undefined, data)
    }        
    }
  )
}

export default {
 mondayCustomerItem
}


