import matrixx from "../assets/img/matrixx-phone.webp";
import re_nix_os from "../assets/img/nixos-logo.png";
import re_nvim from "../assets/img/re-nvim.png";
import repack_me from "../assets/img/repack-me.jpg";

export const slidesData = [
  {
    image: matrixx,
    head: "Matrixx ROM",
    caption:
      "I am engaged in maintenance of custom android firmware for sapphire/sapphiren devices (Redmi Note 3 4g/nfc). My work is published unofficially on forums dedicated to these devices. I also maintain tree for sapphie/sapphiren (Redmi Note 3 4g/nfc)",
  },
  {
    image: re_nix_os,
    head: "RE: NixOS",
    caption:
      "My modular NixOS configuration is designed to quickly reproduce the system on multiple devices. It supports macbook, desktop pc, servers and and android(using nix-on-droid). The configuration allows you to easily customize and manage multiple devices through custom modules and a built in abstraction that ensures that all modules work despite updates to the main image. There is support for disk encryption and security tweaks",
  },
  {
    image: re_nvim,
    head: "RE: NVIM",
    caption:
      "My own neovim configuration written from scratch, providing IDE-level functionality for rust, python, rust and web programming. The configuration is very lightweight and prioritizes the use of native api for better performance",
  },
  {
    image: repack_me,
    head: "RePack.me",
    caption:
      "Custom mirror of the closed forum repack.me with repacks from the respected KpoJIuK. Allows you to conveniently search and store his creations without having access to his forum",
  },
];
