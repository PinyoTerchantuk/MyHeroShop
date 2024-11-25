type ButtonProps = {
  title: string;
  color: string;
};

function Button({ title, color }: ButtonProps) {
  return (
      <button
          style={{
              backgroundColor: color,
              color: '#fff', // Text color
              fontSize: '20px', // Larger font size
              padding: '15px 30px', // More padding for a bigger button
              border: 'none', // Remove default border
              borderRadius: '8px', // Rounded corners
              cursor: 'pointer', // Change cursor to pointer on hover
              fontWeight: 'bold', // Make text bold
          }}
      >
          {title} BUY
      </button>
  );
}

export default Button;
