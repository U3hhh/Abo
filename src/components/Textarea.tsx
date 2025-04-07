import React from 'react';

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      {...props}
      style={{
        width: '100%',
        minHeight: '200px',
        padding: '1rem',
        fontSize: '1rem',
        borderRadius: '8px',
        border: '1px solid #ccc',
        resize: 'vertical',
      }}
    />
  );
});
