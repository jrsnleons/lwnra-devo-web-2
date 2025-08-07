import { BookLogo } from "@/components/ui/BookLogo";

export function Footer() {
    return (
        <div className="bg-teal-400 dark:bg-teal-600 border-t border-teal-300 dark:border-teal-700 mt-16">
            <div className="max-w-4xl mx-auto px-6 py-8 text-center">
                <div className="flex items-center justify-center mb-3">
                    <BookLogo size={20} className="text-white mr-2" />
                    <span className="text-white dark:text-teal-50 text-sm font-semibold">
                        LWNRA Daily Devotionals
                    </span>
                </div>
                <p className="text-neutral-300 dark:text-teal-50 text-sm font-medium">
                    Created by jrsnleons
                </p>
            </div>
        </div>
    );
}
