interface PrayerSectionProps {
    prayer: string;
}

export function PrayerSection({ prayer }: PrayerSectionProps) {
    return (
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-2xl shadow-lg p-8 border border-teal-100 dark:border-teal-800/30">
            <h4 className="text-xl font-bold text-teal-800 dark:text-teal-400 mb-6 flex items-center">
                <span className="w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full mr-3"></span>
                Prayer
            </h4>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic text-lg whitespace-pre-line">
                    {prayer}
                </p>
            </div>
        </div>
    );
}
