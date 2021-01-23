import { NavigationItems } from './navigation-items';

let icons : any = {};
let navItems = NavigationItems;

navItems.forEach((element, index) => {
    icons.push(element.icon)
});

export const NavigationItemsIcons = icons;