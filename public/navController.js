function NavController($location) {

    var ctrl = this;
    activeLink = '';

    ctrl.goToLink = (link) => {

        this.activeLink = link;
        $location.path(link)
    }


}