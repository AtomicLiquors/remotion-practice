import {Composition} from 'remotion';

import { Stories } from './Stories';

// Each <Composition> is an entry in the sidebar!

const durationInSeconds = 7;
const fps = 30;

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				id="Stories"
				component={Stories}
				durationInFrames={durationInSeconds * fps}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					messageIds: [
						'a','b','c'
					]
				}}
			/>
		</>
	);
};
