export function Input({ placeholder, value, onChange, className }: { placeholder?: string; value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; className?: string }) {
    return (
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`"w-full p-2 border rounded-md focus:ring focus:ring-blue-300 outline-none ${className}`}
      />
    );
  }
  