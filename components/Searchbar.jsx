"use client";

import { Sparkles } from "lucide-react";
import Button from "./Button";
import { useState } from "react";

const SearchBar = ({ onGenerate, loading: externalLoading }) => {
  const [inputValue, setInputValue] = useState("");

  const handleGenerate = async () => {
    if (inputValue.trim()) {
      await onGenerate(inputValue.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleGenerate();
    }
  };

  return (
    <div className="w-full max-w-xl sm:max-w-3xl mx-auto">
      <div className="p-4 sm:p-5 bg-white rounded-xl border border-red-100 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
          <div className="relative flex-1 w-full">
            {" "}
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Keywords (e.g 'bold', 'pastel', 'sunset', 'ocean')"
              disabled={externalLoading}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-base bg-white border border-red-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-300 disabled:bg-gray-50 disabled:cursor-not-allowed transition-all duration-300 placeholder-gray-400"
            />
            <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-red-400" />
            </div>
          </div>{" "}
          <div className="w-full sm:w-auto mt-3 sm:mt-0">
            {" "}
            <Button
              onClick={handleGenerate}
              loading={externalLoading}
              disabled={externalLoading || !inputValue.trim()}
              title={
                <>
                  <span className="hidden sm:inline">Generate Magic</span>
                  <span className="sm:hidden">Generate</span>
                </>
              }
            />
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-[0.7rem] sm:text-xs text-gray-600">
          <div className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-white rounded-full border border-red-100">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-white rounded-full border border-red-100">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600 rounded-full"></div>
            <span>Instant Results</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 bg-white rounded-full border border-red-100">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-700 rounded-full"></div>
            <span>Export Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
