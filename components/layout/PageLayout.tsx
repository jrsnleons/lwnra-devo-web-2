interface PageLayoutProps {
    children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-teal-900 dark:via-gray-800 dark:to-slate-900">
            {children}
        </div>
    );
}
