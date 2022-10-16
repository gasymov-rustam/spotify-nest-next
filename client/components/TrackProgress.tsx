import { ChangeEvent, FC } from 'react';

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TrackProgress: FC<TrackProgressProps> = ({ left, right, onChange }) => (
  <div style={{ display: 'flex' }}>
    <input type='range' min={0} max={right} value={left} onChange={onChange} />

    <div>
      {left} / {right}
    </div>
  </div>
);
