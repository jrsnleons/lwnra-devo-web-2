export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-teal-900 dark:via-gray-800 dark:to-slate-900">
            <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-teal-200 border-t-teal-600"></div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Loading Devotional...
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Preparing your daily spiritual guidance
                </p>
            </div>
        </div>
    );
}
