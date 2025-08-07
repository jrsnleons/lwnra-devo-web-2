"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { Component, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    render() {
        if (this.state.hasError) {
            return (
                <PageLayout>
                    <div className="min-h-screen flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                                LWNRA Devotionals
                            </h1>
                            <p className="text-red-600 dark:text-red-400 mb-4">
                                Failed to load today&apos;s devotional
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                </PageLayout>
            );
        }

        return this.props.children;
    }
}
