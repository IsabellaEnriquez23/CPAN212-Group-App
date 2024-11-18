const express = require('express')
const router = express.Router()

const { getAllProfiles, getProfile, createProfile, updateProfile, deleteProfile, } = require('../controllers/profileController')

router.route('/profile').get(getAllProfiles).post(createProfile)
router.route('/profile/:id').get(getProfile).put(updateProfile)
router.route('/profile/:id').delete(deleteProfile)
module.exports = router
