import { DevotionalContent } from "@/components/devotional/DevotionalContent";
import { DevotionalHeader } from "@/components/devotional/DevotionalHeader";
import { PrayerSection } from "@/components/devotional/PrayerSection";
import { ReflectionQuestions } from "@/components/devotional/ReflectionQuestions";
import { ScriptureVerse } from "@/components/devotional/ScriptureVerse";
import { DevotionalSkeleton } from "@/components/DevotionalSkeleton";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Footer } from "@/components/layout/Footer";
import { PageLayout } from "@/components/layout/PageLayout";
import { getDevotional } from "@/lib/devotional-service";
import { Suspense } from "react";

async function DevotionalPage() {
    const devotional = await getDevotional();

    return (
        <PageLayout>
            <DevotionalHeader date={devotional.date} />

            <main className="max-w-4xl mx-auto px-6 py-12">
                <div className="space-y-8">
                    <ScriptureVerse
                        reading={devotional.reading}
                        version={devotional.version}
                        passage={devotional.passage}
                    />

                    <ReflectionQuestions questions={devotional.reflection_qs} />

                    <DevotionalContent
                        title={devotional.title}
                        author={devotional.author}
                        body={devotional.body}
                    />

                    <PrayerSection prayer={devotional.prayer} />
                </div>
            </main>

            <Footer />
        </PageLayout>
    );
}

export default function Home() {
    return (
        <ErrorBoundary>
            <Suspense fallback={<DevotionalSkeleton />}>
                <DevotionalPage />
            </Suspense>
        </ErrorBoundary>
    );
}
