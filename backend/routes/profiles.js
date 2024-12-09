const express = require('express')
const router = express.Router()

const { getAllProfiles, getProfile, createProfile, updateProfile, deleteProfile, } = require('../controllers/profileController')

router.route('/profiles').get(getAllProfiles).post(createProfile)
router.route('/profiles/:id').get(getProfile).put(updateProfile)
router.route('/profiles/:id').delete(deleteProfile)
module.exports = router
