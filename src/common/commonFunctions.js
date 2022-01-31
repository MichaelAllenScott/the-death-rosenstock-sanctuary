const bandDataFunctions = {
  retrieveBandDataWithId(bandEnum, allBandData) {
    let bandData = {}
    let band = allBandData.find(x => x.id === bandEnum);
    
    if (band) {
      bandData = band;  
    }
  
    return bandData;
  },

  retrieveAlbumDataWithId(bandEnum, albumId, allBandData) {
    let albumData = {};
    let bandData = bandDataFunctions.retrieveBandDataWithId(bandEnum, allBandData);

    let album = bandData.albums.find(x => x.id == albumId);
    
    if (album) {
      albumData = album;  
    }
  
    return albumData;
  },

  retrieveAlbumDataWithBandAndId(albumId, bandData) {
    let albumData = {};
    let album = bandData.albums.find(x => x.id == albumId);

    if (album) {
      albumData = album;  
    }
  
    return albumData;
  }

};

export default bandDataFunctions;
