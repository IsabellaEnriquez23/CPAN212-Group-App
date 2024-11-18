const Profile = require('../models/Profile')
const { createCustomError } = require('../errors/customError')
const asyncWrapper = require('../middleware/async')

const getAllProfiles = asyncWrapper(async (req, res) => {
  const profiles = await Profile.find({})
  res.status(200).json({ profiles })
})

const getProfile = asyncWrapper(async (req, res, next) => {
  const { id: profileID } = req.params
  const profile = await Profile.findOne({ _id: profileID })
  if (!profile) {
    return next(createCustomError(`No profile with id : ${profileID}`, 404))
  }

  res.status(200).json({ profile })
})  

const createProfile = asyncWrapper(async (req, res) => {
    const profile = await Profile.create(req.body)
    res.status(201).json({ profile })
  })

//will eventually create implementation in frontend
const deleteProfile = asyncWrapper(async (req, res, next) => {
  const { id: profileID } = req.params
  const profile = await Profile.findOneAndDelete({ _id: profileID })
  if (!profile) {
    return next(createCustomError(`No profile with id : ${profileID}`, 404))
  }
  res.status(200).json({ profile })
})

const updateProfile = asyncWrapper(async (req, res, next) => {
  const { id: profileID } = req.params

  const profile = await Profile.findOneAndUpdate({ _id: profileID }, req.body)

  if (!profile) {
    return next(createCustomError(`No profile with id : ${profileID}`, 404))
  }

  res.status(200).json({ profile })
})

module.exports = {
  getAllProfiles,
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
}
