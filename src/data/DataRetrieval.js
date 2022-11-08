import allBandData from "@/data/bands.json";

const DataRetrieval = {
  retrieveBandDataWithId(bandEnum) {
    let bandData = {}
    let band = allBandData.find(x => x.id === bandEnum);
    
    if (band) {
      bandData = band;  
    }
  
    return bandData;
  },

  retrieveAlbumDataWithId(bandEnum, albumId) {
    let albumData = {};
    let bandData = this.retrieveBandDataWithId(bandEnum);

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
  },

  retrieveSongDataWithBandAndId(songId, albumId, bandData) {
    let songData = {};
    let album = bandData.albums.find(x => x.id == albumId);

    if (album) {
      let song = album.songs.find(x => x.id == songId);
      if (song) {
        songData = song; 
      }
    }
  
    return songData;
  }

};

export default DataRetrieval;