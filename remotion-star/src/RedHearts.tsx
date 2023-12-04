import React from "react";
import { AbsoluteFill } from "remotion";
import { Explosion } from "./Explosion";
import { Move } from "./Move";
import { SingleEmoji } from "./SingleEmoji";
import { Shrinking } from "./Shrinking";

export const RedHearts: React.FC = () => {
    return (
        <Explosion>
            <Move delay={5}>
                <AbsoluteFill style={{ transform: `translateY(-75px)`}}>
                    <Shrinking>
                        <SingleEmoji emoji="❤️"/>
                    </Shrinking>
                </AbsoluteFill>
            </Move>
        </Explosion>
    )
}