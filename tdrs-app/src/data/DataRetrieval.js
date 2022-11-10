import allBandData from "@/data/bands.json";

const DataRetrieval = {
  retrieveBandDataWithId(bandEnum) {
    const bandData = {}
    const band = allBandData.find(x => x.id === bandEnum);
    
    if (band) {
      bandData = band;  
    }
  
    return bandData;
  },

  retrieveAlbumDataWithId(bandEnum, albumId) {
    const albumData = {};
    const bandData = this.retrieveBandDataWithId(bandEnum);

    const album = bandData.albums.find(x => x.id == albumId);
    
    if (album) {
      albumData = album;  
    }
  
    return albumData;
  },

  retrieveAlbumDataWithBandAndId(albumId, bandData) {
    const albumData = {};
    const album = bandData.albums.find(x => x.id == albumId);

    if (album) {
      albumData = album;  
    }
  
    return albumData;
  },

  retrieveSongDataWithBandAndId(songId, albumId, bandData) {
    const songData = {};
    const album = bandData.albums.find(x => x.id == albumId);

    if (album) {
      const song = album.songs.find(x => x.id == songId);
      if (song) {
        songData = song; 
      }
    }
  
    return songData;
  }

};

export default DataRetrieval;