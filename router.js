const router = require('express').Router()
const {
    getAllContact,
    createContact,
    singlePost,
    updateContact,
    deleteContact
} = require('./contactController')

router.get('/', getAllContact)

router.post('/create',createContact)
router.get('/:contactId',singlePost)
router.put('/update/:contactId',updateContact)
router.delete('/delete/:deleteId',deleteContact)
module.exports = router