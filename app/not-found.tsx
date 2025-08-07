import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-teal-900 dark:via-gray-800 dark:to-slate-900">
            <div className="max-w-md mx-auto text-center p-8">
                <div className="mb-8">
                    <div className="text-8xl font-bold text-teal-600 dark:text-teal-400 mb-4">
                        404
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Page Not Found
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        The page you&apos;re looking for doesn&apos;t exist or
                        has been moved.
                    </p>
                </div>

                <div className="space-y-4">
                    <Button
                        asChild
                        className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                        <Link href="/">Return Home</Link>
                    </Button>
                    <Button
                        variant="outline"
                        asChild
                        className="w-full border-2 border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 hover:border-teal-300 dark:hover:border-teal-600 font-semibold py-3 px-6 rounded-xl transition-all duration-200"
                    >
                        <Link href="javascript:history.back()">Go Back</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
