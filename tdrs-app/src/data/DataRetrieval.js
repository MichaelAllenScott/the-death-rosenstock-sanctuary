import allBandData from "@/data/bands.json";

const DataRetrieval = {
  retrieveBandDataWithId(bandAbbrv) {
    let bandData = {}
    const band = allBandData.find(x => x.bandAbbrv === bandAbbrv);
    
    if (band) {
      bandData = band;  
    }
  
    return bandData;
  },

  retrieveAlbumDataWithId(bandAbbrv, albumOrderIndex) {
    let albumData = {};
    const bandData = this.retrieveBandDataWithId(bandAbbrv);

    const album = bandData.albums.find(x => x.orderIndex == albumOrderIndex);
    
    if (album) {
      albumData = album;  
    }
  
    return albumData;
  },

  retrieveAlbumDataWithBandAndId(albumOrderIndex, bandData) {
    let albumData = {};
    const album = bandData.albums.find(x => x.orderIndex == albumOrderIndex);

    if (album) {
      albumData = album;  
    }
  
    return albumData;
  },

  retrieveSongDataWithBandAndId(songOrderIndex, albumOrderIndex, bandData) {
    let songData = {};
    const album = bandData.albums.find(x => x.orderIndex == albumOrderIndex);

    if (album) {
      const song = album.songs.find(x => x.orderIndex == songOrderIndex);
      if (song) {
        songData = song; 
      }
    }
  
    return songData;
  }

};

export default DataRetrieval;