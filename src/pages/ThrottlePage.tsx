import { useEffect } from 'react';
import { useThrottle } from '../hooks/useThrottle';

function ThrottlePage() {
  const resizeHandler = useThrottle((e) => console.log(e), 3000);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [resizeHandler]);

  return (
    <div style={{ textAlign: 'right' }}>
      <h3> Throttle</h3>
      <p>Resize the window to see the throttle in action, </p>
      <p style={{ color: 'blue' }}>it will print message every 3 seconds</p>
    </div>
  );
}

export default ThrottlePage;
