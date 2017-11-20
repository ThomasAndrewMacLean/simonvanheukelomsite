function HomeController() {
    var ctrl = this;
    ctrl.test = 'jkljkljlk'

    ctrl.testfunc = () => {
        console.log(this.test);
    }

    ctrl.$onInit = () => {
        ctrl.vid = document.getElementById("videoHome");
        ctrl.mute = true;
        ctrl.play = true;
    }

    ctrl.togglePlay = () => {
        if (ctrl.vid.paused) {
            ctrl.vid.play()
            ctrl.play = true;
        } else {
            ctrl.vid.pause();
            ctrl.play = false;
        }
    }

    ctrl.toggleMute = () => {
        ctrl.vid.muted = !ctrl.vid.muted;
        ctrl.mute = !ctrl.mute;
    }
}