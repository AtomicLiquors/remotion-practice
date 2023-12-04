import React from "react";
import { AbsoluteFill } from "remotion";
import { Explosion } from "./Explosion";
import { Move } from "./Move";
import { SingleEmoji } from "./SingleEmoji";
import { Shrinking } from "./Shrinking";

export const YellowHearts: React.FC = () => {
    return (
        <AbsoluteFill style={{
            rotate: "0.3rad",
        }}>
            <Explosion>
                <Move delay={20}>
                    <AbsoluteFill style={{ transform: `translateY(-50px)`}}>
                        <Shrinking>
                            <SingleEmoji emoji="💛"/>
                        </Shrinking>
                    </AbsoluteFill>
                </Move>
            </Explosion>
        </AbsoluteFill>
    )
}