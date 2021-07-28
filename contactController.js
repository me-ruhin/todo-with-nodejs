const contacts  = require('./Contact')

exports.getAllContact = (req,res)=>{

    res.json(contacts.getAllContacts())
}

exports.createContact = (req,res)=>{

   const {name,phone,email} = req.body
  let contact =  contacts.createNewContact({
       name,
       phone,
       email
   });

   res.json(contact)
}

exports.singlePost = (req,res)=>{

  const id = req.params.contactId
 
    
  const contact = contacts.getSingleContactById(id)

  res.json(contact) 

}


exports.deleteContact=(req,res)=>{
    const id = req.params.deleteId
    contacts.deleteContactById(id)
    res.json(contacts.getAllContacts())
}

exports.updateContact = (req,res)=>{
    let  id = req.params.contactId
    id = parseInt(id)
    let {name,phone,email} = req.body

  let contact =   contacts.updateContactById(id,{
        name,
        phone,
        email
    })

    res.json(contact)
}