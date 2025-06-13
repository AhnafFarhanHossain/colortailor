const Button = ({ title, styles, icon, onClick, loading, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      className={`w-full px-6 py-4 rounded-xl bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed text-white font-semibold ${styles} focus:scale-95 cursor-pointer text-sm transition-all duration-200 ${
        loading || disabled ? "opacity-80" : ""
      }`}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span className="hidden sm:inline">Generating...</span>
          <span className="sm:hidden">...</span>
        </div>
      ) : (
        title
      )}
    </button>
  );
};

export default Button;
