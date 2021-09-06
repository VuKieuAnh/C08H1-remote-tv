class TiVi {
    constructor(_channel, _volume, _status) {
        this.channel = _channel;
        this.volume = _volume;
        this.status = _status;
    }
    setChannel(newChannel){
        this.channel = newChannel;
    }

    setVolume(newVolume){
        this.volume = newVolume;
    }
    turnOnOff(){
        this.status = !this.status;
    }

}
let tv1 = new TiVi(0, 0, true);
let tv2 = new TiVi(0, 0, true);

