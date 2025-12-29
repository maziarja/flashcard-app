function EmptyCards() {
  return (
    <div className="mt-8 flex h-62.5 flex-col items-center justify-center gap-2.5 p-5 text-center">
      <p className="text-preset-2 text-neutral-900">No cards yet</p>
      <p className="text-preset-4-regular text-neutral-900">
        Add your first card using the form above and it will show up here
      </p>
    </div>
  );
}

export default EmptyCards;
