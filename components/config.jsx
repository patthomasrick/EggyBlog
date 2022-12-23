import {
  faGithub,
  faGitlab,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Title of the whole app.
export const NAME = "Hi, I'm Patrick";
export const SHORT_NAME = 'Patrick';

// Subtitle.
export const SUBTITLE = '';

// Author.
export const AUTHOR = 'Patrick Thomas';

// Bio.
export const BIO = "I'm a software engineer.";

// Socials.
export const SOCIALS = [
  {
    name: 'GitHub',
    url: 'https://github.com/patthomasrick',
    icon: faGithub,
  },
  {
    name: 'GitLab',
    url: 'https://gitlab.com/patthomasrick',
    icon: faGitlab,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/patrick-w-thomas/',
    icon: faLinkedin,
  },
  {
    name: 'Email',
    url: 'mailto:patrick@patrickwthomas.net',
    icon: faEnvelope,
  },
];
