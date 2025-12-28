function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-360 bg-neutral-100 px-4 pt-4 pb-10 md:px-8 md:pt-5 md:pb-16 lg:pt-6 xl:px-25">
      {children}
    </div>
  );
}

export default Container;
