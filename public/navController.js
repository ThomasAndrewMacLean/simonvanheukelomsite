function NavController($location) {

    var ctrl = this;


    ctrl.$onInit = () => {
        let path = $location.$$path.split('/')[1];
        this.activeLink = path;

    }


    ctrl.goToLink = (link) => {

        this.activeLink = link;
        $location.path(link)
    }


}