import type { Category } from "@/types/category";

export const categories = [
    { title: 'Promessa do Lobinho', slug: 'promessa-do-lobinho' },
    { title: 'Promessa Escoteira', slug: 'promessa-escoteira' },
    { title: 'Promessa do Adulto', slug: 'promessa-do-adulto' },
    { title: 'Lei do Lobinho', slug: 'lei-do-lobinho' },
    { title: 'Lei Escoteira', slug: 'lei-escoteira' },
    { title: 'Nós e Amarras', slug: 'nos-e-amarras' },
    { title: 'Sinalização', slug: 'sinalizacao' },
    { title: 'História do Escotismo', slug: 'historia-do-escotismo' },
    { title: 'Orientações e Mapas', slug: 'orientacoes-e-mapas' },
    { title: 'Vida ao Ar Livre', slug: 'vida-ao-ar-livre' },
    { title: 'Primeiros Socorros', slug: 'primeiros-socorros' }
];

export const highlightedCategories: Category[] = [
    {
        title: 'Promessa Escoteira',
        description: 'Os pilares do movimento escoteiro.',
        color: 'primary' as const,
        slug: 'promessa-escoteira',
    },
    {
        title: 'Lei Escoteira',
        description: 'Os dez artigos que guiam os escoteiros.',
        color: 'secondary' as const,
        slug: 'lei-escoteira',
    },
    {
        title: 'Promessa do Lobinho',
        description: 'O início da jornada no escotismo.',
        color: 'primary' as const,
        slug: 'promessa-do-lobinho',
    },
];