const Loader = () => {
  return (
    <>
      <div className="fixed inset-0 bg-blue-400" />
      <div
        className={`fixed flex h-screen w-full items-center justify-center`}
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <div className="flex flex-col items-center justify-center text-white">
          <div
            className="spinner-border mb-4 inline-block h-8 w-8 animate-spin rounded-md border-4"
            role="status"
          ></div>
          <>Loading...</>
        </div>
      </div>
    </>
  );
};

export default Loader;
