class SayaTubeVideo {
    constructor(title) {
      this.id = Math.floor(10000 + Math.random() * 90000);
      this.title = title;
      this.playCount = 0;
    }
  
    increasePlayCount(count) {
      if (count > 0) {
        this.playCount += count;
      }
    }
  
    printVideoDetails() {
      console.log(`ID: ${this.id}`);
      console.log(`Title: ${this.title}`);
      console.log(`Play Count: ${this.playCount}`);
    }
  }
  
  class SayaTubeUser {
    constructor(username) {
      this.id = Math.floor(10000 + Math.random() * 90000);
      this.username = username;
      this.uploadedVideos = [];
    }
  
    addVideo(video) {
      this.uploadedVideos.push(video);
    }
  
    getTotalVideoPlayCount() {
      return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }
  
    printAllVideoPlaycount() {
      console.log(`User: ${this.username}`);
      this.uploadedVideos.forEach((video, index) => {
        console.log(`Video ${index + 1} judul: ${video.title}`);
      });
    }
  }
  
  const user = new SayaTubeUser("Reza Irawan");
  
  const filmList = [
    "Review Film DareDevil oleh Reza Irawan",
    "Review Film Loki oleh Reza Irawan",
    "Review Film Iron Man oleh Reza Irawan",
    "Review Film Ant-Man oleh Reza Irawan",
    "Review Film Avenger: Endgame oleh Reza Irawan",
    "Review Film Joker oleh Reza Irawan",
    "Review Film IT oleh Reza Irawan",
    "Review Film Thor oleh Reza Irawan",
    "Review Film Spider-man oleh Reza Irawan",
    "Review Film Hulk Away oleh Reza Irawan",
  ];
  
  filmList.forEach((film) => {
    const video = new SayaTubeVideo(film);
    user.addVideo(video);
    video.increasePlayCount(100);
  });
  
  user.printAllVideoPlaycount();