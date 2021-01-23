import { BadgeAttributes } from "./badge-items-attributes";

export interface NavigationInterface{
    name : string;
    title? : boolean;
    url? : string;
    icon? : string;
    attributes? : string[];
    badge? : BadgeAttributes[],
    children? : NavigationInterface[];
}