//const { mondayBoardId } = require('./getMondayBoardId.js')
import BoardID from "./getMondayBoardId.js"
import item from "./getMondayItem.js"  
import dupItem from "./createDuplicateInvoice.js"
import delSub from "./deleteSubitems.js"
import customer from "./stripeCreateCustomer.js"

const pulseID = '3361456655'  // will be passed by a zapier call in future

function makeDupes ( ALRInvID) {
    return new Promise(function(resolve, reject) {
        dupItem.duplicateItem (pulseID, ALRInvID, (dupId) => {
            return resolve(dupId)
        })
    })

}
const debugInvCreation = false

if (!debugInvCreation) {
    BoardID.mondayBoardId ("ALR Invoicing" ,(ALRInvID) => {
        BoardID.mondayBoardId ("Subitems of ALR Invoicing" ,(ALRInvSubId) => {
            item.mondayItem (pulseID, ALRInvID, (item) => {
                // Determines how many unique groupings have been specified
                const myGroupings = new Set()
                for (var i=0; i<item.boards[0].items[0].subitems.length; i++) {
                    myGroupings.add ( item.boards[0].items[0].subitems[i].column_values[0].text)
                }   
                // If more than one grouping has been specified then multiple invoices will be created
                if (myGroupings.size > 1) {
                    const noSubitems = item.boards[0].items[0].subitems.length
                    const myItems = new Set().add(pulseID) // List to use to tidy up subitems
                    var promises = []
                    for (var i=1; i<myGroupings.size; i++)  {
                        promises.push(makeDupes(ALRInvID))
                    }

                    Promise.all(promises)
                        .then(function(data){
                            data.forEach(element => {
                                myItems.add(element)
                            })

                            // console.log('delay starting')
                            // setTimeout(function(){}, 10000)
                            // console.log('delay ending')
                            
                            let itemArray = Array.from (myItems)
                            let groupArray = Array.from(myGroupings)
                            // Remove Subitems for each invoice as necessary

                            for (var i=0; i<myGroupings.size; i++) {
                                    delSub.tidySubitems(itemArray[i],ALRInvID,groupArray[i], noSubitems, (res) => {
                                })
                                }

                            }

                        )
                }
            })
        })
    })
}

//console.log(customer.checkCustomer (pulseID))


