interface DevotionalContentProps {
    title: string;
    author: string;
    body: string;
}

export function DevotionalContent({
    title,
    author,
    body,
}: DevotionalContentProps) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
            {/* Title Section */}
            <div className="text-center mb-8 pb-6 border-b border-gray-200 dark:border-gray-600">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    {title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                    by {author}
                </p>
            </div>

            {/* Content Section */}
            <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                    {body}
                </div>
            </div>
        </div>
    );
}
