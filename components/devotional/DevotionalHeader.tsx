import { ModeToggle } from "@/components/theme-toggle";

interface DevotionalHeaderProps {
    date: string;
}

export function DevotionalHeader({ date }: DevotionalHeaderProps) {
    return (
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-700 dark:to-cyan-800 shadow-lg">
            <div className="max-w-4xl mx-auto px-6 py-8 text-center">
                <div className="flex items-center justify-center mb-4">
                    <h1 className="text-5xl font-bold text-white">
                        Daily Devotionals
                    </h1>
                </div>
                <p className="text-lg text-teal-100">Living Word NRA</p>
                <p className="text-sm text-teal-200 mt-2 mb-4">{date}</p>
                <div className="flex justify-center">
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
}
