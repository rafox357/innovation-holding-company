class SimpleRateLimiter {
  private requests: Map<string, { count: number; timestamp: number }>;
  private points: number;
  private duration: number;

  constructor(points: number, duration: number) {
    this.requests = new Map();
    this.points = points;
    this.duration = duration;
  }

  async consume(key: string): Promise<void> {
    const now = Date.now();
    const record = this.requests.get(key);

    if (!record) {
      this.requests.set(key, { count: 1, timestamp: now });
      return;
    }

    if (now - record.timestamp > this.duration * 1000) {
      this.requests.set(key, { count: 1, timestamp: now });
      return;
    }

    if (record.count >= this.points) {
      throw new Error('Too many requests');
    }

    this.requests.set(key, {
      count: record.count + 1,
      timestamp: record.timestamp,
    });
  }
}

const rateLimiter = new SimpleRateLimiter(5, 60); // 5 requests per 60 seconds

export default rateLimiter;
