import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";
import { GrLanguage } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="flex justify-evenly items-center mx-4">
      <div>
        <Image src="/logo.svg" alt="image of logo" height={160} width={160} />
      </div>

      <div className="flex flex-col gap-2 p-2">
        <nav>
          <ul className="flex gap-5 items-center justify-center">
            <li>
              <Popover>
                <PopoverTrigger>Société</PopoverTrigger>
                <PopoverContent className="flex flex-col items-start justify-center gap-4 max-w-48">
                  <Link href="/">Qui sommes-nous ?</Link>
                  <Link href="/">Rejoinez nous </Link>
                </PopoverContent>
              </Popover>
            </li>
            <li>
              <Popover>
                <PopoverTrigger>Nos services</PopoverTrigger>
                <PopoverContent className="flex flex-col items-start justify-center gap-4 max-w-60">
                  <Link href="/">Gestion de la copropriété</Link>
                  <Link href="/">Espace personnel</Link>
                </PopoverContent>
              </Popover>
            </li>
            <li>Nos services</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="h-[1px] bg-gray-100 mx-auto w-[80%]" />

        <nav>
          <ul className="flex gap-5 items-center justify-center">
            <li>
              <Popover>
                <PopoverTrigger>Nos projets</PopoverTrigger>
                <PopoverContent className="flex flex-col items-start justify-center gap-4 max-w-48">
                  <Link href="/">Tous nos projets</Link>
                  <Link href="/">Projets livres </Link>
                  <Link href="/">Projets en cours </Link>
                  <Link href="/">Nouveau projets </Link>
                  <Link href="/">Villa LUNA </Link>
                </PopoverContent>
              </Popover>
            </li>

            <li>Nos offres</li>
            <li>Habiter</li>
            <li>Investir</li>
            <li>Louer</li>
            <li>Vendre son terrain</li>
            <li>Visite Virtuelle</li>
            <li className="font-bold text-yellow-600">Premium</li>
          </ul>
        </nav>
      </div>

      <div>
        <div className="rounded-full flex items-center justify-center gap-1 border-[1px] shadow-lg p-2">
          <GrLanguage />
          <span>Français</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
