var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Codeing Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
// works - needs to print then the id, name, the number of tracks and "tracks in text"
var printPlaylists = function(playlistId) {
  for (var i in library.playlists) {
    console.log(`${library.playlists[i].id}: ${library.playlists[i].name} - ${library.playlists[i].tracks.length} tracks`);
  }
}

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)


// works - prints the id, name, "by", name, "(", album, ")"
var printTracks = function(trackId) {
  for (var i in library.tracks) {
    console.log(`${library.tracks[i].id}: ${library.tracks[i].name} by ${library.tracks[i].artist} (${library.tracks[i].album})`);
  }
}

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)


var printPlaylist = function(playlistId) {
  printPlaylists(playlistId);
  for (t in library.playlists[playlistId].tracks) {
    printTracks(t);
  }
}

// adds an existing track to an existing playlist

var addTrackToPlaylist = function(trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library

var addTrack = function(name, artist, album) {
  let id = uid();
  library.tracks[id] = {
    id,
    name,
    artist,
    album
  };
}

// adds a playlist to the library

var addPlaylist = function(name) {
  let id = uid();
  library.playlists[id] = {
    id,
    name,
    tracks: []
  };
}

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// use a for loop to sreach the tracks and another for loop to go through the track info
var printSearchResults = function(query) {
  var query = new RegExp(query, 'i');
  for (var i in library.tracks) {
    track = library.tracks[i];
    for (var j in track) {
      trackInfo = track[j];
      console.log(trackInfo);
      if (trackInfo.search(query) != -1) {
        console.log(`${library.tracks[i].id}: ${library.tracks[i].name} by ${library.tracks[i].artist} (${library.tracks[i].album})`);
      }
    }
  }
}


console.log(printSearchResults("Code"));