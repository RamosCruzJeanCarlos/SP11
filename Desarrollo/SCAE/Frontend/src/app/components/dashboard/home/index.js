import angular from 'angular';
import HomeController from './home.controller';
import HomeComponent from './home.component';

export default angular
    .module('components.dashboard.home',[])
    .controller(HomeController.name,HomeController)
    .component('home',HomeComponent)
    .name;