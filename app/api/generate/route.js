import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { keyword } = body;

    // Validate keyword
    if (!keyword || keyword.trim().length === 0) {
      return NextResponse.json(
        { error: "Keyword is required" },
        { status: 400 }
      );
    }

    // Make request to OpenRouter
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat",
          messages: [
            {
              role: "user",
              content: `Generate exactly 5 hex color codes that represent the mood, feeling, or theme of "${keyword.trim()}". Return ONLY the 5 hex codes separated by commas, no other text. Example format: #FF5733,#33FF57,#3357FF,#FF33F5,#F5FF33`,
            },
          ],
          max_tokens: 50,
          temperature: 0.7,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error("Invalid response from OpenRouter API");
    }
    const rawText = data.choices[0].message.content;
    console.log("Raw AI response:", rawText); // Debug log

    // Extract hex colors from the response
    let hexColors = rawText.match(/#[0-9a-fA-F]{6}/g);

    // If no valid hex colors found, try to extract any color-like patterns
    if (!hexColors || hexColors.length === 0) {
      console.log("No hex colors found, trying alternative extraction...");
      // Try to find hex colors without # prefix
      const possibleHex = rawText.match(/[0-9a-fA-F]{6}/g);
      if (possibleHex) {
        hexColors = possibleHex.map((color) => "#" + color);
      }
    }

    if (!hexColors || hexColors.length === 0) {
      console.log("No valid colors found, using fallback colors");
      // Fallback colors if no valid hex codes found
      const fallbackColors = [
        "#FF6B6B",
        "#4ECDC4",
        "#45B7D1",
        "#96CEB4",
        "#FFEAA7",
      ];
      return NextResponse.json({
        colors: fallbackColors,
        fallback: true,
        message:
          "Generated fallback colors - AI response did not contain valid hex codes",
      });
    }

    // Ensure we have exactly 5 colors and they are valid
    const colors = [];
    for (let i = 0; i < Math.min(5, hexColors.length); i++) {
      const color = hexColors[i].toUpperCase();
      // Validate hex color format
      if (/^#[0-9A-F]{6}$/.test(color)) {
        colors.push(color);
      }
    }

    // Fill remaining slots with random colors if needed
    while (colors.length < 5) {
      const randomColor =
        "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0")
          .toUpperCase();
      colors.push(randomColor);
    }

    console.log("Final colors array:", colors); // Debug log

    return NextResponse.json({
      colors: colors,
      keyword: keyword.trim(),
      aiResponse: rawText, // Include for debugging
    });
  } catch (error) {
    console.error("Error generating colors:", error);

    // Return fallback colors in case of any error
    const fallbackColors = [
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#96CEB4",
      "#FFEAA7",
    ];
    return NextResponse.json(
      {
        colors: fallbackColors,
        error: true,
        message: "Error generating colors, using fallback palette",
      },
      { status: 500 }
    );
  }
}
