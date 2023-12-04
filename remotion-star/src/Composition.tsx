import { AbsoluteFill } from "remotion";
import { Background } from "./Background";
import { Dots } from "./Dots";
import { RedHearts } from "./RedHearts";
import { YellowHearts } from "./YellowHearts";

export const MyComposition = () => {
	return (
	  <AbsoluteFill>
		<Background />
		<Dots/>
		<RedHearts/>
		<YellowHearts/>
	  </AbsoluteFill>
	);
  };
  