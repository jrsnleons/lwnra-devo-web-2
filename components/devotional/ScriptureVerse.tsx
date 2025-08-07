interface ScriptureVerseProps {
    reading: string;
    version: string;
    passage: string;
}

export function ScriptureVerse({
    reading,
    version,
    passage,
}: ScriptureVerseProps) {
    const formatPassage = (text: string) => {
        return `&ldquo;${text.replace(/(\d+)/g, "<sup>$1</sup>")}&rdquo;`;
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-teal-100 dark:border-teal-700/50">
            <div className="text-start">
                <h3 className="text-lg font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wide mb-3">
                    {reading} ({version})
                </h3>
                <blockquote
                    className="text-md md:text-lg font-medium text-gray-800 dark:text-gray-200 leading-relaxed"
                    dangerouslySetInnerHTML={{
                        __html: formatPassage(passage),
                    }}
                />
            </div>
        </div>
    );
}
