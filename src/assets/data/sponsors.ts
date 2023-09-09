import { Sponsor } from "../../types/sponsor";
import hurtNamiot from '../../assets/images/logo/sponsors/hurt__namiot.svg';
import rotService from '../../assets/images/logo/sponsors/rot__service.svg';
import b from '../../assets/images/logo/sponsors/B.svg';
import berenderowiczKlub from '../../assets/images/logo/sponsors/berendowicz__klub.svg';
import ccm from '../../assets/images/logo/sponsors/ccm.svg';
import agencjaReklamowa from '../../assets/images/logo/sponsors/agencja__reklamowa.svg';

export const sponsors: Sponsor[] = [
  { 
    id: 1,
    imageUrl: ccm,
    title: "ccm"
  },
  { 
    id: 2,
    imageUrl: berenderowiczKlub,
    title: "Berenderowicz namiot"
  },

  { 
    id: 3,
    imageUrl: hurtNamiot,
    title: "Hurt namiot"
  },

  { 
    id: 4,
    imageUrl: b,
    title: "B"
  },

  { 
    id: 5,
    imageUrl: rotService,
    title: "Rot service"
  },

  { 
    id: 6,
    imageUrl: agencjaReklamowa,
    title: "agencja Reklamowa"
  },
];