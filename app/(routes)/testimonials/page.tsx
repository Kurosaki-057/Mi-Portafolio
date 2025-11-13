import { notFound } from 'next/navigation';

// Ruta de testimonios eliminada: devolver 404 para evitar contenido huérfano
export default function Page() {
    notFound();
}