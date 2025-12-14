import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-gray-400" style={{ fontSize: '14px' }}>
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Võ Chí Cường
          </p>
          <p className="text-gray-400" style={{ fontSize: '14px' }}>
            © 2024 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
