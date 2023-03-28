import { defineStore } from "pinia";
import { computed, ref } from "vue";
import artist from "../artist";
export const usePlayerStore = defineStore("player", () => {
  const isPlaying = ref(false),
    audio = ref(null),
    currentArtist = ref(null),
    currentTrack = ref(null);

  const loadSong = (artist, track) => {
    currentArtist.value = artist;
    currentTrack.value = track;
    if (audio.value && audio.value.src) {
      audio.value.pause();
      isPlaying.value = false;
      audio.value.src = "";
    }

    audio.value = new Audio();
    audio.value.src = track.path;

    setTimeout(() => {
      audio.value.play();
      isPlaying.value = true;
    }, 200);
  };

  const playOrPause = () => {
    if (isPlaying.value) {
      audio.value.pause();
    } else {
      audio.value.play();
    }
    isPlaying.value = !isPlaying.value;
  };

  const playOrPauseThisSong = (artist, track) => {
    if (
      !audio.value ||
      !audio.value.src ||
      currentTrack.value.id !== track.id
    ) {
      loadSong(artist, track);
      return;
    }
    playOrPause();
  };

  const nextSong = (currentTrack) => {
    if (currentTrack.id === artist.tracks.length) {
      let track = artist.tracks[0];
      loadSong(artist, track);
    } else {
      let track = artist.tracks[currentTrack.id];
      loadSong(artist, track);
    }
  };

  const prevSong = (currentTrack) => {
    let track = artist.tracks[currentTrack.id - 2];
    loadSong(artist, track);
  };
  const reset = () => {
    audio.value.pause();
    audio.value.src = "";
    currentArtist.value = null;
    currentTrack.value = null;
    isPlaying.value = false;
  }
  return { isPlaying, audio, currentArtist, currentTrack, playOrPause, playOrPauseThisSong, nextSong, prevSong, reset, loadSong };
});
