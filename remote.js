class Remote {
    constructor(_code, _tivi) {
        this.code = _code;
        this.tivi = _tivi;
    }

    setTivi(tivi){
        this.tivi = tivi;
    }

    changeChannel(newChannel){
        if (this.tivi){
            this.tivi.setChannel(newChannel);
        }
    }
    changVolume(newV){
        this.tivi.setVolume(newV);
    }
    turnOnOffTV(){
        this.tivi.turnOnOff();
    }
}
let remote = new Remote("RM01", tv1);
