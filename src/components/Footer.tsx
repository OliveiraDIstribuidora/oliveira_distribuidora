import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#161617] text-white py-4">
      <div className="container mx-auto text-center my-6">
        <p>&copy; 2025 Oliveira Distribuidora - Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.instagram.com/oliveira_distribuidora1" target="_blank"><Instagram className="size-9 hover:scale-110" /></a>
          <a href="https://www.facebook.com/p/oliveira_distribuidora1" target="_blank"><Facebook className="size-9 hover:scale-110" /></a>
          <a href="mailto:motosnet-adm@gmail.com" target="_blank"><Mail className="size-9 hover:scale-110" /></a>
          <p></p>
        </div>
      </div>
    </footer>
  );
}