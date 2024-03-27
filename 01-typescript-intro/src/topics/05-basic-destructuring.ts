interface AudioPlayer {
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details
}

interface Details {
    author: string,
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}
const song = 'New Song'
const {song: AnotherSong, songDuration: duration, details : songDetails} = audioPlayer;
const {author} = songDetails;
console.log('song:', AnotherSong);
console.log('duration: ', duration);
console.log('author: ', author);

const dbz: string [] = ['Goku', 'Vegeta', 'Trunk'];
export{}