import { revalidate } from 'lib/commerce';

export async function POST(req) {
  return revalidate(req);
}