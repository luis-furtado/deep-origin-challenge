import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Copy, Check } from 'lucide-react';
import axios from 'axios';

const SERVER_LOCALHOST_BASEURL: string = 'http://localhost:4000/';

export default function URLShortener() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleShorten = async () => {
    setIsSubmitting(true);
    if (!originalUrl) {
      setError('Please enter a valid URL');
      return;
    }
    try {
      const response = await axios.post('http://localhost:4000/shorten', {
        url: originalUrl,
      });
      setShortUrl(`${SERVER_LOCALHOST_BASEURL}${response.data.shortUrl.slug}`);
      setError('');
    } catch (err: any) {
      if (err.response.data.error === 'Invalid URL') {
        setError('The URL is invalid. Please, give a correct URL format.');
      } else if (err.response.data.includes('Entity already exists')) {
        setError('Failed to shorten URL. The URL already exists.');
      } else {
        setError('Failed to shorten URL. Please try again.');
      }
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-black">URL Shortener</h1>
        <h3 className="text-md font-bold mb-6 mt-10 text-black">Enter URL to shorten</h3>
        <Input
          placeholder="Enter URL"
          value={originalUrl}
          onChange={(e) => {
            setOriginalUrl(e.target.value), setIsSubmitting(false), setError('');
          }}
          className="mb-6 text-black w-full"
        />
        <Button onClick={handleShorten} disabled={isSubmitting} className="w-full text-gray">
          Shorten
        </Button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {shortUrl && (
          <CardContent className="mt-4 flex justify-between items-center border p-2 rounded">
            <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              {shortUrl}
            </a>
            <Button onClick={handleCopy}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </Button>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
