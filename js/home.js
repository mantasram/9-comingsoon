import { Clock } from "./clock/Clock.js";
import { clockData } from "./data/clockData.js";
import { socialsData } from "./data/socialsData.js";
import { socials } from "./socials/socials.js";

new Clock('#clock_1', clockData);
socials('footer .socials', socialsData);