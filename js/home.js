import { Clock } from "./clock/Clock.js";
import { socialsData } from "./data/socialsData.js";
import { socials } from "./socials/socials.js";

new Clock('#clock_1');
socials('footer .socials', socialsData);