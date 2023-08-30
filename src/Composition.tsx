import { AbsoluteFill, IFrame, Audio, Video, staticFile } from "remotion";
import { MyClips } from "./Clips";

type VideoProps = {
  videoURL: string;
};

export const MyComposition = () => {
	return (
		<div>
		<AbsoluteFill>
			<Video src="https://www.pexels.com/ko-kr/download/video/1536322/" width="100%"/>
			
		</AbsoluteFill>
		<MyClips/>
		<Audio startFrom={40}  src={staticFile("drum.mp3")}/>
			<Audio startFrom={10} src={staticFile("house_proud.mp3")}/>
	</div>
	);
};
