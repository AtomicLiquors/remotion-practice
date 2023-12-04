import React from "react";
import { AbsoluteFill } from "remotion";
 
export const SingleEmoji: React.FC<{
    emoji: String
}> = ({ emoji }) => {
    return (
        <AbsoluteFill style={{
            justifyContent: "center",
            alignItems: "center"
        }}>
            {emoji}
        </AbsoluteFill>
    )
}