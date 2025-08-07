import { PageLayout } from "@/components/layout/PageLayout";

export function DevotionalSkeleton() {
    return (
        <PageLayout>
            <div className="animate-pulse">
                {/* Header Skeleton */}
                <div className="bg-gray-200 dark:bg-gray-700 h-40 mb-8"></div>

                {/* Content Skeleton */}
                <div className="max-w-4xl mx-auto px-6 space-y-8">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-gray-200 dark:bg-gray-700 h-48 rounded-2xl"
                        ></div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
