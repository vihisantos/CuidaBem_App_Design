import React from 'react';
import { motion } from 'framer-motion';
import { Network, FileCode, Shield, Layout, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router';

// Metadata for routes to display in the map
const routeMetadata = {
    '/': {
        title: 'Root / Auth',
        description: 'Ponto de entrada público. Gerencia autenticação e acesso inicial.',
        type: 'layout',
        icon: Shield
    },
    '/login': {
        title: 'Login',
        description: 'Tela de acesso. Permite entrar como Família ou Cuidador.',
        type: 'page',
        icon: FileCode
    },
    '/cadastro': {
        title: 'Cadastro',
        description: 'Registro de novos usuários no sistema.',
        type: 'page',
        icon: FileCode
    },
    '/app': {
        title: 'App Layout',
        description: 'Layout principal da aplicação protegida. Inclui navegação e sidebar.',
        type: 'layout',
        icon: Layout
    },
    '/app/': {
        title: 'Dashboard (Home)',
        description: 'Visão geral para famílias. Atalhos e status.',
        type: 'page',
        icon: FileCode
    },
    '/app/buscar': {
        title: 'Buscar Cuidadores',
        description: 'Interface de pesquisa com filtros e lista de profissionais.',
        type: 'page',
        icon: FileCode
    },
    '/app/cuidador': {
        title: 'Área do Cuidador',
        description: 'Dashboard específico para profissionais. Vagas e ganhos.',
        type: 'page',
        icon: FileCode
    },
    '/app/perfil': {
        title: 'Perfil do Usuário',
        description: 'Configurações de conta e dados pessoais.',
        type: 'page',
        icon: FileCode
    },
    '/app/pedidos': {
        title: 'Meus Pedidos',
        description: 'Histórico e status de contratações.',
        type: 'page',
        icon: FileCode
    }
};

const TreeNode = ({ label, path, children, level = 0 }: { label: string, path: string, children?: React.ReactNode, level?: number }) => {
    const metadata = routeMetadata[path as keyof typeof routeMetadata] || {
        title: label,
        description: 'Rota do sistema',
        type: 'unknown',
        icon: FileCode
    };

    const Icon = metadata.icon;
    const isLayout = metadata.type === 'layout';

    return (
        <div className="relative">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: level * 0.1 }}
                className="flex items-start gap-4 mb-6 group"
            >
                <div className={`
          flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
          ${isLayout ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}
          border border-border/50 shadow-sm transition-all group-hover:scale-105 group-hover:shadow-md
        `}>
                    <Icon size={24} />
                </div>

                <Card className="flex-1 border-border/60 hover:border-primary/50 transition-colors">
                    <CardContent className="p-4 flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <Badge variant={isLayout ? "outline" : "secondary"} className="text-[10px] uppercase tracking-wider">
                                    {metadata.type}
                                </Badge>
                                <code className="text-xs text-muted-foreground bg-muted px-1 py-0.5 rounded">
                                    {path}
                                </code>
                            </div>
                            <h3 className="font-semibold text-lg text-foreground tracking-tight">
                                {metadata.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1 max-w-md">
                                {metadata.description}
                            </p>
                        </div>

                        <Button variant="ghost" size="sm" asChild className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <Link to={path === '/app/' ? '/app' : path}>
                                Visitar <ExternalLink className="ml-2 w-3 h-3" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>

            {children && (
                <div className="ml-6 pl-8 border-l-2 border-dashed border-border/40 pb-2">
                    {children}
                </div>
            )}
        </div>
    );
};

export default function ProjectMap() {
    return (
        <div className="min-h-screen bg-background text-foreground p-8 md:p-12 font-sans">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                                <Network size={32} />
                            </div>
                            <Badge variant="secondary" className="px-3 py-1">Living Documentation v1.0</Badge>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Mapa do Projeto CuidaBem
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">
                            Visualização estrutural das rotas e fluxos da aplicação.
                            Este mapa é gerado programaticamente para refletir a arquitetura atual.
                        </p>
                    </motion.div>
                </header>

                <div className="space-y-8">
                    <TreeNode label="Auth Root" path="/" level={0}>
                        <TreeNode label="Login" path="/login" level={1} />
                        <TreeNode label="Cadastro" path="/cadastro" level={1} />
                    </TreeNode>

                    <div className="my-8 flex items-center gap-4">
                        <div className="h-px flex-1 bg-border/60 dashed" />
                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Área Logada</span>
                        <div className="h-px flex-1 bg-border/60 dashed" />
                    </div>

                    <TreeNode label="App Root" path="/app" level={0}>
                        <TreeNode label="Dashboard" path="/app/" level={1} />
                        <TreeNode label="Buscar" path="/app/buscar" level={1} />
                        <TreeNode label="Cuidador" path="/app/cuidador" level={1} />
                        <TreeNode label="Perfil" path="/app/perfil" level={1} />
                        <TreeNode label="Pedidos" path="/app/pedidos" level={1} />
                    </TreeNode>
                </div>

                <footer className="mt-20 pt-8 border-t border-border/40 text-center text-muted-foreground text-sm">
                    <p>Gerado automaticamente pelo Agente Antigravity para documentação viva do sistema.</p>
                </footer>
            </div>
        </div>
    );
}
