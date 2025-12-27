function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 pt-4 pb-10 md:px-8 md:pt-5 md:pb-16 lg:pt-6 lg:px-25 bg-neutral-100">
      {children}
    </div>
  );
}

export default Container;
