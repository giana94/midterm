import '../loading.css';

const Loading = () => {
    return (
        <div className="looping-rhombuses-spinner">
          <div className="rhombus"></div>
          <div className="rhombus"></div>
          <div className="rhombus"></div>
        </div>
      );
  };
  
  export default Loading;