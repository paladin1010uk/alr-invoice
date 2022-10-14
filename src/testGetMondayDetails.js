console.log('Testing MONDAY.COM !!')

const passedPulseId = '3217335195'

const { GraphQLClient } = require('graphql-request')
const ALRInvoicingBoard = 'ALR Invoicing'
const ALRInvoicingSubItemsBoard = 'Subitems of ALR Invoicing'

//Create connection called 'client' that connects to Monday.com's API
const client = new GraphQLClient('https://api.monday.com/v2/', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjEwODM2OTg5MywidWlkIjoyMTYxOTg2MSwiaWFkIjoiMjAyMS0wNC0zMFQwODoyNjoxNC4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6ODc4OTc0NCwicmduIjoidXNlMSJ9.k9XH-2bVbVBO6y0Jy8hRI2fJ5GzGmC9OemESJVc14mY'
    }
})

//Create query to send to Monday.com's API
const query = ` query {boards {id, name} }`;
var ALRInvBoardId = ''
var ALRInvSubBoardId = ''

client.request(query).then((data) => {
   
    function filterValue(value) {
        return data["boards"].filter((object) => {
         return object["name"] == value
        })
        }
    
    ALRInvBoardId = filterValue(ALRInvoicingBoard)[0].id
    ALRInvSubBoardId = filterValue(ALRInvoicingSubItemsBoard)[0].id
    console.log(ALRInvBoardId) 
    console.log(ALRInvSubBoardId) 
})

console.log(ALRInvBoardId) 
console.log(ALRInvSubBoardId) 
