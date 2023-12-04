import {AbsoluteFill, continueRender, delayRender} from 'remotion';
import {Background} from './Background';
import {useCallback, useEffect, useState} from 'react';
import { SingleMessageApiResponse } from './types';
import { Message } from './Message';

export const Stories: React.FC<{
	messageIds: string[];
}> = ({messageIds}) => {
  const [handle] = useState(() => delayRender());

  const [messages, setMessages] = useState<SingleMessageApiResponse[] | null>(
    null
  );
	const fetchMessages = useCallback(async () => {
		const fetchedMessages = await Promise.all(
			messageIds.map(async (m) => {
				const response = await fetch(`https://cat-fact.herokuapp.com/facts`);
				const json = await response.json();
				return json;
			})
		);
    setMessages(fetchedMessages);
//    
    continueRender(handle);
	}, [messageIds]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages])

  if (!messages) {
    return null;
  }

  console.log({messages});

	return (
		<AbsoluteFill>
    {messages.map((m) => {
      return (
        <Message data={m}/>
      )
    })}

    {/*<Background />*/}

		</AbsoluteFill>
	);
};
