import {AbsoluteFill} from 'remotion';
import {Background} from './Background';
import {useCallback, useEffect} from 'react';

export const Stories: React.FC<{
	messageIds: string[];
}> = ({messageIds}) => {
	const fetchMessages = useCallback(async () => {
		const messages = await Promise.all(
			messageIds.map(async (m) => {
				const response = await fetch(`https://cat-fact.herokuapp.com/facts`);
				const json = await response.json();
				return json;
			})
		);
    console.log(messages);
	}, [messageIds]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages])

	return (
		<AbsoluteFill>
			<Background />
		</AbsoluteFill>
	);
};
