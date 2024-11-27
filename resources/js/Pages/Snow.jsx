// Snow.jsx
import Snowfall from 'react-snowfall'

const Snow = () => {
  return (
    <div style={{ 
      position: 'fixed', 
      width: '100%', 
      height: '100%', 
      zIndex: 1,
      pointerEvents: 'none'  // Makes element "ghost-like"
    }}>
      <Snowfall 
        snowflakeCount={20}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none'
        }}
        speed={[0.5, 2]}
        wind={[-0.5, 2]}
        radius={[0.5, 3]}
        color="rgba(255, 255, 255, 0.8)"  // Slightly transparent snow
      />
    </div>
  );
};

export default Snow;