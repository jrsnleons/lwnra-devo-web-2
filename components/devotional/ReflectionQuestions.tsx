interface ReflectionQuestionsProps {
    questions: string[];
}

export function ReflectionQuestions({ questions }: ReflectionQuestionsProps) {
    return (
        <div className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl shadow-lg p-8 border border-teal-100 dark:border-teal-800/30">
            <h4 className="text-xl font-bold text-teal-800 dark:text-teal-400 mb-6 flex items-center">
                <span className="w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full mr-3"></span>
                Reflection Questions
            </h4>
            <div className="space-y-4">
                {questions.map((question, index) => (
                    <div key={index} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-teal-200 dark:bg-teal-700 text-teal-800 dark:text-teal-200 rounded-full flex items-center justify-center text-sm font-semibold">
                            {index + 1}
                        </span>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {question}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
