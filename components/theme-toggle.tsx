"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Only render after mounting to avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    // Show a placeholder until mounted to prevent hydration mismatch
    if (!mounted) {
        return (
            <Button
                variant="outline"
                size="sm"
                disabled
                className="bg-white/80 dark:bg-gray-800/80 border-2 border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300 transition-all duration-200 backdrop-blur-sm shadow-md"
            >
                <Moon className="h-4 w-4 mr-2" />
                Theme
            </Button>
        );
    }

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="bg-white/80 dark:bg-gray-800/80 border-2 border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:border-teal-300 dark:hover:border-teal-600 transition-all duration-200 backdrop-blur-sm shadow-md hover:shadow-lg"
        >
            {theme === "dark" ? (
                <>
                    <Sun className="h-4 w-4 mr-2" />
                    Light
                </>
            ) : (
                <>
                    <Moon className="h-4 w-4 mr-2" />
                    Dark
                </>
            )}
        </Button>
    );
}
