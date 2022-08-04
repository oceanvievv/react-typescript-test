interface ErrorMessageProps {
  error: string;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return <p className="text-center text-red-600 mt-3 mb-3">{error}</p>;
}
