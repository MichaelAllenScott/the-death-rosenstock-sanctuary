import bandsData from "@/data/bands.json";
import albumsData from "@/data/albums.json";

const DataRetrieval = {
  retrieveBandData(bandAbbrv) {
    let bandData = {}
    const band = bandsData.find(x => x.bandAbbrv === bandAbbrv);
    
    if (band) {
      bandData = band;  
    }
  
    return bandData;
  },

  retrieveAlbumData(bandAbbrv, albumOrderIndex) {
    let albumData = {};
    const album = albumsData.find(x => x.bandAbbrv === bandAbbrv && x.orderIndex == albumOrderIndex);
    
    if (album) {
      albumData = album;  
    }
  
    return albumData;
  },

  retrieveSongData(bandAbbrv, albumOrderIndex, songOrderIndex) {
    let songData = {};
    const album = albumsData.find(x => x.bandAbbrv === bandAbbrv && x.orderIndex == albumOrderIndex);
    
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