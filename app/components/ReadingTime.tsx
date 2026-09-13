interface ReadingTimeProps {
  text: string;
}

export default function ReadingTime({ text }: ReadingTimeProps) {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);

  return (
    <span className="text-gray-600 dark:text-gray-400">
      {time} min read
    </span>
  );
}

export function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return `${time} min read`;
}
