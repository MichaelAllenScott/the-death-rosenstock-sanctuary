const express = require('express');
const router = express.Router();
const { Band } = require('../models/band');
const { Album } = require('../models/album');

//Get all bands
router.get('/', async (req, res) => {
  try {
    const bands = await Band.find({});
    return res.status(200).json(bands);
  } catch (e) {
    return res.status(500).json(e);
  }
});

//Get band by abbreviation
router.get('/:bandAbbrv', async (req, res) => {
  try {
    const band = await Band.findOne({bandAbbrv: req.params.bandAbbrv});
    if (band === null) {
      return res.status(404).json(`No Band found with the abbreviation: '${req.params.bandAbbrv}'`);
    }
    return res.status(200).json(band);
  } catch (e) {
    return res.status(500).json(e);
  }
});

//Get all band albums by abbreviation
router.get('/:bandAbbrv/albums', async (req, res) => {
  try {
    const albums = await Album.find({bandAbbrv: req.params.bandAbbrv});
    return res.status(200).json(albums);
  } catch (e) {
    return res.status(500).json(e);
  }
});

//Get band album by abbreviation and album orderIndex
router.get('/:bandAbbrv/albums/:orderIndex', async (req, res) => {
  try {
    const album = await Album.findOne({bandAbbrv: req.params.bandAbbrv, orderIndex: req.params.orderIndex});
    if (album === null) {
      return res.status(404).json(`No Album found with the band abbreviation: '${req.params.bandAbbrv}' and the order index of: '${req.params.orderIndex}'`);
    }
    return res.status(200).json(album);
  } catch (e) {
    return res.status(500).json(e);
  }
});

//Get album songs by band abbreviation and album orderIndex
router.get('/:bandAbbrv/albums/:orderIndex/songs', async (req, res) => {
  try {
    const album = await Album.findOne({bandAbbrv: req.params.bandAbbrv, orderIndex: req.params.orderIndex});
    if (album === null) {
      return res.status(404).json(`No Album found with the band abbreviation: '${req.params.bandAbbrv}' and the order index of: '${req.params.orderIndex}'`);
    }
    return res.status(200).json(album.songs);
  } catch (e) {
    return res.status(500).json(e);
  }
});

//Get album song by band abbreviation, album orderIndex, and song orderIndex
router.get('/:bandAbbrv/albums/:albumOrderIndex/songs/:songOrderIndex', async (req, res) => {
  try {
    const album = await Album.findOne({bandAbbrv: req.params.bandAbbrv, orderIndex: req.params.albumOrderIndex});
    if (album === null) {
      return res.status(404).json(`No Album found with the band abbreviation: '${req.params.bandAbbrv}' and an album order index of: '${req.params.albumOrderIndex}'`);
    }
    const song = album.songs.find(song => song.orderIndex == req.params.songOrderIndex);
    if (song === null) {
      return res.status(404).json(`No Song found with the band abbreviation: '${req.params.bandAbbrv}'; An album order index of: '${req.params.albumOrderIndex}'; and a song order index of: '${req.params.songOrderIndex}'`);
    }
    return res.status(200).json(song);
  } catch (e) {
    return res.status(500).json(e);
  }
});

module.exports = router;