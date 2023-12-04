import { AbsoluteFill } from "remotion";

export const Background: React.FC = () => {
  return (
    <AbsoluteFill style={{
      background: 'linear-gradient(to bottom, #7affad, #3be374',
      padding: 45
    }}>
      <div style={{flex: 1,
      fontSize: '30px',
      backgroundColor: 'white',
      boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
      }}>hi</div>
    </AbsoluteFill>
  );
}