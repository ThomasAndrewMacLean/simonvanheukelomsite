function NavController($location) {

    var ctrl = this;

    ctrl.goToLink = (link) => {
        $location.path(link)
    }


}