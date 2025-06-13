"use client";

import SearchBar from "@/components/Searchbar";
import Toast from "@/components/Toast";
import { Sparkles, Palette } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [showPalettes, setShowPalettes] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (message) => {
    setToastMessage(message);
    setToastVisible(true);
  };

  const hideToast = () => {
    setToastVisible(false);
  };

  const handleGenerate = async (inputKeyword) => {
    // Reset previous state
    setError("");
    setColors([]);

    // Validate input
    if (!inputKeyword || inputKeyword.trim().length === 0) {
      setError("Please enter a keyword to generate colors");
      return;
    }

    setKeyword(inputKeyword);
    setLoading(true);
    setShowPalettes(true);

    try {
      await generateColors(inputKeyword);
    } catch (err) {
      setError("Failed to generate colors. Please try again.");
      console.error("Generation error:", err);
    } finally {
      setLoading(false);
    }
  };

  const generateColors = async (keyword) => {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ keyword: keyword.trim() }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Failed to generate colors");
    }

    console.log("Generated colors:", data.colors); // Debug log
    setColors(data.colors || []);

    // Show message if fallback colors were used
    if (data.fallback || data.error) {
      setError(data.message || "Generated with fallback colors");
    }
  };

  const handleGenerateNew = () => {
    if (keyword) {
      handleGenerate(keyword);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-rose-50 relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-grid-red-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.9))] -z-10 opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="w-full flex flex-col items-center justify-center min-h-[75vh]">
          {/* Header Section */}
          <div className="text-center mb-12 max-w-5xl">
            {/* Icon */}
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <div className="relative p-3 sm:p-4 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl">
                <Palette className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 animate-bounce" />
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold mb-3">
              <span className="bg-gradient-to-r from-gray-800 to-red-800 bg-clip-text text-transparent">
                Generate beautiful color palettes
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-4">
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                with AI
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Transform your creative vision into stunning color combinations
              with the power of artificial intelligence
            </p>
          </div>

          {/* Search Section */}
          <SearchBar onGenerate={handleGenerate} loading={loading} />

          {/* Test Button for Debugging */}
          <div className="mt-4">
            <button
              onClick={() => {
                console.log("Setting test colors...");
                setColors([
                  "#FF0000",
                  "#00FF00",
                  "#0000FF",
                  "#FFFF00",
                  "#FF00FF",
                ]);
                setKeyword("test");
                setShowPalettes(true);
                showToast("Test Colors Loaded!");
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
            >
              Test with Known Colors
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="w-full max-w-xl mx-auto mt-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* Palette Results Section */}
          {showPalettes && (
            <div className="w-full max-w-6xl mx-auto mt-16">
              {/* Results Header */}
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                  Color Palettes for "{keyword}"
                </h2>
                <p className="text-gray-600">
                  Here are AI-generated color palettes based on your keyword
                </p>
              </div>

              {/* Palette Grid */}
              <div className="flex justify-center">
                {/* Single Large Palette Card - Made Much Bigger */}
                <div className="bg-white rounded-3xl shadow-2xl border border-red-100 overflow-hidden hover:shadow-3xl transition-shadow duration-300 max-w-5xl w-full">
                  <div className="p-12">
                    <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">
                      Generated Palette
                    </h3>

                    <div className="space-y-10">
                      {/* Large Color Swatches - Made Much Bigger */}
                      <div className="flex rounded-3xl overflow-hidden shadow-2xl">
                        {loading
                          ? // Loading state - 5 animated placeholder bars
                            Array.from({ length: 5 }).map((_, index) => (
                              <div
                                key={index}
                                className="flex-1 h-40 sm:h-48 bg-gray-200 animate-pulse"
                                style={{ animationDelay: `${index * 0.1}s` }}
                              />
                            ))
                          : colors && colors.length > 0
                          ? // Display actual colors
                            colors.map((color, index) => {
                              // Ensure color is a valid hex code
                              const validColor =
                                color && color.startsWith("#")
                                  ? color
                                  : "#FF6B6B";
                              console.log(
                                `Rendering color ${index}:`,
                                validColor
                              ); // Debug log
                              return (
                                <div
                                  key={index}
                                  className="color-swatch flex-1 h-40 sm:h-48 relative cursor-pointer border border-gray-300 hover:scale-105 transition-transform duration-300"
                                  style={{
                                    "--swatch-color": validColor,
                                    backgroundColor: validColor,
                                    background: validColor,
                                    minHeight: "160px",
                                    minWidth: "80px",
                                  }}
                                  onClick={() => {
                                    navigator.clipboard.writeText(validColor);
                                    console.log("Copied color:", validColor);
                                    showToast("Color Copied to Clipboard!");
                                  }}
                                  title={`Click to copy ${validColor}`}
                                >
                                  <div className="absolute bottom-4 left-4 right-4">
                                    <span className="text-white text-sm font-mono bg-black bg-opacity-80 px-3 py-2 rounded-lg block text-center">
                                      {validColor}
                                    </span>
                                  </div>
                                </div>
                              );
                            })
                          : // Empty state - show default colors for testing
                            [
                              "#FF6B6B",
                              "#4ECDC4",
                              "#45B7D1",
                              "#96CEB4",
                              "#FFEAA7",
                            ].map((color, index) => (
                              <div
                                key={index}
                                className="flex-1 h-40 sm:h-48 relative cursor-pointer hover:scale-105 transition-transform duration-300"
                                style={{ backgroundColor: color }}
                                onClick={() => {
                                  navigator.clipboard.writeText(color);
                                  showToast("Color Copied to Clipboard!");
                                }}
                                title={`Click to copy ${color}`}
                              >
                                <div className="absolute bottom-4 left-4 right-4">
                                  <span className="text-white text-sm font-mono bg-black bg-opacity-80 px-3 py-2 rounded-lg block text-center">
                                    {color}
                                  </span>
                                </div>
                              </div>
                            ))}
                      </div>

                      {/* Color Codes Display */}
                      <div className="space-y-4">
                        {loading ? (
                          // Loading placeholders
                          <div className="grid grid-cols-5 gap-6">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <div key={index} className="text-center">
                                <div className="h-6 bg-gray-200 rounded animate-pulse mb-3"></div>
                                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                              </div>
                            ))}
                          </div>
                        ) : colors && colors.length > 0 ? (
                          // Display actual color codes
                          <div className="grid grid-cols-5 gap-6">
                            {colors.map((color, index) => {
                              const validColor =
                                color && color.startsWith("#")
                                  ? color
                                  : "#FF6B6B";
                              return (
                                <div key={index} className="text-center">
                                  <div
                                    className="bg-gray-100 rounded-xl p-4 cursor-pointer hover:bg-gray-200 transition-colors duration-200"
                                    onClick={() => {
                                      navigator.clipboard.writeText(validColor);
                                      console.log(
                                        "Copied color code:",
                                        validColor
                                      );
                                      showToast("Color Copied to Clipboard!");
                                    }}
                                    title="Click to copy"
                                  >
                                    <div className="text-sm font-mono font-bold text-gray-800 mb-2">
                                      {validColor.toUpperCase()}
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      RGB({parseInt(validColor.slice(1, 3), 16)}
                                      , {parseInt(validColor.slice(3, 5), 16)},{" "}
                                      {parseInt(validColor.slice(5, 7), 16)})
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          // Show default color codes for testing
                          <div className="grid grid-cols-5 gap-6">
                            {[
                              "#FF6B6B",
                              "#4ECDC4",
                              "#45B7D1",
                              "#96CEB4",
                              "#FFEAA7",
                            ].map((color, index) => (
                              <div key={index} className="text-center">
                                <div
                                  className="bg-gray-100 rounded-xl p-4 cursor-pointer hover:bg-gray-200 transition-colors duration-200"
                                  onClick={() => {
                                    navigator.clipboard.writeText(color);
                                    showToast("Color Copied to Clipboard!");
                                  }}
                                  title="Click to copy"
                                >
                                  <div className="text-sm font-mono font-bold text-gray-800 mb-2">
                                    {color.toUpperCase()}
                                  </div>
                                  <div className="text-xs text-gray-600">
                                    RGB({parseInt(color.slice(1, 3), 16)},{" "}
                                    {parseInt(color.slice(3, 5), 16)},{" "}
                                    {parseInt(color.slice(5, 7), 16)})
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <button
                          onClick={() => {
                            if (colors && colors.length > 0) {
                              const validColors = colors.filter(
                                (color) => color && color.startsWith("#")
                              );
                              if (validColors.length > 0) {
                                navigator.clipboard.writeText(
                                  validColors.join(", ")
                                );
                                console.log(
                                  "Copied palette:",
                                  validColors.join(", ")
                                );
                                showToast(
                                  "Entire Palette Copied to Clipboard!"
                                );
                              }
                            }
                          }}
                          disabled={loading || !colors || colors.length === 0}
                          className="flex-1 px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 font-medium text-lg"
                        >
                          {loading ? "Generating..." : "Copy Palette"}
                        </button>
                        <button
                          onClick={() => {
                            if (colors && colors.length > 0) {
                              const validColors = colors.filter(
                                (color) => color && color.startsWith("#")
                              );
                              if (validColors.length > 0) {
                                const text = `Color Palette for "${keyword}":\n${validColors.join(
                                  "\n"
                                )}`;
                                const blob = new Blob([text], {
                                  type: "text/plain",
                                });
                                const url = window.URL.createObjectURL(blob);
                                const a = document.createElement("a");
                                a.href = url;
                                a.download = `${keyword.replace(
                                  /\s+/g,
                                  "_"
                                )}_palette.txt`;
                                a.click();
                                window.URL.revokeObjectURL(url);
                                showToast("Palette Downloaded Successfully!");
                              }
                            }
                          }}
                          disabled={loading || !colors || colors.length === 0}
                          className="flex-1 px-8 py-4 bg-white border border-red-300 text-red-600 rounded-xl hover:bg-red-50 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors duration-300 font-medium text-lg"
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Generate More Button */}
              <div className="text-center mt-12">
                <button
                  onClick={handleGenerateNew}
                  disabled={loading}
                  className="px-8 py-3 bg-white border border-red-300 text-red-600 rounded-xl hover:bg-red-50 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors duration-300 font-medium"
                >
                  {loading ? "Generating..." : "Generate New Palette"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={hideToast}
      />
    </div>
  );
}
