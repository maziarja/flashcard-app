function FlashCardAnswer({ answer }: { answer: string }) {
  return (
    <div className="border-border flex min-h-31.5 grow flex-col gap-1.5 border-y p-4">
      <p className="text-preset-5 text-neutral-900 opacity-60">Answer:</p>
      <p className="text-preset-5 text-neutral-900">{answer}</p>
    </div>
  );
}

export default FlashCardAnswer;
