import AntlerImage from "../public/images/Investors/antler.svg";
import TomPrestonWernerImage from "../public/images/Investors/tom-prestor-werner.svg";
import PrashantKumarGulatiImage from "../public/images/Investors/prashant-kumar-gulati.png";
import KunalBislaImage from "../public/images/Investors/kunal-bisla.svg";
import SayanGhosImage from "../public/images/Investors/sayan-ghosh.svg";

export type Person = {
  image: string;
  name: string;
  position: string;
  seed: string;
};
export const People: Person[] = [
  {
    name: "Antler",
    position: "Partners at Antler India",
    seed: "Lead, Pre-Seed",
    image: AntlerImage,
  },
  {
    name: "Tom Preston-Werner",
    position: "Co-Founder, GitHub",
    seed: "Pre-Seed",
    image: TomPrestonWernerImage,
  },
  {
    name: "Prashant Kumar Gulati",
    position: "President, TiE Dubai",
    seed: "Pre-Seed",
    image: PrashantKumarGulatiImage,
  },
  {
    name: "Kunal Bisla",
    position: "Angel Investor, prev, Netflix.",
    seed: "Pre-Seed",
    image: KunalBislaImage,
  },
  {
    name: "Sayan Ghosh",
    position: "Funds of funds investor, IFC.",
    seed: "Pre-Seed",
    image: SayanGhosImage,
  },
];
